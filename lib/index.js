/**
 * Expose values
 */

module.exports = values['default'] = values

/**
 * Return an array of the values in `obj`, maintaining the same order as
 * Object.keys.
 *
 * @param  {Object} obj
 * @return {Array} The array of values
 */

function values (obj) {
  var arr = []
  var keys = Object.keys(obj)
  for (var i = 0; i < keys.length; i++) {
    arr.push(obj[keys[i]])
  }
  return arr
}
