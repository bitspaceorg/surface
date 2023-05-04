import { redirect } from '@sveltejs/kit'
import {user} from '../../../libs/stores/user';
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
    throw redirect(302, '/')
}

export const actions: Actions = {
    default({ cookies }) {
        cookies.set('surface_token', '', {
          path: '/',
          expires: new Date(0),
        })
        user.set(null)
        throw redirect(302, '/auth/login')
    },
};
