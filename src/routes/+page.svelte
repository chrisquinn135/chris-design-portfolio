<script>
	import Card from '../components/card.svelte';
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';
	import Footer from '../components/footer.svelte';
	import NavigationLayout from '../layouts/navigationLayout.svelte';
	import PageLayout from '../layouts/pageLayout.svelte';

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
<PageLayout>
	<div class="hidden sm:block" />
	<div class="justify-items-center">
		<section class="max-w-4xl flex flex-col gap-y-8 pt-6 pb-6 sm:pt-8 sm:pb-16" id="top">
			<div class="flex flex-col gap-y-8 content-end pr-8">
				<div
					class="text-2xl leading-relaxed sm:text-base md:text-lg text-text-subdued gap-4 flex flex-col font-light"
				>
					<h1 class="text-3xl sm:text-4xl font-bold text-text-default !leading-normal">
						Hi, I'm Christopher <span class="font-normal"
							>— a product designer who can code, tackling complex products and solutions through
							systems and tools.
						</span>
					</h1>
					<p class="text-text-subdued text-base md:text-lg font-light">
						Currently working on design systems and internal tooling at
						<a
							class="text-action-interactive-default underline text-blue-50 hover:text-action-interactive-hover"
							href="https://www.statefarm.com/"
							target="_blank">State Farm</a
						>.
					</p>
				</div>
			</div>
			<div class="flex flex-col gap-y-2 pt-8">
				<div class="bg-text-default w-full h-0.5" />
				<h1 class="text-xl font-bold">SELECTED WORK</h1>
			</div>
			<div class="grid sm:grid-cols-2 gap-y-16" data-sveltekit-preload-data="hover">
				<div id="sfds">
					<Card
						title={'STATE FARM DESIGN SYSTEM'}
						desc={'Modernizing the system for the next generation'}
						slug="/sfds.png"
						url={'/sfds'}
						key={['February 2024 - Present', 'Design systems']}
					/>
				</div>
				<div id="designToken">
					<Card
						title={'DESIGN TOKENS'}
						desc={'Implementing design tokens at State Farm'}
						slug="/token.png"
						url={'/designToken'}
						key={['May 2024 - October 2024', 'Design systems', 'System design']}
					/>
				</div>
				<div id="asset">
					<Card
						title={'ASSET MANAGER — CUSTOM FIGMA PLUGIN'}
						desc={'Creating a custom tool for consistent assets across the platform'}
						slug="/assetsq.png"
						url={'/assetmanager'}
						key={['August 2023 - October 2023', 'Product design', 'Software development']}
					/>
				</div>

				<div id="fold">
					<Card
						title={'ACCESSIBILITY IN THE DESIGN SYSTEM'}
						desc={'Redesigning components to incorporate accessible design'}
						slug="/accsq.png"
						url={'/accessibility'}
						key={['May 2023 - August 2023', 'Design systems', 'Accessibility']}
					/>
				</div>
				<!-- <div id="tds">
				<Card
					title={'TRULIOO DESIGN LINTER'}
					desc={'Introducing Automation to the Design Review Process'}
					slug="/tdssq.png"
					url={'/tds'}
					key={['Product design','Design system']}

				/>
			</div> -->
				<!-- <div id="tds">
				<Card
					title={'TRULIOO — LINK LEADS MANAGER'}
					desc={'Designing the link managment system to improve lead conversion'}
					slug="/herolead.png"
					url={'/trulioo'}
					key={['Product design','Platform capabilities']}

				/>
			</div> -->
			</div>
			<Footer />
		</section>
	</div>
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
</PageLayout>

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
