// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { starlightBasePath } from "starlight-base-path";
import starlightLinksValidator from 'starlight-links-validator'
let site = 'http://localhost:3000'; let base = '/';
const args = process.argv.slice(2);
const targetArg = args.find(arg => arg.startsWith('--target='));
const deployTarget = targetArg ? targetArg.split('=')[1] : ''; 
if (deployTarget == "github") {
	site = 'https://Just-Tamizha.github.io';
	base = '/aras-forum/';
}
else if (deployTarget == "production") {
	site = 'https://aras.pingtamizha.com';
	base = '/';
}
console.log(`Deploy Target: ${deployTarget}, Site: ${site}, Base: ${base}`);
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
					label: 'Introduction',
					items: [{ autogenerate: { directory: 'introduction' } }],
				},
				{
					label: 'Guides',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
				{
					label: 'Development',
					items: [{ autogenerate: { directory: 'development' } }],
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'@fontsource/poppins/400.css',
				'./src/styles/custom.css',
			],
			plugins: [starlightBasePath(), starlightLinksValidator()],
		}),
	],
	// Port Configuration for the development server. Default is 4321
	server: { port: 4000 },
});
