import {redirect} from '@sveltejs/kit';

export const load = (() => {
	let ID: Array<string> = [];

	[...Array(3)].map(() => {
		ID = [...ID, (Math.random() + 1).toString(36).substring(4)];
	})
    throw redirect( 302, `concept/${ID.join('-')}`);
})
