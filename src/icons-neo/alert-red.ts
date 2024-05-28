
import createASIcon from '../createASIcon';

/**
 * @component @name AlertRed
 * @description ASI component, renders SVG Element with children.
 * @param {Object} props - any valid SVG attribute
 * @param {Object} props - objectivy SVG children array - use sringify from svgson
 * @returns {JSX.Element} JSX Element
 */
const AlertRed = createASIcon('AlertRed', {
  "xmlns": "http://www.w3.org/2000/svg",
  "width": "64",
  "height": "64",
  "fill": "none",
  "viewBox": "0 0 64 64"
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
        "stroke-width": "3",
        "clip-path": "url(#a)"
      },
      "children": [
        {
          "name": "path",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "d": "M13.334 50.667h37.333a5.334 5.334 0 0 0 4.907-7.334L36.64 10.667a5.333 5.333 0 0 0-9.333 0L8.374 43.333a5.333 5.333 0 0 0 4.666 7.334"
          },
          "children": []
        },
        {
          "name": "path",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "d": "M32 40v.027M32 24v5.333z"
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
                "width": "64",
                "height": "64",
                "fill": "#fff",
                "rx": "32"
              },
              "children": []
            }
          ]
        }
      ]
    }
  ]
} );

export default AlertRed;
