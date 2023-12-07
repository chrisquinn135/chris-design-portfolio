<script>
    export let title;
    export let desc;
    export let slug;
    export let t1;
    export let t2;
	export let url;

	import {loading, destination} from '../store'
	import { goto } from '$app/navigation';

	// text styles
	let h2 = 'text-2xl sm:text-3xl font-bold text-container'

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
			class="aspect-{2.025 / 1} w-full imagecont"
		/>
	</div>
	<div class="flex flex-col gap-2 items-start text-left">
		<h3 class={h2}>{title}</h3>
		<p class="text-text-subdued text-base md:text-lg font-light">
			{desc}
		</p>
		<div class="flex flex-row gap-x-4">
			<div class="rounded-full text-xs font-bold px-3 py-1 border border-text-default">{t1}</div>
			<div class="rounded-full text-xs font-bold px-3 py-1 border border-text-default">{t2}</div>
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
		background: #000000;
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
		border: 10px solid #000000;
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
		height: auto;
		min-height: 1px;
		display: block;
		transition: 0.3s;
	}
</style>
