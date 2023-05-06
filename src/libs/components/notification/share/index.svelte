<script lang='ts'>
	import {page} from "$app/stores";
    import {colors} from "../../../stores/colors";
    import Crypto from "crypto-js";
    import {CLIENT_URL} from "../../../utils/constants";
	import {mousePopup} from "../../../stores/mouse-popup";

    let CODE: string = $page.params.id;
    let value: boolean = false;

    
    $: if(value) CODE = Crypto.AES.encrypt(JSON.stringify({code: CODE, edit: true}), "RAHULNAVNEETH-SURFACE").toString()
    else CODE = $page.params.id;

    $: if(value) console.log(Crypto.AES.decrypt(CODE, "RAHULNAVNEETH-SURFACE").toString(Crypto.enc.Utf8));

</script>

<div class="absolute w-screen h-screen flex flex-col items-center justify-center">
    <div class="w-[500px] h-[100px] flex shadow-lg divide-y-2 divide-black border-2 border-black flex-col bg-white items-center justify-center">
        <div style="background: {$colors[1]} ;" class="w-full text-xl flex flex-col items-center justify-center h-[50px] font-bold">SHARE CODE</div>
        <div class="text-xl h-[50px] w-full p-4 font-bold flex flex-col items-center justify-center">
            <div class="flex flex-row items-center justify-center w-full">
                <div class="mx-4 h-[50px] flex flex-col items-center justify-center">{CODE.slice(0, 27)}{CODE.length > 27 ? "..." : ""}</div>
                <i aria-hidden="true" on:click={() => {
                        navigator.clipboard.writeText(`${CLIENT_URL}/concept/${CODE}`);
                        mousePopup.set({show: true, message: "COPIED TO CLIPBOARD!"})
                    }} class="far fa-copy cursor-pointer"></i>
            </div>
        </div>
    </div>
    <div class="flex items-center w-[500px] flex flex-row items-center justify-end">
        <input on:change={() => value = !value} bind:checked={value} id="bordered-checkbox-2" type="checkbox" name="bordered-checkbox" class="text-blue-600 bg-gray-100 p-2">
        <label for="bordered-checkbox-2" class="py-4 ml-2 text-lg font-medium">EDIT ACCESS</label>
    </div>
</div>
