import { setContext, getContext } from 'svelte';
import { writable } from 'svelte/store';

const key = {};

export const getAccordionContext = () => getContext(key);
export const createAccordionContext = (initial) => {
	const current = writable(initial);
	const context = { current };

	setContext(key, context);
	return context;
};
