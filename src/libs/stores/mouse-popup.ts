import { writable } from "svelte/store";

export const mousePopup = writable<{message: string,show: boolean}>({message: "", show: true});
