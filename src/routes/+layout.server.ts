import {redirect} from "@sveltejs/kit"
import {get} from "svelte/store"
import {notification} from "../libs/stores/notification"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = ({cookies, route}) => {
    if(cookies.get("surface_token") === undefined && !["/auth/login", "/auth/signup"].includes(route.id || "")) {
        notification.set({message: "YOU NEED TO LOGIN TO ACCESS THIS PAGE", type: "ERROR", show: true})
        throw redirect(301, "/auth/login")
    }
}

