import { writable } from "svelte/store";

export const mouseCoords = writable<{x: number, y: number}>({x: 100, y: 100});
