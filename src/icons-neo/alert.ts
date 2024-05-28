
import createASIcon from '../createASIcon';

/**
 * @component @name Alert
 * @description ASI component, renders SVG Element with children.
 * @param {Object} props - any valid SVG attribute
 * @param {Object} props - objectivy SVG children array - use sringify from svgson
 * @returns {JSX.Element} JSX Element
 */
const Alert = createASIcon('Alert', {
  "xmlns": "http://www.w3.org/2000/svg",
  "width": "54",
  "height": "46",
  "fill": "red",
  "viewBox": "0 0 54 46"
}, {
  "name": "g",
  "type": "element",
  "value": "",
  "parent": null,
  "children": [
    {
      "name": "path",
      "type": "element",
      "value": "",
      "parent": null,
      "attributes": {
        "d": "M22.204 2.446.68 38.376A5.082 5.082 0 0 0 5.026 46h43.046a5.083 5.083 0 0 0 4.345-7.623L30.894 2.447a5.08 5.08 0 0 0-8.69 0Z"
      },
      "children": []
    },
    {
      "name": "path",
      "type": "element",
      "value": "",
      "parent": null,
      "attributes": {
        "stroke": "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "5",
        "d": "M26.552 15.507V25.67m0 10.165h.025"
      },
      "children": []
    }
  ]
} );

export default Alert;
