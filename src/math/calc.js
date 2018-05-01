/**
 * 数学计算
 */

import {
  isType,
  arrayMax,
  errLog
} from '../helper';

/**
 * 数字(浮点数)相加
 * @param args
 * @returns {number}
 */
const add = (...args) => {
  if (!args.length) {
    errLog('add(sub) function need params.');
    return 0;
  }
  const r = new Array(args.length);
  for (let [key, value] of Object.entries(args)) {
    if (!isType(value, 'Number')) {
      errLog('params of add(sub) function should be number.');
      return 0;
    }
    try {
      r[key] = value.toString().split('.')[1].length;
    } catch (e) {
      r[key] = 0;
    }
  }
  const m = Math.pow(10, arrayMax(r));
  let t = 0;
  for (let arg of args) {
    t += arg * m;
  }
  return t / m;
};

/**
 * 数字(浮点数)相减
 * @param args
 * @returns {number}
 */
const sub = (...args) => {
  const n = args.map((v, i) => {
    return i ? (-v) : v;
  });
  return add(...n);
};

/**
 * 数字(浮点数)相乘
 * @param args
 * @returns {number}
 */
const multi = (...args) => {
  if (!args.length) {
    errLog('multi function need params.');
    return 0;
  }
  const r = new Array(args.length);
  let m = 0, t = 1;
  for (let [key, value] of Object.entries(args)) {
    if (!isType(value, 'Number')) {
      errLog('params of multi function should be number.');
      return 0;
    }
    try {
      r[key] = value.toString().split('.')[1].length;
    } catch (e) {
      r[key] = 0;
    }
    m += r[key];
    t *= value * Math.pow(10, r[key]);
  }
  return t / Math.pow(10, m);
};

/**
 * 数字(浮点数)相除
 * @param args
 * @returns {number}
 */
const div = (...args) => {
  if (!args.length) {
    errLog('div function need params.');
    return 0;
  }
  let d = args[0];
  for (let i = 0; i < args.length - 1; i++) {
    if (!isType(args[i], 'Number') || !isType(args[i + 1], 'Number')) {
      errLog('params of div function should be number.');
      return 0;
    }
    let r1, r2;
    try {
      r1 = d.toString().split('.')[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = args[i + 1].toString().split('.')[1].length;
    } catch (e) {
      r2 = 0;
    }
    const r = Math.max(r1, r2);
    d = (d * Math.pow(10, r)) / (args[i + 1] * Math.pow(10, r));
  }
  return d;
};


export {
  add,
  sub,
  multi,
  div
};