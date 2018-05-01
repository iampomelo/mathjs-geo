import {
  isType,
  errLog
} from '../helper';

/**
 * 小数四舍五入
 * @param number 数字
 * @param d 小数点后保留的位数
 * @returns {number}
 */
const round = (number, d) => {
  if (!isType([number, d], 'Number', true) || d < 0) {
    errLog('round function params error.');
    return 0;
  }
  return parseFloat(Number.prototype.toFixed.call(number, parseInt(d)));
};

export {
  round
};
