import { writable } from "svelte/store";

export const notification = writable<{message: string, type: ("SUCCESS" | "ERROR" | "WARNING"), show: boolean}>({message: "", type: "SUCCESS", show: false});
export const requestIsLoading = writable<boolean>(false);
