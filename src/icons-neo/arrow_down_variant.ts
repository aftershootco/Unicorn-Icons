
import createASIcon from '../createASIcon';

/**
 * @component @name ArrowDownVariant
 * @description ASI component, renders SVG Element with children.
 * @param {Object} props - any valid SVG attribute
 * @param {Object} props - objectivy SVG children array - use sringify from svgson
 * @returns {JSX.Element} JSX Element
 */
const ArrowDownVariant = createASIcon('ArrowDownVariant', {
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
        "d": "M16.94 1.412 9 9.354 1.059 1.412"
      },
      "children": []
    }
  ]
} );

export default ArrowDownVariant;
