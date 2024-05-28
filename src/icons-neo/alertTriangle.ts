
import createASIcon from '../createASIcon';

/**
 * @component @name AlertTriangle
 * @description ASI component, renders SVG Element with children.
 * @param {Object} props - any valid SVG attribute
 * @param {Object} props - objectivy SVG children array - use sringify from svgson
 * @returns {JSX.Element} JSX Element
 */
const AlertTriangle = createASIcon('AlertTriangle', {
  "xmlns": "http://www.w3.org/2000/svg",
  "width": "19",
  "height": "18",
  "fill": "none",
  "viewBox": "0 0 19 18"
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
        "stroke-width": "1.3",
        "d": "M14.97 10.178h-.919l.46-.46zm0 0v.65h-.65zm3.38-1.182v-.003a.7.7 0 0 0-.036-.225.4.4 0 0 0-.1-.146l-.001-.001-7.82-7.82a.5.5 0 0 0-.376-.15.46.46 0 0 0-.365.15l-.01.01-.01.009a.46.46 0 0 0-.16.357.45.45 0 0 0 .149.362l.002.001 5.807 5.808 1.11 1.11H1.726a.5.5 0 0 0-.386.15c-.1.1-.15.213-.15.383v.002c0 .172.052.286.151.386.098.098.21.15.383.149H16.54l-1.11 1.11-5.807 5.807c-.09.089-.146.203-.152.39-.004.155.04.246.13.33l.022.019.02.021a.43.43 0 0 0 .35.145c.163 0 .284-.05.4-.165l7.821-7.822a.4.4 0 0 0 .1-.146.6.6 0 0 0 .036-.221ZM.54 8.993q0 .503.34.845.342.34.846.34z"
      },
      "children": []
    }
  ]
} );

export default AlertTriangle;
