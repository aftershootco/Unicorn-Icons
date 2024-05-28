
import createASIcon from '../createASIcon';

/**
 * @component @name ArrowRight
 * @description ASI component, renders SVG Element with children.
 * @param {Object} props - any valid SVG attribute
 * @param {Object} props - objectivy SVG children array - use sringify from svgson
 * @returns {JSX.Element} JSX Element
 */
const ArrowRight = createASIcon('ArrowRight', {
  "xmlns": "http://www.w3.org/2000/svg",
  "width": "18",
  "height": "18",
  "fill": "none",
  "viewBox": "0 0 18 18"
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
          "name": "g",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "stroke": "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.25",
            "clip-path": "url(#b)"
          },
          "children": [
            {
              "name": "path",
              "type": "element",
              "value": "",
              "parent": null,
              "attributes": {
                "d": "M1.417 9h15.167"
              },
              "children": []
            },
            {
              "name": "path",
              "type": "element",
              "value": "",
              "parent": null,
              "attributes": {
                "d": "m10.083 15.5 6.5-6.5"
              },
              "children": []
            },
            {
              "name": "path",
              "type": "element",
              "value": "",
              "parent": null,
              "attributes": {
                "d": "m10.083 2.5 6.5 6.5"
              },
              "children": []
            }
          ]
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
                "width": "18",
                "height": "18",
                "fill": "#fff"
              },
              "children": []
            }
          ]
        },
        {
          "name": "clipPath",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "id": "b"
          },
          "children": [
            {
              "name": "rect",
              "type": "element",
              "value": "",
              "parent": null,
              "attributes": {
                "width": "26",
                "height": "26",
                "fill": "#fff",
                "transform": "translate(-4 -4)"
              },
              "children": []
            }
          ]
        }
      ]
    }
  ]
} );

export default ArrowRight;
