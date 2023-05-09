import { writable } from "svelte/store";

export const share = writable<{show: boolean}>({show: false});
