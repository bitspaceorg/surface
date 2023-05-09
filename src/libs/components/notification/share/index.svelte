<script lang='ts'>
	import {page} from "$app/stores";
    import {colors} from "../../../stores/colors";
    import Crypto from "crypto-js";
    import {CLIENT_URL} from "../../../utils/constants";
	import {mousePopup} from "../../../stores/mouse-popup";
	import {darkMode} from "../../../stores/darkmode";
	import {share} from "../../../stores/share";
	import {user} from "../../../stores/user";
	import {concept} from "../../../stores/concepts";

    let CODE: string = $page.params.id;
    let value: boolean = false;

    
    $: if(value) CODE = Crypto.AES.encrypt(JSON.stringify({code: CODE, edit: true}), "RAHULNAVNEETH-SURFACE").toString().replace("/", "-")
    else CODE = $page.params.id;

    $: if(value) console.log(Crypto.AES.decrypt(CODE.replace("-", "/"), "RAHULNAVNEETH-SURFACE").toString(Crypto.enc.Utf8));

</script>

<div aria-hidden="true" on:click={() => share.set(i => !i)} class="absolute w-screen h-screen flex flex-col items-center justify-center">
    <div aria-hidden="true" on:click|stopPropagation style="border-color: {$darkMode ? $colors[1] : 'black'};" class="w-[500px] h-[100px] flex shadow-lg divide-y-2 divide-black border-2 flex-col bg-white items-center justify-center">
        <div style="background: {$colors[1]} ;" class="w-full text-xl flex flex-col items-center justify-center h-[50px] font-bold">SHARE CODE</div>
        <div class="text-xl h-[50px] w-full p-4 font-bold flex flex-col items-center justify-center dark:bg-darkblack">
            <div class="flex flex-row items-center justify-center w-full dark:text-white">
                <div class="mx-4 h-[50px] flex flex-col items-center justify-center">{CODE.slice(0, 27)}{CODE.length > 27 ? "..." : ""}</div>
                <i aria-hidden="true" on:click={() => {
                        navigator.clipboard.writeText(`${CLIENT_URL}/concept/${CODE}`);
                        mousePopup.set({show: true, message: "COPIED TO CLIPBOARD!"})
                    }} class="far fa-copy cursor-pointer"></i>
            </div>
        </div>
    </div>
    {#if $concept?.user.find(i => i.userId === $user?.id).isOwner}
        <div class="mt-2 flex items-center w-[500px] flex flex-row items-center justify-end">
            <label aria-hidden="true" on:click|stopPropagation for="toggleFive" class="flex flex-col items-center justify-center cursor-pointer select-none items-center">
                <div class="relative">
                    <input checked={value} on:change={() => value = !value} type="checkbox" id="toggleFive" class="sr-only" />
                    <div style="background-color: {$colors[1]};"
                        class="box border-2 border-black block h-8 w-[65px] rounded-full flex flex-col px-1 items-end justify-center pr-[6px]">{!value ? "EDIT" : ""}</div>
                    <div
                        class="dot absolute {value ? 'left-[35px]': 'left-[5px]'} top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black transition-all"
                    />
                </div>
            </label>
        </div>
    {/if}
</div>
