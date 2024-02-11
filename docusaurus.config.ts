import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
	title: 'Syntax Reference',
	tagline: 'A syntax reference guide for multiple programming languages and others',
	favicon: 'img/logo.png',

	url: 'https://syntaxreference.dev/',

	baseUrl: '/',
	organizationName: 'SyntaxReference',
	projectName: 'SyntaxReference.dev',

	onBrokenLinks: 'throw',
	onBrokenAnchors: 'throw',
	onBrokenMarkdownLinks: 'throw',

	i18n: {
		defaultLocale: 'en-US',
		locales: ['en-US'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					routeBasePath: '/', // Removes '/doc/' from url
					editUrl: 'https://github.com/SyntaxReference/SyntaxReference.dev/tree/main',
				},
				blog: false,
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: 'img/SocialCard.png',
		colorMode: {
			defaultMode: 'dark',
			disableSwitch: false,
			respectPrefersColorScheme: true,
		},
		navbar: {
			title: 'Syntax Reference',
			logo: {
				alt: 'Syntax Reference Logo',
				src: 'img/logo.png',
			},
			items: [
				{
					href: '/',
					position: 'left',
					label: 'Home',
				},
				{
					type: 'docSidebar',
					sidebarId: 'programmingLanguagesSidebar',
					position: 'left',
					label: 'Programming Languages',
				},
				{
					href: 'https://github.com/SyntaxReference/SyntaxReference.dev',
					label: 'Contribute on GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [],
			copyright: `Copyright © ${new Date().getFullYear()} Syntax Reference. Built with Docusaurus.`,
		},
		prism: {
			additionalLanguages: ['c', 'cpp', 'csharp', 'java', 'rust', 'go', 'javascript', 'typescript', 'python'],
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,

	plugins: [require.resolve('docusaurus-lunr-search')],
};

export default config;
