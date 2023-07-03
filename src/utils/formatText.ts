import Graphemer from 'graphemer'

export function formatHash(hash: string, units = 12) {
  if (hash && hash.length > units) {
    const splitter = new Graphemer()
    let arr = splitter.splitGraphemes(hash)
    if (arr && arr.length > units) {
      return `${arr.slice(0, Math.floor(units / 2)).join('')}....${arr.slice(-Math.floor(units / 2)).join('')}`
    } else {
      return hash
    }
  } else {
    return hash
  }
}

export function trimSpecialChar(str: string) {
  let result = str || ''
  if (result) {
    // 去掉空格
    result = result.replace(/\s+/g, '')
    // 去掉回车换行
    result = result.replace(/[\r\n]/g, '')
    // 去掉逗号
    result = result.replace(/，|,/g, '')
    // 去掉/
    result = result.replace(/\//g, '')
  }
  return result
}

export function toBigCamel(name: string, split = '') {
  if (!name) return ''

  const smallCamel = name.replace(/_(\w)/g, function (_all, letter) {
    return `${split}${letter.toUpperCase()}`
  })
  return smallCamel.substr(0, 1).toUpperCase() + smallCamel.substr(1)
}
