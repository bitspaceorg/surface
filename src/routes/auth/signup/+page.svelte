<script lang='ts'>
	import {goto} from "$app/navigation";
	import axios from "axios";
	import {notification} from "../../../libs/stores/notification";
	import {user} from "../../../libs/stores/user";
    import {SERVER_URL} from "../../../libs/utils/constants";


    let EMAIL: string;
    let USERNAME: string;
    let PASSWORD: string;
    let CONFIRM_PASSWORD: string;
    let IMAGE_URL: string;

    let isLoading: boolean = false;

    const handleLogin = async () => {
        isLoading = true;
        if(!EMAIL || !PASSWORD || !CONFIRM_PASSWORD) notification.set({message: "PLEASE FILL ALL THE FIELDS", type: "ERROR", show: true})
        else{
            if(PASSWORD !== CONFIRM_PASSWORD) notification.set({message: "PASSWORD AND CONFIRM PASSWORD DOESN'T MATCH", type: "ERROR", show: true})
            else{
                try{
                    const {data} = await axios.post(SERVER_URL+"/signup", {
                        data: {
                            email: EMAIL,
                            password: PASSWORD,
                            username: USERNAME,
                            image: IMAGE_URL
                        }
                    }, {
                        withCredentials: true
                    })
                    notification.set({message: `${USERNAME} SUCCESSFULLY REGISTERED`, type: "SUCCESS", show: true})
                    goto("/auth/login")
                }catch(e){
                    // @ts-ignore
                    notification.set({message: e.response.data.message, type: "ERROR", show: true})
                }
            }
        }
        isLoading = false;
    }

</script>

<div id="bg" class="w-full h-full flex flex-col items-center justify-center">
    <div class="p-12 flex flex-col items-center justify-center bg-white shadow-2xl border-2 border-black">
        <div>
            <div class="w-[350px] h-[80px] my-4 flex flex-col items-start justify-center">
                <label for="email" class="text-xl font-black">EMAIL</label>
                <input bind:value={EMAIL} id="email" class="w-full h-[50px] outline-none text-xl font-black py-2 px-4 border-black border-2" placeholder="xxxxx@gmail.com">
            </div>
            <div class="w-[350px] h-[80px] my-4 flex flex-col items-start justify-center">
                <label for="username" class="text-xl font-black">USERNAME</label>
                <input bind:value={USERNAME} id="username" class="w-full h-[50px] outline-none text-xl font-black py-2 px-4 border-black border-2" placeholder="xxxxx">
            </div>
            <div class="w-[350px] h-[80px] flex flex-col items-start justify-center">
                <label for="password" class="text-xl font-black">PASSWORD</label>
                <input bind:value={PASSWORD} id="password" type="password" class="w-[350px] h-[50px] outline-none text-xl font-black py-2 px-4 border-black border-2" placeholder="* * * * *">
            </div>
            <div class="w-[350px] h-[80px] my-4 flex flex-col items-start justify-center">
                <label for="confirm_password" class="text-xl font-black">CONFIRM PASSWORD</label>
                <input bind:value={CONFIRM_PASSWORD} id="confirm_password" type="password" class="w-[350px] h-[50px] outline-none text-xl font-black py-2 px-4 border-black border-2" placeholder="* * * * *">
            </div>
            <div class="w-[350px] h-[80px] my-4 flex flex-col items-start justify-center">
                <label for="image_url" class="text-xl font-black">PROFILE IMAGE URL</label>
                <input bind:value={IMAGE_URL} id="image_url" class="w-full h-[50px] outline-none text-xl font-black py-2 px-4 border-black border-2" placeholder="https://avatars.githubusercontent.com/u/128706614?v=4">
            </div>
        </div>
        <button on:click={handleLogin} class="transition-all {!isLoading ? 'hover:pl-6' : ''} w-[350px] h-[50px] mt-8 outline-none text-xl text-white bg-black p-2 my-2 border-black border-2">
            {#if !isLoading}
                SIGNUP &rarr;
            {:else}
                <div class="w-full flex flex-col items-center justify-center" role="status">
                    <svg aria-hidden="true" class="w-[20px] h-[20px] ext-gray-200 animate-spin dark:text-white fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </div>
            {/if}
        </button>
        - OR -
        <button disabled class="disabled:bg-gray-200 disabled:hover:pl-2 transition-all hover:pl-6 w-[350px] h-[50px] flex flex-row items-center justify-center mt-2 outline-none text-xl p-2 my-2 border-black border-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" alt="google-png" class="w-[20px] h-[20px] mx-4">SIGNUP WITH GOOGLE &rarr;
            </button>
    </div>
    <a href="/auth/login" class="mt-10 text-xl w-[450px] text-end px-2">LOGIN?</a>
</div>

<style>
    #bg {
        background-color: #fff;
        background-image: radial-gradient(rgb(192, 197, 206) 1px, white 1px);
        background-size: 15px 15px;
    }
</style>
