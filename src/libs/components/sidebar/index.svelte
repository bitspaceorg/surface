<script lang='ts'>
	import { colors } from "../../stores/colors";
	import {concept} from "../../stores/concepts";
	import {user} from "../../stores/user";

    let on: boolean = false;
    let video_on: boolean = false;

</script>

<div class="absolute overflow-hidden right-[0px] h-[95%] flex flex-row items-center justify-center">
    <button on:click={() => on = !on} class="text-[50px]">
        {on ? '>' : '<'}
    </button>
    <div class="mx-4 overflow-y-scroll h-full flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center">
            {#each $concept.user as value, idx }
                {#if !on}
                    <div class="w-[45px] h-[45px] my-1">
                        <img style="border-color: {value.userId === $user?.id ? 'white' : $colors[idx % $colors.length]};" class="shadow-md border-4 rounded-full" src={value.user.image} alt="user-pic">
                    </div>
                {:else}
                    <div class="relative flex flex-col items-center justify-center w-[280px] h-[150px] my-2 border-2 bg-black border-black rounded-lg">
                        {#if null === null}
                            <div style="background: {value.userId === $user?.id ? 'white' : $colors[idx % $colors.length] } ; border-radius: 0.4rem;" class="flex flex-col items-center justify-center w-full h-full rounded-lg" >
                                <img style="border-color: black;" class=" w-[75px] h-[75px] border-2 rounded-full" src={value.user.image} alt="user-pic">
                            </div>
                        {:else}
                            <video bind:this={value[1]} style="border-radius: 0.4rem;" autoplay playsinline class="w-[280px] h-[150px] border-2 border-black" id='user-video-{value.userId}'>
                                <track kind="captions">
                            </video>
                        {/if}
                        {#if value.userId === $user?.id}
                            <button on:click={() => {}}
                            class="absolute top-[80%] left-[4%] text-xl">V</button>
                        {/if}
                    </div>
                {/if} 
            {/each}
        </div>
    </div>
</div>
