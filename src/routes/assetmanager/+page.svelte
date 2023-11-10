<script>
	import { onMount } from "svelte";

	// font styles
	let h3 = 'text-text-default font-bold text-2xl';
	let label = 'text-text-default font-bold text-lg';
	let body = 'text-text-subdued text-lg';
	let numfoot = 'text-text-default text-sm font-bold';
	let footer = 'text-text-subdued text-sm font-normal';

	onMount(()=> {
		console.log('manager loaded');
	});

	// window.onload = function () {
    //     setTimeout(function() {
    //         document.getElementById("body").style.display = "";        
    //     }, 200);
    // }

	// scrolls for the table of content
	function handleClick(id) {
		const el = document.getElementById(id);

		if (el) {
			el.scrollIntoView({
				behavior: 'smooth', // To create a smooth scroll effect
				block: 'start' // To scroll to the top of the element
			});
		}
	}

	// animation for entering the page
	let isActive = true;
	function handleActive() {
		setTimeout(() => {
			isActive = false;
		}, 1500);
		return '';
	}

	// animation for leaving the page
	let isEndActive = false;
	function handlePageTransition(url) {
		isEndActive = true;
		setTimeout(() => {
			goto(url);
			// window.location.href = url;
		}, 500);
	}
</script>

<!-- animation for leaving the page -->
<!-- <div
	class={isEndActive
		? 'active px-16 py-8 bg-surface-inverse z-10 fixed h-screen w-screen z-99 flex justify-center items-center'
		: 'inactive px-16 py-8 bg-surface-inverse z-10 fixed h-screen w-screen z-99 flex justify-center items-center'}
/> -->

<!-- animation for entering the page -->
<!-- <div
	class={isActive
		? 'active px-16 py-8 bg-surface-inverse z-10 fixed h-screen w-screen z-99 flex justify-center items-center'
		: 'inactive px-16 py-8 bg-surface-inverse z-10 fixed h-screen w-screen z-99 flex justify-center items-center'}
>
	<video src="/asset/logo.mp4" type="video/mp4" class="h-16" autoplay muted />
</div> -->

