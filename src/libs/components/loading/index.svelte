<script lang='ts'>
	const TITLE: string = 'SURFACE';
	let loadingDots: string = '.';
	setInterval(() => {
		if (loadingDots.length === 3) loadingDots = '.';
		else loadingDots += '.';
	}, 500);
</script>

<div class="absolute w-screen h-screen flex flex-col items-center justify-center">
	<h1 class="text-[100px]">{TITLE}</h1>
	<span class="text-[25px]">{loadingDots}</span>
</div>
