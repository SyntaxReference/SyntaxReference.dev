module.exports = [
	{
		title: 'Programming Languages',
		path: '/programming-languages/',
		collapsable: false,
		sidebarDepth: 2,
		children: [
			'/programming-languages/comments/',
			'/programming-languages/modules-package-headers/',
			'/programming-languages/main/',
			'/programming-languages/basic-types/',
			'/programming-languages/null/',
			['/programming-languages/digit-separator/', 'Digit Separator'],
			['/programming-languages/type-inference/', 'Type Inference'],
			'/programming-languages/type-aliases/',
			'/programming-languages/type-conversion/',
			'/programming-languages/string/',
			'/programming-languages/enum/',
			'/programming-languages/struct/',
			'/programming-languages/pointer-reference/',
			{
				title: 'Control Flow',
				path: '/programming-languages/control-flow/',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/programming-languages/control-flow/conditional/',
					'/programming-languages/control-flow/loop/',
				]
			},
			{
				title: 'Operators',
				path: '/programming-languages/operators/',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/programming-languages/operators/basic-operators/',
					'/programming-languages/operators/math-operators/',
					'/programming-languages/operators/operators-overloading/',
				]
			},
			['/programming-languages/collections/', 'Collections & Containers'],
			'/programming-languages/functions-methods/',
			'/programming-languages/generic-functions/',
			'/programming-languages/lambda-functions/',
			'/programming-languages/static/',
			'/programming-languages/exceptions/',
			'/programming-languages/file/',
			{
				title: 'Class',
				path: '/programming-languages/class/',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/programming-languages/class/basic-template/',
					'/programming-languages/class/abstract-class/',
					'/programming-languages/class/interface/',
					'/programming-languages/class/generic-class/',
					'/programming-languages/class/namespaces/',
				]
			},
			'/programming-languages/attributes-annotations-decorators/',
		]
	},
]
