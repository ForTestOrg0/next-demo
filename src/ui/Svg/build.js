const fs = require('fs').promises
const camelcase = require('camelcase')
const { promisify } = require('util')
const rimraf = promisify(require('rimraf'))
const svgr = require('@svgr/core').default
const babel = require('@babel/core')
const { dirname } = require('path')
const root = './src/ui/Svg';

let transform = {
  react: async (svg, componentName, format) => {
    let component = await svgr(svg, { ref: true, titleProp: true }, { componentName })
    let { code } = await babel.transformAsync(component, {
      plugins: [[require('@babel/plugin-transform-react-jsx'), { useBuiltIns: true }]],
    })

    if (format === 'esm') {
      return code
    }

    return code
      .replace('import * as React from "react"', 'const React = require("react")')
      .replace('export default', 'module.exports =')
  },
}

async function getIcons() {
  let files = await fs.readdir(`${root}/optimized/`)
  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(`${root}/optimized/${file}`, 'utf8'),
      componentName: `${camelcase(file.replace(/\.svg$/, ''), {
        pascalCase: true,
      })}Icon`,
    }))
  )
}

function exportAll(icons, format, includeExtension = true) {
  return icons
    .map(({ componentName }) => {
      let extension = includeExtension ? '.js' : ''
      if (format === 'esm') {
        return `export { default as ${componentName} } from './${componentName}${extension}'`
      }
      return `module.exports.${componentName} = require("./${componentName}${extension}")`
    })
    .join('\n')
}

function storybook(icons) {
  const importString = 'import { ' + icons.map(({ componentName }) => componentName).join(', ') + ' } from "./";\n';
  const iconList = icons.map(({ componentName }) => {
    return `      <div className="flex flex-col justify-center items-center border w-32">
     <${componentName} className={className} />
     <span className="text-sm">${componentName}</span>
   </div>`
  }).join('\n');

  return `${importString}
  export function Icons({className = ''}) {
  return (
    <div className="flex flex-wrap">
${iconList}
    </div>
  )
}`
}

async function ensureWrite(file, text) {
  await fs.mkdir(dirname(file), { recursive: true })
  await fs.writeFile(file, text, 'utf8')
}

async function buildIcons(library, format) {
  let outDir = `${root}/${library}`
  let icons = await getIcons()

  await Promise.all(
    icons.flatMap(async ({ componentName, svg }) => {
      let content = await transform[library](svg, componentName, format)
      let types =
        library === 'react'
          ? `import * as React from 'react';\ndeclare const ${componentName}: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;\nexport default ${componentName};\n`
          : `import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';\ndeclare const ${componentName}: FunctionalComponent<HTMLAttributes & VNodeProps>;\nexport default ${componentName};\n`

      return [
        ensureWrite(`${outDir}/${componentName}.js`, content),
        ...(types ? [ensureWrite(`${outDir}/${componentName}.d.ts`, types)] : []),
      ]
    })
  )

  await ensureWrite(`${outDir}/index.js`, exportAll(icons, format))

  await ensureWrite(`${outDir}/index.d.ts`, exportAll(icons, 'esm', false))

  await ensureWrite(`${root}/Icons.tsx`, storybook(icons))
}

async function main(library) {

  console.log(`Building ${library} library...`)

  await Promise.all([
    rimraf(`${root}/${library}/*`),
  ])

  await Promise.all([
    buildIcons(library, 'esm'),
  ])

  return console.log(`Finished building ${library} library.`)
}

let [library] = process.argv.slice(2)

if (!library) {
  throw new Error('Please specify a library')
}

main(library)
