import { writable } from 'svelte/store';
import type { Concept } from '@prisma/client';

export const concept = writable<Concept | null>(null);
