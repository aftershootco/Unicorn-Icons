
import createASIcon from '../createASIcon';

/**
 * @component @name AlertWhite
 * @description ASI component, renders SVG Element with children.
 * @param {Object} props - any valid SVG attribute
 * @param {Object} props - objectivy SVG children array - use sringify from svgson
 * @returns {JSX.Element} JSX Element
 */
const AlertWhite = createASIcon('AlertWhite', {
  "xmlns": "http://www.w3.org/2000/svg",
  "width": "12",
  "height": "12",
  "fill": "none",
  "viewBox": "0 0 12 12"
}, {
  "name": "g",
  "type": "element",
  "value": "",
  "parent": null,
  "children": [
    {
      "name": "g",
      "type": "element",
      "value": "",
      "parent": null,
      "attributes": {
        "stroke": "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "clip-path": "url(#a)"
      },
      "children": [
        {
          "name": "path",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "d": "M2.5 9.5h7a1 1 0 0 0 .92-1.375L6.87 2a1 1 0 0 0-1.75 0L1.57 8.125A1 1 0 0 0 2.445 9.5"
          },
          "children": []
        },
        {
          "name": "path",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "d": "M6 7.5v.005M6 4.5v1z"
          },
          "children": []
        }
      ]
    },
    {
      "name": "defs",
      "type": "element",
      "value": "",
      "parent": null,
      "attributes": {},
      "children": [
        {
          "name": "clipPath",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "id": "a"
          },
          "children": [
            {
              "name": "rect",
              "type": "element",
              "value": "",
              "parent": null,
              "attributes": {
                "width": "12",
                "height": "12",
                "fill": "#fff"
              },
              "children": []
            }
          ]
        }
      ]
    }
  ]
} );

export default AlertWhite;
