'use strict'
;(self.webpackChunk_aftershootco_unicorn_icons_beta = self.webpackChunk_aftershootco_unicorn_icons_beta || []).push([
	[9491],
	{
		'./src/stories/CardBgIcon.stories.tsx': (g, r, e) => {
			e.r(r),
				e.d(r, {
					Default: () => l,
					Large: () => i,
					Red: () => s,
					__namedExportsOrder: () => u,
					default: () => a,
					inActive: () => d,
					yellowBg: () => c,
				})
			var o = e('./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js'),
				t = e('./src/icons/index.ts'),
				n = {
					component: t.CardBgIcon,
					title: 'culling/CardBgIcon',
					decorators: [
						function (_) {
							return o.createElement('div', { style: { margin: '1rem' } }, o.createElement(_, null))
						},
					],
				}
			const a = n
			var l = {},
				s = { args: { color: 'red' } },
				c = { args: { color: 'black', bgColor: 'yellow' } },
				d = { args: { inActive: !0 } },
				i = { args: { size: 30 } }
			const u = ['Default', 'Red', 'yellowBg', 'inActive', 'Large']
		},
	},
])
