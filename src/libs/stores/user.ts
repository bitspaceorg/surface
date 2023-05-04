import { writable } from "svelte/store";
import type { User, UserConcept, Concept } from "@prisma/client";

export const user = writable<(User & {concept : UserConcept & {concept: Concept}}) | null>(null)
