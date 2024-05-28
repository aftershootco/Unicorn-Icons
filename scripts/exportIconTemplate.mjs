/* eslint-disable import/no-extraneous-dependencies */

export default ({ componentName, originalAttributes, groupSvgChildrenObj }) => {
	return `
import createASIcon from '../createASIcon';

/**
 * @component @name ${componentName}
 * @description ASI component, renders SVG Element with children.
 * @param {Object} props - any valid SVG attribute
 * @param {Object} props - objectivy SVG children array - use sringify from svgson
 * @returns {JSX.Element} JSX Element
 */
const ${componentName} = createASIcon('${componentName}', ${JSON.stringify(originalAttributes, null, 2)}, ${JSON.stringify(
		groupSvgChildrenObj,
		null,
		2
	)} );

export default ${componentName};
`
}
