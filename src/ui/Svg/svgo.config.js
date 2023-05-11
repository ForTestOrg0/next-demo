// 'plugins':
//   - 'removeDimensions': true
//   - 'removeXMLNS': false
//   - 'sortAttrs': true
//   - 'removeAttrs':
//       attrs: 'fill'
//   - 'addAttributesToSVGElement':
//       attributes:
//         - 'fill': 'currentColor'
//         - 'aria-hidden': 'true'

module.exports = {
  plugins: [
    {
      name: 'removeDimensions',
      params: true
    },
    {
      name: 'removeXMLNS',
      params: true
    },
    {
      name: 'sortAttrs',
      params: true
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: 'fill'
      }
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          { fill: 'currentColor' },
          { 'aria-hidden': 'true' }]
      }
    }
  ]
}