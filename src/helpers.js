exports.isLeftClick = function(event) {
  return event.button === 0;
};

exports.isModifiedEvent = function(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

exports.withoutProperties = function(object, properties) {
  var property, result;
  result = {};
  for (property in object) {
    if (object.hasOwnProperty(property) && properties.indexOf(property) == -1) {
      result[property] = object[property];
    }
  }
  return result;
};
