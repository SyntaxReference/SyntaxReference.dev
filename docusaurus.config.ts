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
					editUrl: 'https://github.com/SyntaxReference/SyntaxReference.dev',
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
					type: 'docSidebar',
					sidebarId: 'programmingLanguagesSidebar',
					position: 'left',
					label: 'Programming Languages',
				},
				{
					href: 'https://github.com/SyntaxReference/SyntaxReference.dev',
					label: 'GitHub',
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
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
