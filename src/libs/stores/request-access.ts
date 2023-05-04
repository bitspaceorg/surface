import { writable } from "svelte/store";

export const requestAccess = writable<{message: string, requestId: string, show: boolean}>({message: "", requestId: "" , show: false});
