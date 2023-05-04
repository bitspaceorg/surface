<script lang='ts'>
	import {colors} from "../../stores/colors";
	import {notification} from "../../stores/notification";
    import { fly } from "svelte/transition";

    setTimeout(() => {
        $notification.show = false;
    }, 3000)

</script>

<div transition:fly={{x: -100}} class="absolute top-[90px] left-[50px] z-[20] flex flex-row items-center justify-start border-2 border-black w-[400px] bg-white h-[75px]">
    {#if $notification.type === 'ERROR'}
        <div style={`background: ${$colors[5]};`} class="w-[75px] border-r-2 border-black h-full flex flex-col items-center justify-center text-black">
            <span class="text-2xl">!</span>
        </div>
    {:else if $notification.type === 'SUCCESS'}
        <div style={`background: ${$colors[0]};`} class="w-[75px] border-r-2 border-black h-full flex flex-col items-center justify-center text-black">
            <span class="text-2xl">&rarr;</span>
        </div>
    {:else if $notification.type === 'WARNING'}
        <div style={`background: ${$colors[4]};`} class="w-[75px] border-r-2 border-black h-full flex flex-col items-center justify-center text-black">
            <span class="text-2xl">!</span>
        </div>
    {/if}
    <div class="w-full text-center">{$notification.message}</div>
</div>

