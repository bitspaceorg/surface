<script lang='ts'>
    import { ws } from "../../../stores/ws"
    import { user } from "../../../stores/user"
    import { concept } from "../../../stores/concepts"
	import {page} from "$app/stores";

    const handleNameChange = () => {
        // @ts-ignore
        $ws.emit('change-name', {id: $page.params.id, name: $concept.name})
    }

    let isDropDown: boolean = false;

</script>

<div class="absolute shadow-md top-0 z-[1000] bg-white w-full h-[45px] border-b-[1px] border-black flex flex-row py-2 items-center justify-between font-black font-primary text-xl" >
    <div class="w-1/3 flex flex-row px-5">
        <button class="text-left" on:click={() => {
            history.back()
            }}>&larr;</button>
    </div>
    <div class="flex flex-row items-center justify-center">
        {#if $page.route.id === "/concept/[id]" && $concept}
            <span class="cursor-default">DRAFT&nbsp;/&nbsp;</span>
            <input
                on:keyup={handleNameChange}
                style="width: {$concept.name.length * 9}px"
                class="uppercase outline-none underline text-center"
                bind:value={$concept.name}
            />
        {:else}
            <span class="cursor-default">SURFACE</span>
        {/if}
	</div>

	<div class="w-1/3 flex flex-row items-center relative justify-end px-2">
        {#if $user }
            <button on:click={() => {
                isDropDown = !isDropDown
                }}>
                <img class="w-[30px] h-full rounded-full"
                    src={$user.image}
                    alt="profileImg"
                />
            </button>
            {#if isDropDown}
                <div class="absolute shadow-lg top-14 bg-white border-2 border-black w-[200px] flex flex-col items-center justify-center">
                    {#if $page.route.id === "/concept/[id]"}
                        <button class="p-1 py-3 cursor-pointer transition-all hover:bg-black hover:text-white text-center w-full">SHARE</button>
                        {#if !$user.concept.find((i) => i.conceptId === $page.params.id).isOwner && !$user.concept.find((i) => i.conceptId === $page.params.id).isEdit}
                            <button on:click={() => {
                                // @ts-ignore
                                $ws.emit('request-access', {id: $page.params.id, ownerId: $concept.user.find((i) => i.isOwner).userId, user: $user})
                                isDropDown = false
                            }}
                            class="p-1 py-3 cursor-pointer transition-all hover:bg-black hover:text-white text-center w-full">REQUEST ACCESS</button>
                        {/if}
                        <button class="p-1 py-3 cursor-pointer transition-all hover:bg-black hover:text-white text-center w-full">EXPORT</button>
                    {:else if $page.route.id  === "/"}
                        <button class="p-1 py-3 cursor-pointer transition-all hover:bg-black hover:text-white text-center w-full">PROFILE</button>
                    {/if}
                    <form method="POST" action="/auth/logout" class="w-full">
                        <button type="submit" class="p-1 py-3 cursor-pointer transition-all hover:bg-black hover:text-white text-center w-full">LOGOUT</button>
                    </form>
                </div> 
            {/if}
        {:else}
            <a class="mx-2 underline" href="/login">
                LOGIN
            </a>
        {/if}
	</div>
</div>
