<script>
	import { fly } from 'svelte/transition';
</script>

<div
	class='active px-16 py-8 bg-surface-inverse z-10 fixed h-screen w-screen z-99 flex justify-center items-center'
    out:fly={{ delay: 700, duration: 1000, y: '-100%', opacity: 1 }} 
    in:fly={{ delay: 0, duration: 300, y: '-100%', opacity: 1 }}
> 

</div>


<style>
	.active {
		top: 0;
	}

</style>
