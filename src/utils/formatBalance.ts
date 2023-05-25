import BigNumber from 'bignumber.js';
import { BIG_TEN } from './bigNumber';
import { BALANCE_DECIMALS, BIGNUMBER_FMT } from '@/config/constants';

/**
 * Take a formatted amount, e.g. 15 BNB and convert it to full decimal value, e.g. 15000000000000000
 */
export const getDecimalAmount = (amount: BigNumber, decimals = 18) => {
  return new BigNumber(amount).times(BIG_TEN.pow(decimals));
};

export const getBalanceAmount = (amount: BigNumber, decimals = 18) => {
  return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals));
};

export const getFullDisplayBalance = (balance: BigNumber, decimals = 18) => {
  return getBalanceAmount(balance, decimals);
};

export const getDisplayBalanceWithFixd = (
  balance: BigNumber,
  decimals = 18,
  displayDecimals = BALANCE_DECIMALS
) => {
  return getBalanceAmount(balance, decimals).toFixed(displayDecimals);
};

// export const formatNumber = (number: number, minPrecision = 2, maxPrecision = 2) => {
//   const options = {
//     minimumFractionDigits: minPrecision,
//     maximumFractionDigits: maxPrecision
//   };
//   return number.toLocaleString(undefined, options);
// };

/**
 * Formats a number to Fixed
 * i.e. Formats 10.1248 to 10.12 (2 display decimals)
 * round
 * @param number
 */
export const formatNumberToFixed = (number: string | number, decimals = 2) => {
  return new BigNumber(number).toFixed(decimals);
};

export const formatNumber = (number: string | number) => {
  return new BigNumber(number).toFormat(BIGNUMBER_FMT);
};
