<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	export let url: URL;

	let isActive = true;

	function handleActive() {
		isActive = true;
		setTimeout(() => {
			isActive = false;
		}, 2000);
        return ('')
	}
</script>

{#key url}
	{handleActive()}
	<div
		class={isActive
			? 'active px-16 py-8 bg-surface-inverse z-10 fixed h-screen w-screen z-99'
			: 'inactive px-16 py-8 bg-surface-inverse z-10 fixed h-screen w-screen z-99'}
	/>
	<!-- <div
		in:fly={{ y: -50, duration: 250, delay: 300 }}
		out:fly={{ y: -50, duration: 250 }}
	> -->
	<slot />
	<!-- </div> -->
{/key}

<style>
	.active {
		top: 0;
		opacity: 1;
		transition: top 0.3s ease-out, opacity 0.3s ease-in-out;
	}

	.inactive {
		top: -100%;
		transition: top 0.3s ease-out, opacity 0.3s ease-in-out;
	}
</style>
