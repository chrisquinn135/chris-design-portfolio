<script>
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
    import {destination} from '../store'
	import { onMount } from 'svelte';

</script>

<div
	class='active px-16 py-8 bg-surface-inverse z-10 fixed h-screen w-screen z-99 flex justify-center items-center'
    out:fly={{ delay: 1000, duration: 500, y: '-100%', opacity: 1 }} 
    in:fly={{ delay: 0, duration: 500, y: '-100%', opacity: 1 }}
> 

    <video src={$destination == '/assetmanager' ? "/curtain/blue.mp4" :
    $destination == '/tds' ? "/curtain/green.mp4" :
    $destination == '/accessibility' ? "/curtain/yellow.mp4" : "/curtain/orange.mp4"} type="video/mp4" class="h-16" autoplay muted />
</div>


<style>
	.active {
		top: 0;
        z-index: 999;
	}

</style>
