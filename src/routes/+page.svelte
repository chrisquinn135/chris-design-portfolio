<script>
	import Card from '../components/card.svelte';
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';
	import Footer from '../components/footer.svelte';

	let top = false;
	let yLocation = 0;
	if (browser) {
		window.onscroll = () => {
			yLocation = window.scrollY;

			if (yLocation >= 500) {
				top = true;
			} else {
				top = false;
			}
		};
	}
</script>
<svelte:head>
    <title>Christopher Su</title> 
</svelte:head>
<!-- body -->
<div class="px-6 pb-20 sm:pb-0 sm:px-8 lg:px-16 grid3">
	<section
		class="pt-6 pb-6 sm:pt-8 sm:pb-16 sm:sticky sm:top-0 flex flex-col justify-end sm:h-screen"
	>
		<div class="flex flex-col gap-y-8 content-end pr-8">
			<div class="hidden sm:block bg-text-default w-1/4 h-0.5" />
			<div
				class="text-2xl leading-relaxed sm:text-base md:text-lg text-text-subdued gap-4 flex flex-col font-light"
			>
				<p>
					Hi, I'm Christopher—a <span class='font-bold text-text-default'>product designer with a developer's perspective</span>, acquired through a background in software engineering. 
				</p>
				<p>
					Currently at
					<a
						class="text-action-interactive-default underline text-blue-50 hover:text-action-interactive-hover"
						href="https://www.trulioo.com/"
						target="_blank">Trulioo</a
					> working on design systems, internal tools and platform capabilities.
				</p>
			</div>
			<span class="flex flex-row gap-6">
				<a href="https://www.linkedin.com/in/chrisquinn135/" target="_blank" class="hover">
					<img src={'/linkedin.svg'} alt="logo" class="w-8 rounded" />
				</a>
				<a href="https://github.com/chrisquinn135" target="_blank" class="hover">
					<img src={'/github.png'} alt="logo" class="w-8" />
				</a>
				<a href="./christopher-su-resume.pdf" target="_blank" class="hover h-8 bg-surface-0 flex items-center px-4 py-2 rounded-lg border-2 border-text-default hover:bg-surface-+3 shadow-[0_2px_0_0_rgba(0,0,0,1)]">
					<span class="text-sm font-bold text-text-default">Resume</span>
				</a>
			</span>
				<p class="flex flex-col gap-2 text-sm text-text-subdued">Designed and developed by Christopher Su</p>
		</div>
	</section>

	<section class="flex flex-col gap-y-8 pt-6 pb-6 sm:pt-8 sm:pb-16" id="top">
		<div class="flex flex-col gap-y-2">
			<div class="bg-text-default w-full h-0.5" />
			<h1 class="text-xl font-bold">SELECTED WORK</h1>
		</div>
		<div class="flex flex-col gap-y-16" data-sveltekit-preload-data="hover">
			<Card
			title={'Asset Manager — Custom Figma Plugin'}
			desc={'A Custom Tool for Consistent Assets Across the Platform'}
				slug="/asset-hero.avif"
				t1={'Product Design'}
				t2={'Design Tooling'}
				url={'/assetmanager'}
			/>

			<div id="fold">
				<Card
				title={'Accessibility in the Design System'}
				desc={'Redesigning Components to Incorporate Accessible Design in Trulioo'}
				slug="/acc-hero.avif"
				t1={'Design System'}
				t2={'Accessibility'}
				url={'/accessibility'}
			/>
			</div>
			<Card
			title={'Trulioo Design Linter'}
			desc={'Introducing Automation to the Design Review Process'}
			slug="/tds-hero.avif"
			t1={'Product Design'}
			t2={'Design Tooling'}
			url={'/tds'}
		/>

		</div>
		<Footer/>
	</section>
	<div class="hidden sm:block">
		<section
			class="sticky top-0 flex flex-col items-end justify-end h-screen pt-6 pb-6 sm:pt-8 sm:pb-16"
		>
			{#if !top}
				<a
					href="#fold"
					in:fade={{ delay: 250, duration: 250 }}
					out:fade={{ duration: 250 }}
					class="flex flex-row rotate gap-x-4 content-center"
				>
					<span class="whitespace-nowrap text-text-subdued">scroll down</span>
					<img src="/scroll.svg" alt="scroll" class="bounce w-16" />
				</a>
			{/if}
		</section>
	</div>
</div>

<style>
	/* .active {
		top: 0;
		opacity: 1;
		transition: top 0.3s ease-out, opacity 0.3s ease-in-out;
		z-index: 100;
	}

	.inactive {
		top: -100%;
		transition: top 0.3s ease-out, opacity 0.3s ease-in-out;
	} */

	.grid3 {
		display: flex;
		flex-direction: column;
		gap: 0px;
		@media screen and (min-width: 640px) {
			display: grid;
			grid-template-columns: 2fr 6fr; /* 1/4, 5/8, 1/8 proportions */
			gap: 32px;
		}
		@media screen and (min-width: 768px) {
			display: grid;
			gap: 32px;
			grid-template-columns: 2fr 5fr 1fr; /* 1/4, 5/8, 1/8 proportions */
		}
	}

	.hover {
		transform: none;
		transform-origin: 50% 50% 0px;
		opacity: 1;
		transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.2s ease;
	}

	.hover:hover {
		transform: translate3d(0px, -4px, 0px);
	}

	.bounce {
		animation: bounce 2s ease infinite;
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateX(0);
		}
		40% {
			transform: translateX(10px);
		}
		60% {
			transform: translateX(5px);
		}
	}

	.rotate {
		transform-origin: right top !important;
		transform: rotate(90deg) translateY(0%) !important;
	}
</style>
