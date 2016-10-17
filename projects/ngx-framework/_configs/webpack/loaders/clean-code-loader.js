module.exports = function (content) {
  this.cacheable && this.cacheable();

  return `module.exports = ${JSON.stringify(content.replace(/(?:\r\n|\r|\n)/g, '').replace(/  +/g, ' '))};`;
};