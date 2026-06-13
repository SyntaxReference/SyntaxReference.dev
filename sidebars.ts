import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
	programmingLanguagesSidebar: [
		'programming-languages/comments/index',
		'programming-languages/package-manager/index',
		'programming-languages/modules/index',
		'programming-languages/main/index',
		{
			type: 'category',
			label: 'Types',
			collapsed: false,
			collapsible: false,
			items: [
				'programming-languages/basic-types/index',
				'programming-languages/string/index',
				{
					type: 'doc',
					label: 'Null Type',
					id: 'programming-languages/null/index',
				},
				{
					type: 'doc',
					label: 'Type Inference',
					id: 'programming-languages/type-inference/index'
				},
				'programming-languages/type-aliases/index',
				'programming-languages/type-conversion/index',
			]
		},
		{
			type: 'category',
			label: 'Operators',
			collapsed: false,
			collapsible: false,
			items: [
				'programming-languages/operators/basic-operators/index',
				'programming-languages/operators/math-operators/index',
				'programming-languages/operators/operators-overloading/index',
			]
		},
		{
			type: 'doc',
			label: 'Digit Separator',
			id: 'programming-languages/digit-separator/index'
		},
		'programming-languages/enum/index',
		'programming-languages/struct/index',
		'programming-languages/pointer-reference/index',
		{
			type: 'category',
			label: 'Control Flow',
			collapsed: false,
			collapsible: false,
			items: [
				'programming-languages/control-flow/conditional/index',
				'programming-languages/control-flow/loop/index',
			]
		},
		{
			type: 'doc',
			label: 'Collections & Containers',
			id: 'programming-languages/collections/index'
		},
		'programming-languages/functions-methods/index',
		'programming-languages/generic-functions/index',
		'programming-languages/lambda-functions/index',
		'programming-languages/static/index',
		'programming-languages/exceptions/index',
		'programming-languages/file/index',
		{
			type: 'category',
			label: 'Class',
			collapsed: false,
			collapsible: false,
			items: [
				'programming-languages/class/basic-template/index',
				'programming-languages/class/abstract-class/index',
				'programming-languages/class/interface/index',
				'programming-languages/class/generic-class/index',
				'programming-languages/class/namespaces/index',
				'programming-languages/class/constructors-destructors/index',
			]
		},
		'programming-languages/attributes-annotations-decorators/index',
	],
};

export default sidebars;
