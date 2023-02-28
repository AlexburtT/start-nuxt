// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		rootId: '__start',
		rootTag: 'body',
		head: {
			htmlAttrs: {
				lang: "ru"
			},
			title: "Start-Nuxt",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					name: "description",
					content: "Start progect on the Nuxt 3",
				},
				{ name: "color-scheme", content: "light dark" },
			],
		},
		// pageTransition: {
		// 	name: "page",
		// 	mode: "out-in",
		// },
		// layoutTransition: {
		// 	name: "layout",
		// 	mode: "out-in",
		// },
	},
	css: ['~/assets/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
