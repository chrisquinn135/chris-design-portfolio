<script>
    export let title;
    export let desc;
    export let slug;
    export let key;

	export let url;

	import {loading, destination} from '../store'
	import { goto } from '$app/navigation';

	// text styles
	let h2 = 'text-xl sm:text-2xl font-bold'

	function handle(url) {
		$destination = url;
		$loading = true;
		setTimeout(() => {
			$loading = false;
			goto(url);
		}, 1000);
	}
</script>

<button on:click={()=> handle(url)} class="cursor-pointer container flex flex-col gap-4">
	<div class="test">
		<div class="box" />
		<img
			id="asset"
			src={slug}
			alt="card description"
			class="imagecont"
		/>
	</div>
	<div class="flex flex-col gap-2 items-start text-left pr-4">
		<p class="all-small-caps text-text-subdued text-lg font-light">
			{title}
		</p>
		
		<h3 class={h2}><span class='text-container'>{desc}</span></h3>
		<div class="text-text-subdued text-xs md:text-xs font-light">
			{#each key as name,i}
				{#if i<key.length -1}
					<span>{name} • </span>
				
				{:else} 
				<span>{name}</span>
				{/if}
				
			{/each}

		</div>
	</div>
</button>

<style>
	.text-container {
		position: relative;
		display: inline-block;
		overflow: hidden;
	}

	.text-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: #121212;
		transition: left 0.2s ease-in-out; /* Adjust the transition duration as needed */
		z-index: -1;
	}

	.container:hover .text-container::before {
		left: 0;
	}

	.container:hover .text-container {
		color: white;
		transition: left 0.3s ease-in-out; /* Adjust the transition duration as needed */
	}

	.container:hover .box {
		margin: 0px;
	}

	.box {
		border: 10px solid #121212;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: -10px;
		z-index: 2;
		transition: 0.3s;
	}

	.test {
		position: relative;
		overflow: hidden;
	}

	.imagecont {
		max-width: 100%;
		max-height: 100%;
		width: 100%;

		min-height: 1px;
		display: block;
		transition: 0.3s;
	}
</style>
