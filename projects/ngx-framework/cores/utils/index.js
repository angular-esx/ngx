export var ngxUtils = {
  newGUID,
  toHyphenCase,
  isString,
  isObject,
  isArray,
  isFunction,
  isNull,
  isEmpty
};

function isString(target) {
  return target && typeof (target) === 'string';
}
function isObject(target) {
  return target && typeof (target) === 'object';
}
function isArray(target) {
  return target && Object.prototype.toString.call(target) === '[object Array]';
}
function isFunction(target) {
  return target && typeof (target) === 'function';
}
function isNull (target) {
  return target === undefined || target === null; 
}
function isEmpty (target) {
  return isNull(target) || target === '';
}

function newGUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
    var _random = Math.random() * 16 | 0;
    return (char === 'x' ? _random : (_random & 0x3 | 0x8)).toString(16);
  });
}

function toHyphenCase(target) {
  return target
  .replace(/([A-Z])/g, function (x, y) { return '-' + y; })
  .replace(/^-/, '')
  .toLowerCase();
}