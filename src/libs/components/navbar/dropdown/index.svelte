<script lang='ts'>
	import {goto} from "$app/navigation";
	import {page} from "$app/stores";
	import axios from "axios";
    import {concept} from "../../../stores/concepts";
    import {darkMode} from "../../../stores/darkmode";
    import {dropdown} from "../../../stores/nav-dropdown";
	import {notification} from "../../../stores/notification";
    import {share} from "../../../stores/share";
    import {user} from "../../../stores/user";
    import {ws} from "../../../stores/ws";
	import {CLIENT_URL} from "../../../utils/constants";
</script>

<div aria-hidden="true" on:click={() => dropdown.set(false)} class="absolute z-[1000] mt-[115px] mr-[20px] flex flex-row items-start justify-end w-full h-full">
    <div class="text-[20px] shadow-lg top-14 dark:bg-darkblack bg-white border-2 dark:border-white dark:text-white border-black w-[200px] flex flex-col items-center justify-center">
        {#if $page.route.id === "/concept/[id]"}
            <button on:click={() => {
                    $share.show = true;
                    $dropdown = false;
                }} class="p-1 py-3 cursor-pointer transition-all dark:bg-darkblack dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white text-center w-full">SHARE</button>
            {#if !$user.concept.find((i) => i.conceptId === $page.params.id).isOwner && !$user.concept.find((i) => i.conceptId === $page.params.id).isEdit}
                <button on:click={() => {
                    // @ts-ignore
                    $ws.emit('request-access', {id: $page.params.id, ownerId: $concept.user.find((i) => i.isOwner).userId, user: $user})
                    $dropdown = false
                }}
                class="p-1 py-3 cursor-pointer transition-all dark:bg-darkblack dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white text-center w-full">REQUEST ACCESS</button>
            {/if}
            <button class="p-1 py-3 cursor-pointer transition-all dark:bg-darkblack dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white text-center w-full">EXPORT</button>
        {/if}
        <button on:click={() => {goto("/profile"); $dropdown = false}} class="p-1 py-3 cursor-pointer transition-all dark:bg-darkblack dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white text-center w-full">PROFILE</button>
        <button on:click={async() => {
            await axios.get(`${CLIENT_URL}/auth/logout`);
            notification.set({type: "ERROR", message: "LOGGED OUT SUCCESSFULLY", show: true})
            goto("/auth/login")
            }} class="p-1 py-3 cursor-pointer transition-all dark:bg-darkblack dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white text-center w-full">LOGOUT</button>
        <label aria-hidden="true" on:click|stopPropagation for="toggleFour" class="flex w-full flex flex-col items-center justify-center border-t-2 dark:bg-white bg-black dark:border-white border-black py-3 cursor-pointer select-none items-center">
          <div class="relative">
              <input checked={!$darkMode} on:change|stopPropagation={() => {
                    localStorage.getItem("dark") === "true" ? localStorage.setItem("dark", "false") : localStorage.setItem("dark", "true");
                    darkMode.set(localStorage.getItem("dark") === "true");
              }} type="checkbox" id="toggleFour" class="sr-only" />
            <div class="box dark:bg-black bg-white block h-8 w-[65px] rounded-full"></div>
            <div
              class="dot absolute {$darkMode ? 'left-[35px]': 'left-[5px]'} top-1 flex h-6 w-6 items-center justify-center rounded-full dark:bg-white bg-black transition-all"
            ></div>
          </div>
        </label>
    </div> 
</div>
