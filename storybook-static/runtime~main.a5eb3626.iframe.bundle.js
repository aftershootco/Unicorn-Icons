;(() => {
	'use strict'
	var g = {},
		p = {}
	function e(s) {
		var c = p[s]
		if (c !== void 0) return c.exports
		var o = (p[s] = { exports: {} })
		return g[s](o, o.exports, e), o.exports
	}
	;(e.m = g),
		(e.amdO = {}),
		(() => {
			var s = []
			e.O = (c, o, i, n) => {
				if (o) {
					n = n || 0
					for (var t = s.length; t > 0 && s[t - 1][2] > n; t--) s[t] = s[t - 1]
					s[t] = [o, i, n]
					return
				}
				for (var r = 1 / 0, t = 0; t < s.length; t++) {
					for (var [o, i, n] = s[t], l = !0, a = 0; a < o.length; a++)
						(n & !1 || r >= n) && Object.keys(e.O).every((u) => e.O[u](o[a])) ? o.splice(a--, 1) : ((l = !1), n < r && (r = n))
					if (l) {
						s.splice(t--, 1)
						var d = i()
						d !== void 0 && (c = d)
					}
				}
				return c
			}
		})(),
		(e.d = (s, c) => {
			for (var o in c) e.o(c, o) && !e.o(s, o) && Object.defineProperty(s, o, { enumerable: !0, get: c[o] })
		}),
		(e.f = {}),
		(e.e = (s) => Promise.all(Object.keys(e.f).reduce((c, o) => (e.f[o](s, c), c), []))),
		(e.u = (s) =>
			'' +
			({
				3: 'stories-MaximizeIcon-stories',
				47: 'stories-CrownIcon-stories',
				55: 'stories-ShowDuplicateIcon-stories',
				78: 'stories-GridTwoLitIcon-stories',
				148: 'stories-FolderFillIcon-stories',
				181: 'stories-EditProgressIcon-stories',
				216: 'stories-HomeIcon-stories',
				232: 'stories-FaceHappyIcon-stories',
				465: 'stories-PersonIcon-stories',
				477: 'stories-LightroomClassicIcon-stories',
				511: 'stories-FailFillIcon-stories',
				514: 'stories-CollectionsIcon-stories',
				524: 'stories-TwitterBgIcon-stories',
				1020: 'stories-SprayCanIcon-stories',
				1034: 'stories-AtomBgIcon-stories',
				1131: 'stories-ImageBorderCircleIcon-stories',
				1135: 'stories-WifiCrossedIcon-stories',
				1181: 'stories-CartIcon-stories',
				1238: 'stories-ExpandIcon-stories',
				1246: 'stories-CheckFillIcon-stories',
				1273: 'stories-FlagFillIcon-stories',
				1436: 'stories-ExportIcon-stories',
				1445: 'stories-ArrowLeftIcon-stories',
				1530: 'stories-MoodIcon-stories',
				1617: 'stories-MinimizeIcon-stories',
				1652: 'stories-CheckIcon-stories',
				1682: 'stories-FilterCircleIcon-stories',
				1760: 'stories-GridBgIcon-stories',
				1775: 'stories-ZoomIcon-stories',
				1789: 'stories-ThumbDownBgIcon-stories',
				1827: 'stories-FileSearchIcon-stories',
				1856: 'stories-ChevronDownIcon-stories',
				1868: 'stories-FlagOutlineCrossedIcon-stories',
				1949: 'stories-ExportBgIcon-stories',
				1982: 'stories-EyeIcon-stories',
				2025: 'stories-ProcessIcon-stories',
				2037: 'stories-InfoCircleIcon-stories',
				2045: 'stories-CheckCircleBgIcon-stories',
				2113: 'stories-ReloadWarningIcon-stories',
				2127: 'stories-RecullIcon-stories',
				2147: 'stories-ColorPaletteIcon-stories',
				2171: 'stories-MoveBgIcon-stories',
				2189: 'stories-SortOptionNumIcon-stories',
				2214: 'stories-KeyIcon-stories',
				2246: 'stories-ChevronLeftIcon-stories',
				2273: 'stories-FacebookPeopleIcon-stories',
				2284: 'stories-ClockIcon-stories',
				2320: 'stories-GroupingLessIcon-stories',
				2338: 'stories-InfoBgIcon-stories',
				2424: 'stories-FacebookOutlineIcon-stories',
				2458: 'stories-PlayCircleIcon-stories',
				2463: 'stories-RightSignIcon-stories',
				2487: 'stories-SortCircleIcon-stories',
				2511: 'stories-AftershootLogoWhite-stories',
				2551: 'stories-ImageCrossedIcon-stories',
				2563: 'stories-RotateIcon-stories',
				2640: 'stories-AlertHexagonBgIcon-stories',
				2649: 'stories-DiamondIcon-stories',
				2696: 'stories-ThumbUpBgIcon-stories',
				2704: 'stories-FolderOutlineBgIcon-stories',
				2770: 'stories-UploadIcon-stories',
				2800: 'stories-MouseLeftClickCircleIcon-stories',
				2897: 'stories-ExitAppBgIcon-stories',
				2898: 'stories-CreateProfileIcon-stories',
				3106: 'stories-ThunderBgIcon-stories',
				3161: 'stories-FacebookBgIcon-stories',
				3205: 'stories-GridDotsIcon-stories',
				3215: 'stories-SortIcon-stories',
				3229: 'stories-CouponIcon-stories',
				3262: 'stories-LockIcon-stories',
				3321: 'stories-DotsVerticalIcon-stories',
				3331: 'stories-OpenlinkIcon-stories',
				3362: 'stories-ZoomCircleIcon-stories',
				3470: 'stories-DecrementIcon-stories',
				3474: 'stories-PowerMidIcon-stories',
				3499: 'stories-PipeIcon-stories',
				3688: 'stories-CelebrateIcon-stories',
				3765: 'stories-FilterIcon-stories',
				3832: 'stories-MouseRightClick-stories',
				3946: 'stories-StarCrossedIcon-stories',
				3954: 'stories-GridThreeLitIcon-stories',
				3974: 'stories-ConfettiRightIcon-stories',
				4202: 'stories-MenuIcon-stories',
				4209: 'stories-ConfettiLeftIcon-stories',
				4240: 'stories-LightroomIcon-stories',
				4280: 'stories-CloseIcon-stories',
				4302: 'stories-CullFromComputerBgIcon-stories',
				4357: 'stories-Stack2Icon-stories',
				4473: 'stories-AlertTriangleBgIcon-stories',
				4526: 'stories-EditIcon-stories',
				4628: 'stories-SparkleIcon-stories',
				4733: 'stories-ChevronRightIcon-stories',
				4749: 'stories-ListSelectedIcon-stories',
				4837: 'stories-SortDuplicatesIcon-stories',
				4951: 'stories-AlertTriangleIcon-stories',
				5119: 'stories-ArrowUpIcon-stories',
				5248: 'stories-StarIcon-stories',
				5446: 'stories-CheckBoxIcon-stories',
				5448: 'stories-DragCaptureOneIcon-stories',
				5460: 'stories-CurveArrowIcon-stories',
				5515: 'stories-UploadIconIcon-stories',
				5529: 'stories-PlusBgIcon-stories',
				5581: 'stories-AlertCircleIcon-stories',
				5694: 'stories-ArrowRightcon-stories',
				5699: 'stories-TwitterOutlineIcon-stories',
				5719: 'stories-ContactSupportIcon-stories',
				5729: 'stories-SprayCircleIcon-stories',
				5780: 'stories-SprayBgIcon-stories',
				5789: 'stories-LoaderIcon-stories',
				5806: 'stories-SortDuplicateCircleIcon-stories',
				5808: 'stories-QuestionMarkIcon-stories',
				5963: 'stories-CheckBoxPartialIcon-stories',
				6024: 'stories-LinkIcon-stories',
				6029: 'stories-CheckBoxEmptyIcon-stories',
				6057: 'stories-NoneSelectedIcon-stories',
				6086: 'stories-FailFillBgIcon-stories',
				6122: 'stories-FacebookIcon-stories',
				6157: 'stories-CrownBgIcon-stories',
				6197: 'stories-ScissorsIcon-stories',
				6268: 'stories-CheckCircleIcon-stories',
				6279: 'stories-TwitterIcon-stories',
				6334: 'stories-ConfettiIcon-stories',
				6410: 'stories-AppleIcon-stories',
				6453: 'stories-MoneyBagIcon-stories',
				6465: 'stories-KeyIconIcon-stories',
				6515: 'stories-ReverticonIcon-stories',
				6598: 'stories-AlertFillTriangleIcon-stories',
				6803: 'stories-AftershootEditIcon-stories',
				6836: 'stories-DuplicateFillIcon-stories',
				6901: 'stories-DescAlphaIcon-stories',
				6908: 'stories-ArrowDownIcon-stories',
				6936: 'stories-EditAlbumNameIcon-stories',
				6973: 'stories-AlertHexagonIcon-stories',
				7063: 'stories-EditPhotoIcon-stories',
				7108: 'stories-ListNotSelectedIcon-stories',
				7122: 'stories-LoopIcon-stories',
				7137: 'stories-ImageCrossedBgIcon-stories',
				7220: 'stories-FlagOutlineIcon-stories',
				7261: 'stories-ViewAllIcon-stories',
				7344: 'stories-WifiCrossedBgIcon-stories',
				7461: 'stories-MouseLeftClick-stories',
				7548: 'stories-AdjustmentIcon-stories',
				7582: 'stories-FiveStarBgIcon-stories',
				7633: 'stories-UploadFolderIcon-stories',
				7640: 'stories-PowerLowIcon-stories',
				7710: 'stories-DragLrcIcon-stories',
				7747: 'stories-CrossIcon-stories',
				7813: 'stories-GroupingMoreIcon-stories',
				7853: 'stories-CircleFillIcon-stories',
				7940: 'stories-CopyIcon-stories',
				7959: 'stories-CaptureOneIcon-stories',
				8123: 'stories-NotAllowIcon-stories',
				8187: 'stories-DeleteIcon-stories',
				8253: 'stories-AfterShootLogoIcon-stories',
				8318: 'stories-BorderColorIcon-stories',
				8416: 'stories-InstagramIcon-stories',
				8432: 'stories-RefreshIcon-stories',
				8504: 'stories-ArrowFillIcon-stories',
				8508: 'stories-LoupeIcon-stories',
				8645: 'stories-EyeCheckedIcon-stories',
				8695: 'stories-QuestionMarkCircleIcon-stories',
				8744: 'stories-ImageBorderIcon-stories',
				8746: 'stories-NoDuplicateIcon-stories',
				8752: 'stories-DragLrIcon-stories',
				8798: 'stories-GoogleColorIcon-stories',
				8939: 'stories-FaceSadIcon-stories',
				8946: 'stories-SelectedCircleBgIcon-stories',
				8992: 'stories-CloseCircleIcon-stories',
				8997: 'stories-SearchIcon-stories',
				9048: 'stories-ComputerEditIcon-stories',
				9113: 'stories-AddFolderIcon-stories',
				9169: 'stories-ChevronUpIcon-stories',
				9183: 'stories-PlayBgIcon-stories',
				9216: 'stories-StackIcon-stories',
				9249: 'stories-CircleIcon-stories',
				9285: 'stories-StorageCrossedIcon-stories',
				9404: 'stories-DeleteWhiteIcon-stories',
				9491: 'stories-CullFromCardBgIcon-stories',
				9509: 'stories-UploadBgIcon-stories',
				9514: 'stories-SuccessIcon-stories',
				9608: 'stories-NoneIconIcon-stories',
				9629: 'stories-EditsLogoTextIcon-stories',
				9704: 'stories-PowerHighIcon-stories',
				9724: 'stories-AlertFill-stories',
				9770: 'stories-DuplicateIcon-stories',
				9773: 'stories-ShareIcon-stories',
				9826: 'stories-FolderCrossedIcon-stories',
				9905: 'stories-EyeCrossedIcon-stories',
				9906: 'stories-GlobalIcon-stories',
			}[s] || s) +
			'.' +
			{
				3: '15802ed0',
				47: '3cadb346',
				55: '1f85f020',
				78: '15e243ba',
				148: '5866552a',
				181: '4ebb1085',
				216: 'cf673eb1',
				232: '60276084',
				465: '13957382',
				477: '63ae56fd',
				511: '288c3286',
				514: '0a5578d7',
				524: 'f71b2faa',
				1020: 'ccab826d',
				1034: '023a848f',
				1131: '608b4162',
				1135: '09a39272',
				1181: '34c50159',
				1238: 'ff48e97c',
				1246: '9a0bebf7',
				1273: 'bcdcb3d1',
				1436: 'bb64d76b',
				1445: 'f4dd8af4',
				1530: '315bef50',
				1617: '01c1e2cc',
				1652: '89723fb7',
				1682: 'a6bf6446',
				1760: '161c9e28',
				1775: 'af6828c8',
				1789: '1489d099',
				1827: 'a500ef9f',
				1856: '3c0145fa',
				1868: 'dfdcec8a',
				1949: '928ff1fc',
				1982: 'cae8702f',
				2025: 'f0d13460',
				2037: 'a8e6d530',
				2045: '38d4b0ee',
				2113: '2a0c932e',
				2127: '55774676',
				2147: 'bf26685c',
				2171: 'c7400d61',
				2189: '22e5e9ed',
				2214: 'a8b03bf9',
				2246: '34f3501c',
				2273: 'e6754509',
				2284: 'c804d763',
				2320: '5eae2835',
				2338: '8fd6ce17',
				2424: 'e8f3d98a',
				2458: 'e0821155',
				2463: 'a5888fae',
				2487: '1600ab2a',
				2511: 'a01a663c',
				2551: 'aca9359b',
				2563: '65aaaebb',
				2640: '1f808ca5',
				2649: '24e20ee2',
				2696: 'c8b4f11b',
				2704: '69a43aec',
				2770: 'af96037e',
				2800: 'b1ac3f47',
				2897: '87657711',
				2898: '6fca2b42',
				3106: '9720c5dc',
				3161: '5dc0ef2c',
				3205: '4565ff17',
				3215: '181c08c4',
				3229: '4ab34606',
				3262: 'a56d5c72',
				3321: '74962349',
				3331: '9d23418c',
				3362: '598adf97',
				3470: 'e40f7737',
				3474: 'b3ef62e4',
				3499: '38aaef1b',
				3688: 'c27efe1d',
				3765: '2a0a0e1a',
				3832: '3e7959b3',
				3946: '1a37211a',
				3954: '023fda3e',
				3974: '1a3de26a',
				4202: '727051f8',
				4209: '09414aeb',
				4240: 'c47728c1',
				4280: 'a4be2a9b',
				4302: '9623cdc1',
				4357: 'c7662ea1',
				4473: 'a2fc797d',
				4526: '076045dd',
				4628: '67f5772c',
				4733: '6e357a60',
				4749: '2f19dee5',
				4837: 'a32082e3',
				4951: '44568eb8',
				5119: '7315a3d2',
				5248: '117b7715',
				5446: '9af8b33f',
				5448: 'e70946f3',
				5460: 'e9a2bfba',
				5515: '6e0363b7',
				5529: 'b81de2ab',
				5581: '84380672',
				5694: '9af49606',
				5699: 'c40451cc',
				5719: 'c0896c52',
				5729: 'cd1aec02',
				5780: '15156fc5',
				5789: 'afca29ee',
				5806: '42fbd8a3',
				5808: '2fe9f654',
				5963: '725add99',
				6024: '33c05612',
				6029: 'abd83c50',
				6057: '12df0b5d',
				6086: '7a124771',
				6122: 'be29cecb',
				6157: '8d90b88b',
				6197: '7d7e369b',
				6268: 'e07e3b7c',
				6279: 'd0104349',
				6334: '76d5e921',
				6410: 'a14774cd',
				6453: 'e1da6832',
				6465: '2588549b',
				6515: '8ffd5ee0',
				6598: '53f0269f',
				6803: 'a9868e9c',
				6836: 'c71835f0',
				6901: '5f291009',
				6908: '8d5cc659',
				6936: '73adb6a9',
				6973: 'f830671d',
				7063: '02ff3974',
				7108: '69cb2a51',
				7122: '5b435557',
				7137: 'b1913f18',
				7220: 'f4c4e48d',
				7261: '0b68db7b',
				7344: 'a2f84d59',
				7461: 'c644db0a',
				7548: 'e6280457',
				7582: '2c766857',
				7633: '765a0b4f',
				7640: '05e90596',
				7710: 'f61a8887',
				7747: 'c7d3c8e9',
				7813: '13c593fc',
				7853: '7febf249',
				7940: 'f0ce5f13',
				7959: '703e3f3d',
				8123: 'da96bb9f',
				8187: '0e70467a',
				8253: '47a23bad',
				8318: '13371106',
				8416: 'd25862da',
				8432: '8a93c2ac',
				8504: '2bc825af',
				8508: '18d0a3d9',
				8645: 'a7fc52ec',
				8695: '142d6938',
				8744: 'a7791322',
				8746: '9d2e1ce3',
				8752: '276aa71f',
				8798: 'a5a2576a',
				8939: 'a5cb07c2',
				8946: '54f80937',
				8992: '8fd3e5cf',
				8997: 'a571afee',
				9048: '25fb878a',
				9105: '9126715b',
				9113: 'b2933add',
				9169: '3c363f59',
				9183: '49c9617f',
				9216: '40c7e670',
				9249: '2a7435c4',
				9285: 'f1a43e4f',
				9404: 'aa88dfc3',
				9491: 'a4a38acf',
				9509: '7e748a7e',
				9514: 'aa22a3d7',
				9608: '6aba3e15',
				9629: '077e9051',
				9704: 'db8700e2',
				9724: 'b8038a8f',
				9770: '7724f7a6',
				9773: '89a1662e',
				9826: '1ecb4d4b',
				9905: 'd2117d1f',
				9906: '52df1925',
			}[s] +
			'.iframe.bundle.js'),
		(e.g = (function () {
			if (typeof globalThis == 'object') return globalThis
			try {
				return this || new Function('return this')()
			} catch {
				if (typeof window == 'object') return window
			}
		})()),
		(e.o = (s, c) => Object.prototype.hasOwnProperty.call(s, c)),
		(() => {
			var s = {},
				c = '@aftershootco/unicorn-icons-beta:'
			e.l = (o, i, n, t) => {
				if (s[o]) {
					s[o].push(i)
					return
				}
				var r, l
				if (n !== void 0)
					for (var a = document.getElementsByTagName('script'), d = 0; d < a.length; d++) {
						var I = a[d]
						if (I.getAttribute('src') == o || I.getAttribute('data-webpack') == c + n) {
							r = I
							break
						}
					}
				r ||
					((l = !0),
					(r = document.createElement('script')),
					(r.charset = 'utf-8'),
					(r.timeout = 120),
					e.nc && r.setAttribute('nonce', e.nc),
					r.setAttribute('data-webpack', c + n),
					(r.src = o)),
					(s[o] = [i])
				var f = (C, u) => {
						;(r.onerror = r.onload = null), clearTimeout(b)
						var h = s[o]
						if ((delete s[o], r.parentNode && r.parentNode.removeChild(r), h && h.forEach((m) => m(u)), C)) return C(u)
					},
					b = setTimeout(f.bind(null, void 0, { type: 'timeout', target: r }), 12e4)
				;(r.onerror = f.bind(null, r.onerror)), (r.onload = f.bind(null, r.onload)), l && document.head.appendChild(r)
			}
		})(),
		(e.r = (s) => {
			typeof Symbol < 'u' && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(s, '__esModule', { value: !0 })
		}),
		(e.p = ''),
		(() => {
			var s = { 1303: 0 }
			;(e.f.j = (i, n) => {
				var t = e.o(s, i) ? s[i] : void 0
				if (t !== 0)
					if (t) n.push(t[2])
					else if (i != 1303) {
						var r = new Promise((I, f) => (t = s[i] = [I, f]))
						n.push((t[2] = r))
						var l = e.p + e.u(i),
							a = new Error(),
							d = (I) => {
								if (e.o(s, i) && ((t = s[i]), t !== 0 && (s[i] = void 0), t)) {
									var f = I && (I.type === 'load' ? 'missing' : I.type),
										b = I && I.target && I.target.src
									;(a.message =
										'Loading chunk ' +
										i +
										` failed.
(` +
										f +
										': ' +
										b +
										')'),
										(a.name = 'ChunkLoadError'),
										(a.type = f),
										(a.request = b),
										t[1](a)
								}
							}
						e.l(l, d, 'chunk-' + i, i)
					} else s[i] = 0
			}),
				(e.O.j = (i) => s[i] === 0)
			var c = (i, n) => {
					var [t, r, l] = n,
						a,
						d,
						I = 0
					if (t.some((b) => s[b] !== 0)) {
						for (a in r) e.o(r, a) && (e.m[a] = r[a])
						if (l) var f = l(e)
					}
					for (i && i(n); I < t.length; I++) (d = t[I]), e.o(s, d) && s[d] && s[d][0](), (s[d] = 0)
					return e.O(f)
				},
				o = (self.webpackChunk_aftershootco_unicorn_icons_beta = self.webpackChunk_aftershootco_unicorn_icons_beta || [])
			o.forEach(c.bind(null, 0)), (o.push = c.bind(null, o.push.bind(o)))
		})()
})()
