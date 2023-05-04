<script lang='ts'>
	import '../app.css';
	import {onMount} from 'svelte';
    import { notification } from '../libs/stores/notification';
    import { requestAccess } from '../libs/stores/request-access';
    import { share } from '../libs/stores/share';
	import Loading from '../libs/components/loading/index.svelte';
    import Nav from '../libs/components/navbar/concept/index.svelte';
    import Notification from '../libs/components/notification/index.svelte';
    import RequestAccess from '../libs/components/notification/request-access/index.svelte';
    import Share from '../libs/components/notification/share/index.svelte';
    import { getSocket } from '../libs/utils/socket';
	import { page } from '$app/stores';
	import {user} from '../libs/stores/user';
	import axios from 'axios';
	import {SERVER_URL} from '../libs/utils/constants';

    onMount(async() => {
        if($page.route.id !== '/auth/login') {
            const {data} = await axios.get(SERVER_URL+"/profile", {
                withCredentials: true
            })
            user.set(data)
        }
        getSocket()
    })

</script>

<div class="font-primary w-screen h-screen flex flex-col items-center justify-start">
	{#if $user === null && !['/auth/login', '/auth/signup'].includes($page?.route?.id || "")}
		<Loading />
	{:else}
    <div class="bg-white relative flex flex-col items-center justify-center w-screen h-screen">
        {#if $notification.show}
    	    <Notification />
        {/if}
        {#if $share.show}
            <Share />
        {/if}
        {#if $requestAccess.show}
    	    <RequestAccess />
        {/if}
        {#if ['/concept/[id]', '/'].includes($page.route.id || "")}
            <Nav />
        {/if}
        <div class="{!['/auth/login', '/auth/signup'].includes($page?.route?.id || "") ? 'mt-[45px]': ''} w-full h-full">
            <slot />
        </div>
    </div>
	{/if}
</div>
