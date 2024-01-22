import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
	programmingLanguagesSidebar: [
		'programming-languages/comments/README',
		'programming-languages/modules-package-headers/README',
		'programming-languages/main/README',
		'programming-languages/basic-types/README',
		'programming-languages/null/README',
		{
			type: 'doc',
			label: 'Digit Separator',
			id: 'programming-languages/digit-separator/README'
		},
		{
			type: 'doc',
			label: 'Type Inference',
			id: 'programming-languages/type-inference/README'
		},
		'programming-languages/type-aliases/README',
		'programming-languages/type-conversion/README',
		'programming-languages/string/README',
		'programming-languages/enum/README',
		'programming-languages/struct/README',
		'programming-languages/pointer-reference/README',
		{
			type: 'category',
			label: 'Control Flow',
			items: [
				'programming-languages/control-flow/conditional/README',
				'programming-languages/control-flow/loop/README',
			]
		},
		{
			type: 'category',
			label: 'Operators',
			items: [
				'programming-languages/operators/basic-operators/README',
				'programming-languages/operators/math-operators/README',
				'programming-languages/operators/operators-overloading/README',
			]
		},
		{
			type: 'doc',
			label: 'Collections & Containers',
			id: 'programming-languages/collections/README'
		},
		'programming-languages/functions-methods/README',
		'programming-languages/generic-functions/README',
		'programming-languages/lambda-functions/README',
		'programming-languages/static/README',
		'programming-languages/exceptions/README',
		'programming-languages/file/README',
		{
			type: 'category',
			label: 'Class',
			items: [
				'programming-languages/class/basic-template/README',
				'programming-languages/class/abstract-class/README',
				'programming-languages/class/interface/README',
				'programming-languages/class/generic-class/README',
				'programming-languages/class/namespaces/README',
				'programming-languages/class/constructors-destructors/README',
			]
		},
		'programming-languages/attributes-annotations-decorators/README',
	],
};

export default sidebars;
