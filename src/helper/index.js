const toString = Object.prototype.toString;

/**
 * 判断val是否为type类型的值
 * @param val
 * @param type 可能的值为Function, Object, Array, Number, String, RegExp, Null, Undefined, Boolean, Symbol, Date等
 * @returns {boolean}
 */
const isType = (val, type) => {
  if (type === 'Number' && Number.isNaN(val)) {
    return false;
  }
  return toString.call(val).replace(/.*\s(.*)]$/, '$1') === type;
};

/**
 * 获取val的类型
 * @param val
 * @returns {string}
 */
const getType = val => Number.isNaN(val) ? 'NaN' : toString.call(val).replace(/.*\s(.*)]$/, '$1');

/**
 * 数组最大值
 * @param arr
 * @returns {*}
 */
const arrayMax = arr => {
  return Math.max.apply(null, arr);
};

/**
 * 数组最小值
 * @param arr
 * @returns {*}
 */
const arrayMin = arr => {
  return Math.min.apply(null, arr);
};

export {
  isType,
  getType,
  arrayMax,
  arrayMin
};