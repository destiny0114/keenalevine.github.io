import { writable } from 'svelte/store';

export const AccordionStore = writable([
	{
		label: 'UX / Wireframing',
		description:
			'Here we map out the elements clearly, so you can see what elements will be built into the end-product, and have a better idea of the intended behavior end-users will have while using it.'
	},
	{
		label: 'Web Design',
		description:
			'Based on the previous step of building a prototype for your idea, I design the best solution you can have for your business’image.'
	},
	{
		label: 'Web Development',
		description: 'I build and test your new high-performance website, for every device.'
	},
	{
		label: 'Analytics Setup / Support',
		description:
			'Settuping deep analytics to provide insights and meaningful data that can be used for your marketing purposes, as well as top-notch and timely maintenance so that you can focus on building your business.'
	}
]);
