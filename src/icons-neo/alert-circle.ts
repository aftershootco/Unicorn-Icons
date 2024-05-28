
import createASIcon from '../createASIcon';

/**
 * @component @name AlertCircle
 * @description ASI component, renders SVG Element with children.
 * @param {Object} props - any valid SVG attribute
 * @param {Object} props - objectivy SVG children array - use sringify from svgson
 * @returns {JSX.Element} JSX Element
 */
const AlertCircle = createASIcon('AlertCircle', {
  "xmlns": "http://www.w3.org/2000/svg",
  "width": "21",
  "height": "20",
  "fill": "red",
  "viewBox": "0 0 21 20"
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
        "clip-path": "url(#a)"
      },
      "children": [
        {
          "name": "path",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "d": "M10.5 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"
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
            "d": "M10.5 6.667V10"
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
            "d": "M10.5 13.333h.008"
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
                "width": "20",
                "height": "20",
                "fill": "#fff",
                "transform": "translate(.5)"
              },
              "children": []
            }
          ]
        }
      ]
    }
  ]
} );

export default AlertCircle;
