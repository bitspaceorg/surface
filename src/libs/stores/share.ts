import { writable } from "svelte/store";

export const share = writable<{message: string, share: string, show: boolean}>({message: "", share: "" , show: false});
