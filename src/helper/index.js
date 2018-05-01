const toString = Object.prototype.toString;

/**
 * 获取val的类型
 * @param val
 * @returns {string} 可能的值为Function, Object, Array, Number, String, RegExp, Null, Undefined, Boolean, Symbol, Date等
 */
const getType = val => Number.isNaN(val) ? 'NaN' : toString.call(val).replace(/.*\s(.*)]$/, '$1');

/**
 * 判断val是否为type类型的值
 * @param val
 * @param type 可能的值为Function, Object, Array, Number, String, RegExp, Null, Undefined, Boolean, Symbol, Date等
 * @param checkAll 是否检查全部（val为数组，检查val每一项是否都为type类型）
 * @returns {boolean}
 */
const isType = (val, type, checkAll) => {
  if (checkAll === true && getType(val) === 'Array') {
    return val.every(v => getType(v) === type);
  }
  return getType(val) === type;
};

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

/**
 * 返回数组最小值和最大值
 * @param arr
 * @returns {[*,*]}
 */
const arrayExtent = arr => {
  return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
};

const errLog = info => {
  console.error('[MathGeo]: ' + info);
};

export {
  isType,
  getType,
  arrayMax,
  arrayMin,
  arrayExtent,
  errLog
};