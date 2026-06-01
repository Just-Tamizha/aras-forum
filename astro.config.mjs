// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
let site = 'http://localhost:3000'; let base = '/';
const deployTarget = (process.env.DEPLOY_TARGET || '').trim().toLowerCase();
if (deployTarget == "github") {
	site = 'https://Just-Tamizha.github.io';
	base = '/aras-forum/';
}
else if (deployTarget == "production") {
	site = 'https://aras.pingtamizha.com';
	base = '/';
}

// https://astro.build/config
export default defineConfig({
	site, base,
	integrations: [
		starlight({
			title: 'Aras Forum',
			favicon: '/favicon.svg',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Just-Tamizha/aras-forum' }],
			sidebar: [
				{
					label: 'Get Started',
					slug: 'get-started',
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'@fontsource/poppins/400.css',
				'./src/styles/custom.css',
			],
		}),
	],
	// Port Configuration for the development server. Default is 4321
	server: { port: 3000 },
});
