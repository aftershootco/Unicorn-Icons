/* eslint-disable import/no-extraneous-dependencies */

export default ({ componentName, originalAttributes, svgChildren }) => {
	return `
import createASIcon from '../createASIcon';
import React from 'react';

const ${componentName} = createASIcon('${componentName}', ${JSON.stringify(originalAttributes, null, 2)}, ${svgChildren} );

export default ${componentName};
`
}
