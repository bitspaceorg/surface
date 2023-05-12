<script lang='ts'>
    import { colors } from "../../../stores/colors";
    import {concept} from "../../../stores/concepts";
	import {darkMode} from "../../../stores/darkmode";
    import {user} from "../../../stores/user";

    let on: boolean = false;
    let video_on: boolean = false;

    let isSpeaking: boolean = false;

    setInterval(() => {
        Math.floor(Math.random() * 2) ? isSpeaking = true : isSpeaking = false;
    }, 200)
</script>

<div class="absolute overflow-hidden right-[0px] h-[95%] flex flex-row items-center justify-center">
    <button on:click={() => on = !on} class="text-[50px] dark:bg-black dark:text-white">
        {on ? '>' : '<'}
    </button>
    <div class="mx-4 overflow-y-scroll h-full flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center">
            {#each $concept.user as value, idx }
                {#if !on}
                    <div class="w-[45px] h-[45px] my-1">
                        <img style="border-color: {value.userId === $user?.id ? 'white' : $colors[idx % $colors.length]};"
                            class="shadow-md {isSpeaking ? 'p-2' : ''} transition-all border-4 rounded-full" src={value.user.image} alt="user-pic">
                    </div>
                {:else}
                    <div class="relative flex flex-col items-center justify-center w-[280px] h-[150px] my-2 border-2 dark:bg-white bg-black {value.userId === $user?.id ? 'dark:border-white' : '' } border-black rounded-lg">
                        {#if null === null}
                            <div style="background: {value.userId === $user?.id ? $darkMode ? '#111317' : 'white' : $colors[idx % $colors.length] } ; border-radius: 0.4rem;" class="flex flex-col items-center justify-center w-full h-full rounded-lg" >
                                <img class=" w-[75px] h-[75px] transition-all {isSpeaking ? 'p-4' : 'p-2'} border-4 {value.userId === $user?.id ? 'dark:border-white' : '' } border-black rounded-full" src={value.user.image} alt="user-pic">
                            </div>
                        {:else}
                            <video bind:this={value[1]} style="border-radius: 0.4rem;" autoplay playsinline class="w-[280px] h-[150px] border-2 border-black" id='user-video-{value.userId}'>
                                <track kind="captions">
                            </video>
                        {/if}
                        {#if value.userId === $user?.id}
                            <div class="absolute top-[80%] left-[4%] text-xl dark:text-white">
                                <button on:click={() => {}}>V</button>
                                <button on:click={() => {}}>A</button>
                            </div>
                        {/if}
                    </div>
                {/if} 
            {/each}
        </div>
    </div>
</div>
