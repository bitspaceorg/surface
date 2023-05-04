<script lang='ts'>
	import { goto } from '$app/navigation';
	import {user} from '../libs/stores/user';

    const handleNewConcept = () => {
    	goto('/concept');
    }

</script>

<div id='bg' class="relative w-full h-full flex flex-col items-center justify-center">
    <!-- <div class="w-fit text-2xl px-10">FILTER &darr;</div> -->
    <div class="w-full h-[550px] p-10 overflow-scroll flex flex-row items-center justify-center flex-wrap">
        {#each $user.concept as value, idx}
            <div aria-hidden="true" class="cursor-pointer m-2 flex flex-col items-start justify-center" on:click={() => goto(`/concept/${value.concept.id}`)}>
                <div class="mt-2">{value.concept.name.toUpperCase()}</div>
                {#if value.concept.metadata.length}
                    <img class="hover-img hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] bg-white transition-all hover:border-4 border-2 border-black w-[350px] h-[200px] object-contain" src={value.concept.metadata} alt="key" />
                {:else}
                    <div class="border-2 border-black w-[350px] h-[253.46px]"/>
                {/if}
            </div>
        {:else}
            NONE
        {/each}
    </div>
    <button
    	on:click={handleNewConcept}
    	class="w-[100px] h-[35px] mt-20 text-xl rounded-md bg-black hover:bg-[#151515] transition-all text-white"
    	>new?</button
    >
</div>

<style>
    .hover-img:hover {
        background-color: #fff;
        background-image: radial-gradient(rgb(192, 197, 206) 1px, white 1px);
        background-size: 15px 15px;
    }
</style>
