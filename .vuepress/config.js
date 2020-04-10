module.exports = {
	title: 'Programming Languages Syntax Reference',
	description: 'A syntax reference guide for multiple programming languages',
	themeConfig: {
		repo: 'https://github.com/LeonnardoVerol/Programming-Languages-Syntax-Reference',
		editLinks: true,
		editLinkText: 'Check Contributing and help us improve this page!',
		sidebar: [
			{
				title: 'Welcome',
				path: '/',
				collapsable: false,
				sidebarDepth: 1
			},
			{
				title: 'Contributing',
				path: '/CONTRIBUTING',
				collapsable: false,
				sidebarDepth: 1
			},
			{
				title: 'Topics',
				path: '/content/',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/content/comments/',
					'/content/modules-package-headers/',
					'/content/main/',
					{
						title: 'Types',
						path: '/content/types/',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'/content/types/integer/',
							'/content/types/float-double/',
							'/content/types/character/',
							'/content/types/string/',
							'/content/types/boolean/',
							['/content/types/collections/', 'Collections'],
							'/content/types/enum/',
							'/content/types/struct/',
						]
					},
					['/content/type-inference/', 'Type Inference'],
					'/content/type-aliases/',
					'/content/type-conversion/',
					'/content/string/',
					'/content/pointer-reference/',
					{
						title: 'Control Flow',
						path: '/content/control-flow/',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'/content/control-flow/conditional/',
							'/content/control-flow/loop/',
						]
					},
					'/content/arithmetic-operators/',
					['/content/collections/', 'Collections'],
					'/content/function/',
					'/content/exceptions/',
					'/content/file/',
					'/content/class/',
				]
			}
		]
	}
}
