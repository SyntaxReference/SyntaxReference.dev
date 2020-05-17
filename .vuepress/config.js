module.exports = {
	title: 'Programming Languages Syntax Reference',
	description: 'A syntax reference guide for multiple programming languages',
	themeConfig: {
		repo: 'https://github.com/LeonnardoVerol/Programming-Languages-Syntax-Reference',
		repoLabel: 'Help us improve this page! Contribute on Github',
		sidebar: [
			{
				title: 'Welcome',
				path: '/',
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
					'/content/types/',
					['/content/digit-separator/', 'Digit Separator'],
					['/content/type-inference/', 'Type Inference'],
					'/content/type-aliases/',
					'/content/type-conversion/',
					'/content/string/',
					'/content/enum/',
					'/content/struct/',
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
					'/content/operators/',
					['/content/collections/', 'Collections & Containers'],
					'/content/function/',
					'/content/exceptions/',
					'/content/file/',
					{
						title: 'Class',
						path: '/content/class/',
						collapsable: false,
						sidebarDepth: 2,
						children: [
							'/content/class/basic-template/',
							'/content/class/abstract-class/',
							'/content/class/interface/',
							'/content/class/namespaces/',
						]
					},
					'/content/attributes-annotations-decorators/',
				]
			},
			{
				title: 'Contributing',
				path: '/CONTRIBUTING',
				collapsable: false,
				sidebarDepth: 1
			},
		]
	}
}
