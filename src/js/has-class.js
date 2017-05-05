// Check to See If element has Class Utility Function
export default function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1
}