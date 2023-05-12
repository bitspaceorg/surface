<script lang='ts'>
    import { ws } from "../../../stores/ws"
    import { user } from "../../../stores/user"
    import { concept } from "../../../stores/concepts"
    import { dropdown } from "../../../stores/nav-dropdown"
	import {page} from "$app/stores";
	import {goto} from "$app/navigation";

    const handleNameChange = () => {
        // @ts-ignore
        $ws.emit('change-name', {id: $page.params.id, name: $concept.name})
    }

</script>

<div class="absolute shadow-md top-0 z-[1000] bg-white w-full h-[45px] border-b-[1px] dark:border-white border-black flex flex-row py-2 items-center justify-between font-black font-primary text-xl dark:bg-darkblack dark:text-white " >
    <div class="w-1/6 flex flex-row px-5">
        <button class="text-left" on:click={() => {
            goto('/')
            }}>&larr;</button>
    </div>
    <div class="w-1/6">
        {#if $concept !== null && $page.route.id === "/concept/[id]"}
            <div> 
                <button>CHAT?</button>
            </div> 
        {/if}
    </div>
    <div class="flex flex-row items-center justify-center dark:bg-darkblack dark:text-white">
        {#if $page.route.id === "/concept/[id]" && $concept}
            <span class="cursor-default">DRAFT&nbsp;/&nbsp;</span>
            <input
                on:keyup={handleNameChange}
                style="width: {$concept.name.length * 9}px"
                class="uppercase dark:bg-darkblack dark:text-white outline-none underline text-center"
                bind:value={$concept.name}
            />
        {:else}
            <span class="cursor-default">SURFACE</span>
        {/if}
	</div>
    <div class="w-1/6 flex flex-col items-end">
        {#if $concept !== null && $page.route.id === "/concept/[id]"}
            <div>
                <button class="w-[25px] h-[25px] rounded-full dark:bg-[#2B3241] dark:text-white text-sm flex flex-col items-center justify-center pb-1">...</button>
            </div> 
        {/if}
    </div>
	<div class="w-1/6 flex flex-row items-center relative justify-end px-2">
        {#if $user }
            <button on:click={() => {
                $dropdown = !$dropdown
                }}>
                <img class="w-[30px] h-full rounded-full"
                    src={$user.image}
                    alt="profileImg"
                />
            </button>
        {:else}
            <a class="mx-2 underline" href="/login">
                LOGIN
            </a>
        {/if}
	</div>
</div>
