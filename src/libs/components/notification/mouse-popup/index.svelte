<script lang='ts'>
    import {mouseCoords} from "../../../stores/mouse-coords";
	import {mousePopup} from "../../../stores/mouse-popup";

    setTimeout(() => {
        mousePopup.set({show: false, message: ""})
    }, 2000)

</script>

<div class="absolute w-screen h-screen">
    <div style="left: {$mouseCoords.x + 20}px; top: {$mouseCoords.y + 20}px;"  class="absolute dark:bg-darkblack bg-white dark:text-white px-4 py-2 text-center shadow-lg divide-y-2 divide-black border-2 dark:border-white border-black">
        {$mousePopup.message}
    </div>
</div>

