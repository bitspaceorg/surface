<script lang='ts'>
	import { goto } from '$app/navigation';
	import {darkMode} from '../libs/stores/darkmode';
	import {user} from '../libs/stores/user';

    const handleNewConcept = () => {
    	goto('/concept');
    }

</script>

<div class="relative dark:bg-black w-full h-full flex flex-col items-center justify-center">
    <!-- <div class="w-fit text-2xl px-10">FILTER &darr;</div> -->
    <div class="w-full h-[550px] p-10 overflow-scroll flex flex-row items-center justify-center flex-wrap">
        {#each $user.concept as value, idx}
            <div aria-hidden="true" class="cursor-pointer m-2 flex flex-col items-start justify-center" on:click={() => goto(`/concept/${value.concept.id}`)}>
                <div class="dark:text-white mt-2">{value.concept.name.slice(0,27).toUpperCase()}{value.concept.name.length >= 27 ? "...":""}</div>
                {#if value.concept.metadata.length}
                    <img class="{$darkMode ? 'hover-img-dark' : 'hover-img' } hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] dark:bg-black bg-white transition-all hover:border-4 border-2 dark:border-white border-black w-[350px] h-[200px] object-contain" src={value.concept.metadata} alt="key" />
                {:else}
                    <div class="border-2 dark:bg-black dark:border-white border-black w-[350px] h-[253.46px]"/>
                {/if}
            </div>
        {:else}
            <div class="dark:text-white text-xl">NONE</div>
        {/each}
    </div>
    <button
    	on:click={handleNewConcept}
    	class="px-4 h-[35px] mt-20 text-xl rounded-md dark:bg-white dark:text-black bg-black hover:bg-[#151515] dark:hover:bg-[#e8e8e9] transition-all text-white"
    >NEW CONCEPT ?</button
    >
</div>

<style>
    .hover-img:hover {
        background-color: #fff;
        background-image: radial-gradient(rgb(192, 197, 206) 1px, white 1px);
        background-size: 15px 15px;
    }

    .hover-img-dark:hover {
        background-color: rgb(17, 20, 26);
        background-image: radial-gradient(rgb(58, 62, 69) 1px, rgb(17, 20, 26) 1px);
        background-size: 15px 15px;
    }
</style>
