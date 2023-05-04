import {redirect} from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = ({cookies}) => {
    if(cookies.get("surface_token")) {
        throw redirect(301, "/")
    }
}