<!-- Body content -->
<div class="px-6 md:px-8 lg:px-16 grid3" onload={handleActive()}>
	<div class="">
		<section class="pt-6 pb-6 md:pt-8 md:pb-16 sticky top-0 flex flex-col justify-end h-screen">
			<div class="flex flex-col gap-4 content-end">
				<span class={label}>CONTENTS</span>
				<div class="flex flex-col gap-2 text-text-subdued">
					<span
						class="hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
						on:click={() => handleClick('overview')}
						on:keypress={() => handleClick('overview')}
						role="button"
						tabindex="0">Overview</span
					>
					<span
						class="hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
						on:click={() => handleClick('problem')}
						on:keypress={() => handleClick('problem')}
						role="button"
						tabindex="0">Problem space</span
					>
					<span
						class="hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
						on:click={() => handleClick('exporation')}
						on:keypress={() => handleClick('exporation')}
						role="button"
						tabindex="0">Exploration</span
					>
					<span
						class="hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
						on:click={() => handleClick('opportunity')}
						on:keypress={() => handleClick('opportunity')}
						role="button"
						tabindex="0">Opportunity points</span
					>
					<span
						class="hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
						on:click={() => handleClick('iteration')}
						on:keypress={() => handleClick('iteration')}
						role="button"
						tabindex="0">Design iterations</span
					>
					<span
						class="hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
						on:click={() => handleClick('final')}
						on:keypress={() => handleClick('final')}
						role="button"
						tabindex="0">Final designs</span
					>
					<span
						class="hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
						on:click={() => handleClick('development')}
						on:keypress={() => handleClick('development')}
						role="button"
						tabindex="0">Development</span
					>
					<span
						class="hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
						on:click={() => handleClick('impact')}
						on:keypress={() => handleClick('impact')}
						role="button"
						tabindex="0">Impact</span
					>
				</div>
			</div>
		</section>
	</div>

	<section class="flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<div class="bg-text-default w-full h-0.5" />
				<h2 class="text-lg md:text-xl font-bold">ASSET MANAGER</h2>
			</div>
			<h1 class="text-2xl md:text-4xl font-bold">
				Centralizing Assets for Improved Consistency Across the Platform
			</h1>
		</div>
		<img src={'/asset/hero-image.png'} alt="hero" />
		<section class="flex flex-col gap-16" id="overview">
			<div class="grid grid-cols-2 gap-8">
				<div class="flex flex-col gap-16">
					<div>
						<h4 class={label}>My Role</h4>
						<p class={body}>Lead Designer and Developer</p>
					</div>
					<div>
						<h4 class={label}>My Role</h4>
						<p class={body}>Lead Designer and Developer</p>
					</div>
				</div>
				<div>
					<h4 class={label}>Overview</h4>
					<p class={body}>
						Asset Manager is a Figma plugin that stores assets such as illustrations and data used
						within the Trulioo Platform for quick access and input.
						<br />Asset Manager is currently being used across the organization and has a 100%
						adoption rate within daily design workflows.
					</p>
				</div>
			</div>
			<div class="flex flex-col gap-2 items-end">
				<div class="p-8 bg-surface-+1 rounded-lg">
					<video src="/asset/swap-assets.mp4" type="video/mp4" class="w-full" autoplay muted />
				</div>
				<div class="">
					<span class={numfoot}>0.1 </span><span class={footer}>Swap assets</span>
				</div>
			</div>
			<div class="flex flex-col gap-2 items-end">
				<div class="p-8 bg-surface-+1 rounded-lg">
					<video
						src="/asset/swap-multiple-node.mp4"
						type="video/mp4"
						class="w-full"
						autoplay
						muted
					/>
				</div>
				<div class="">
					<span class={numfoot}>0.2 </span><span class={footer}>Swap multiple text nodes</span>
				</div>
			</div>
			<div class="flex flex-col gap-2 items-end">
				<div class="p-8 bg-surface-+1 rounded-lg">
					<video
						src="/asset/asset-organization.mp4"
						type="video/mp4"
						class="w-full"
						autoplay
						muted
					/>
				</div>
				<div class="">
					<span class={numfoot}>0.3 </span><span class={footer}>Asset organization</span>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</section>
		<section class="flex flex-col gap-16" id="problem">
			<div>
				<h2 class="font-bold text-2xl md:text-4xl">01<br />Problem space</h2>
			</div>
			<div class="grid grid-cols-2 gap-8">
				<h3 class={h3}>Inconsistent illustration and text usage across products</h3>
				<div class={body}>
					The Trulioo platform comprises a diverse range of products, each overseen by its own
					dedicated design and development team. This led to isolated work environments, where teams
					operated in silos with limited cross-team communication. <br />
					<p class={label}>
						These isolated workflows gave rise to inconsistencies among the various products
					</p>
					, necessitating time-consuming review sessions and error-checking processes (<span
						class={label}>Figure 1.0</span
					>).
				</div>
			</div>
			<div class="flex flex-col gap-2 items-end">
				<div class="p-8 bg-surface-+1 rounded-lg">
					<video src="/asset/swap-assets.mp4" type="video/mp4" class="w-full" autoplay muted />
				</div>
				<div class="">
					<span class={numfoot}>0.1 </span><span class={footer}>Swap assets</span>
				</div>
			</div>
			<div class="flex flex-col gap-2 items-end">
				<div class="p-8 bg-surface-+1 rounded-lg">
					<video
						src="/asset/swap-multiple-node.mp4"
						type="video/mp4"
						class="w-full"
						autoplay
						muted
					/>
				</div>
				<div class="">
					<span class={numfoot}>0.2 </span><span class={footer}>Swap multiple text nodes</span>
				</div>
			</div>
			<div class="flex flex-col gap-2 items-end">
				<div class="p-8 bg-surface-+1 rounded-lg">
					<video
						src="/asset/asset-organization.mp4"
						type="video/mp4"
						class="w-full"
						autoplay
						muted
					/>
				</div>
				<div class="">
					<span class={numfoot}>0.3 </span><span class={footer}>Asset organization</span>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</section>
	</section>
	<div class="hidden md:block">
		<section
			class="sticky top-0 flex flex-col items-end justify-end h-screen pt-6 pb-6 md:pt-8 md:pb-16"
		/>
	</div>
</div>

<style>

	/* .active {
		top: 0;
		transition: top 0.3s ease-out, opacity 0.3s ease-in-out;
		z-index: 100;
	}

	.inactive {
		top: -100%;
		transition: top 0.3s ease-out, opacity 0.3s ease-in-out;
	} */

	.grid3 {
		display: grid;
		grid-template-columns: 2fr 6fr; /* 1/4, 5/8, 1/8 proportions */
		gap: 32px;
		@media screen and (min-width: 768px) {
			grid-template-columns: 2fr 5fr 1fr; /* 1/4, 5/8, 1/8 proportions */
		}
	}
</style>
