import BigNumber from 'bignumber.js'

export const BIG_ZERO = new BigNumber(0)
export const BIG_ONE = new BigNumber(1)
export const BIG_NINE = new BigNumber(9)
export const BIG_TEN = new BigNumber(10)
export const BIG_MAX_UINT256 = new BigNumber('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

/**
 * Returns a string representation of the given number with a specified precision.
 *
 * @param {number | string} number - The number to be converted to a string with precision.
 * @param {number} [fixed=2] - The number of digits to appear after the decimal point.
 * @return {string} A string representation of the given number with the specified precision.
 */
export const getFixedNumber = (number: number | string, fixed = 2) => {
  return new BigNumber(number).toFixed(fixed)
}

/**
 * Converts a string to a number and returns the result.
 *
 * @param {string} str - The string to be converted to a number.
 * @return {number} The resulting number after conversion.
 */
export const stringToNumber = (str: string) => {
  return new BigNumber(str).toNumber()
}

/**
 * Converts a number to a string with an abbreviated representation.
 *
 * @param {number | string} number - The number to be abbreviated.
 * @param {number} digits - The number of digits after the decimal point.
 * @return {string} The abbreviated number as a string.
 */
export const abbreviateNumber = (number: number | string, digits: number) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return new BigNumber(number).gte(item.value)
    })
  return item ? new BigNumber(number).dividedBy(item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0'
}

/**
 * st is used with numbers ending in 1 (e.g. 1st, pronounced first)
 * nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
 * rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
 * As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
 * th is used for all other numbers (e.g. 9th, pronounced ninth).
 * @param {number} i - the number to get the ordinal suffix of
 * @returns {string} The ordinal suffix of the number
 */
export const ordinalSuffixOf = (i: number) => {
  var j = i % 10,
    k = i % 100
  if (j == 1 && k != 11) {
    return i + 'st'
  }
  if (j == 2 && k != 12) {
    return i + 'nd'
  }
  if (j == 3 && k != 13) {
    return i + 'rd'
  }
  return i + 'th'
}
