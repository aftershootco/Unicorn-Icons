
import createASIcon from '../createASIcon';

/**
 * @component @name ArrowUp
 * @description ASI component, renders SVG Element with children.
 * @param {Object} props - any valid SVG attribute
 * @param {Object} props - objectivy SVG children array - use sringify from svgson
 * @returns {JSX.Element} JSX Element
 */
const ArrowUp = createASIcon('ArrowUp', {
  "xmlns": "http://www.w3.org/2000/svg",
  "width": "18",
  "height": "11",
  "fill": "none",
  "viewBox": "0 0 18 11"
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
        "d": "M1.059 9.53 9 1.587l7.941 7.941"
      },
      "children": []
    }
  ]
} );

export default ArrowUp;
