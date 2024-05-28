
import createASIcon from '../createASIcon';

/**
 * @component @name ArrowLeft
 * @description ASI component, renders SVG Element with children.
 * @param {Object} props - any valid SVG attribute
 * @param {Object} props - objectivy SVG children array - use sringify from svgson
 * @returns {JSX.Element} JSX Element
 */
const ArrowLeft = createASIcon('ArrowLeft', {
  "xmlns": "http://www.w3.org/2000/svg",
  "width": "10",
  "height": "18",
  "fill": "none",
  "viewBox": "0 0 10 18"
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
        "d": "M8.706 16.94.765 9l7.94-7.941"
      },
      "children": []
    }
  ]
} );

export default ArrowLeft;
