// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
let site='http://localhost:3000';let base='/';
const deployTarget = process.env.DEPLOY_TARGET;
if (deployTarget=="github") {
	site='https://Just-Tamizha.github.io';
	base='/aras-forum/';
}
else if (deployTarget=="production") {
	site='https://aras.pingtamizha.com';
	base='/';
}

// https://astro.build/config
export default defineConfig({
	site,base,
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
	// Port Configuration for the development server. Default is 4321
	server: { port: 3000 },
});
