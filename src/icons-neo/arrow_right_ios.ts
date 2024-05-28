
import createASIcon from '../createASIcon';

/**
 * @component @name ArrowRightIos
 * @description ASI component, renders SVG Element with children.
 * @param {Object} props - any valid SVG attribute
 * @param {Object} props - objectivy SVG children array - use sringify from svgson
 * @returns {JSX.Element} JSX Element
 */
const ArrowRightIos = createASIcon('ArrowRightIos', {
  "xmlns": "http://www.w3.org/2000/svg",
  "width": "11",
  "height": "18",
  "fill": "none",
  "viewBox": "0 0 11 18"
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
        "stroke": "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-opacity": ".8",
        "stroke-width": "1.5",
        "d": "M1.53 1.059 9.47 9l-7.94 7.941"
      },
      "children": []
    }
  ]
} );

export default ArrowRightIos;
