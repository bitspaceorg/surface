import { writable } from "svelte/store";

export const colors = writable<Array<`#${string}`>>(['#9CEAAE', '#C8A8FF', '#FFA8A8', '#A8D8FF', '#FFDB83', '#FF7979'])
    
