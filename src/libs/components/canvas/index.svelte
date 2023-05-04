<script>
    import {page} from "$app/stores";
    import { onDestroy, onMount } from "svelte";
	import {concept} from "../../stores/concepts";
	import {notification} from "../../stores/notification";
	import {user} from "../../stores/user";
    import { ws } from "../../stores/ws";

    let canvas;
    let context;
    let isDrawing = false;
    let lastX;
    let lastY;

    function handleMouseDown(event) {
        isDrawing = true;
        lastX = event.offsetX;
        lastY = event.offsetY;
    }

    function handleMouseMove(event) {
        if (!isDrawing) return;
        if(!$concept.user.find(i => i.userId === $user.id).isEdit){
            notification.set({message: "EDIT ACCESS NOT ALLOWED", type: "ERROR", show: true})
            return;
        }
        const x = event.offsetX;
        const y = event.offsetY;
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(x, y);
        context.stroke();
        lastX = x;
        lastY = y;

        // Send cursor position to server
        // @ts-ignore
        $ws?.emit('on-draw', {id: $page.params.id, data: canvas.toDataURL(), cursor: { x, y } })
    }

    function handleMouseUp() {
        isDrawing = false;
    }

    // @ts-ignore
    $ws?.on(`concept-receive-${$page.params.id}`, (data) => {
        const img = new Image();
        img.src = data;
        img.onload = function() {
            context.drawImage(img, 0, 0);
        };
    })

    onMount(() => {
        canvas = document.getElementById("myCanvas");
        context = canvas.getContext("2d");

        const img = new Image();
        img.src = $concept.metadata;
        img.onload = function() {
            context.drawImage(img, 0, 0);
        }

        context.lineWidth = 100;
        context.lineJoin = "round";
        context.lineCap = "round";
        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseup", handleMouseUp);

        // Set canvas dimensions to match container element
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
    });

    onDestroy(() => {
        canvas.removeEventListener("mousedown", handleMouseDown);
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseup", handleMouseUp);
    });
</script>

<div class="w-screen h-full overflow-scroll">
    <canvas on:mouseup={() => {$ws.emit("save-concept", {id: $page.params.id, data: canvas.toDataURL()})}} id="myCanvas"></canvas>
</div>
<style>
    #myCanvas {
        background-color: #fff;
        background-image: radial-gradient(rgb(192, 197, 206) 1px, white 1px);
        background-size: 15px 15px;
    }
</style>
