import { redirect } from '@sveltejs/kit'
import {user} from '../../../libs/stores/user';
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({cookies}) => {
    cookies.set('surface_token', '', {
      path: '/',
      expires: new Date(0),
    })
    user.set(null)
    throw redirect(307, '/auth/login')
}
