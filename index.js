/**
 * ## .appname( str )
 *
 * Convert a npm package name into a safe-to-use variable name.
 *
 * @method appname
 * @param {String} The string to rename
 * @api public
 */

const appname = require('app-name');


module.exports = function () {
  exports.appname = function(str) {
    return appname(str);
  };
  return exports;
};

