<script lang="ts">
	import {darkMode} from "../../libs/stores/darkmode";
	import {user} from "../../libs/stores/user";
</script>

<div class="w-full h-full flex-col items-center justify-center dark:bg-black">
    <img class="" src={$user?.image} alt="profile_img">
    <input on:change={() => {
        localStorage.getItem("dark") === "true" ? localStorage.setItem("dark", "false") : localStorage.setItem("dark", "true");
        darkMode.set(localStorage.getItem("dark") === "true");
    }} type="checkbox">
</div>
