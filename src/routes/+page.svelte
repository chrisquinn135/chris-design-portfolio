<script>
	import { onMount } from 'svelte';
	import Card from '../components/card.svelte';
	import {loading} from '../store'
	import { goto } from "$app/navigation";

	function handle() {
		$loading = true;
		setTimeout(()=> {
			$loading=false
			goto('/assetmanager')
		},1000)
	}
	onMount(()=> {
		console.log('home loaded');
	});

	// scrolls down under the fold
	function handleClick() {
		document.getElementById('fold').scrollIntoView({
			behavior: 'smooth'
		});
	}

	// animation for entering the page
	let isActive = true;
	function handleActive() {
		isActive = true;
		setTimeout(() => {
			isActive = false;
		}, 2000);
		return '';
	}

	// animation for leaving the page
	let isEndActive = false;
	function handlePageTransition(url) {
		isEndActive = true;
		setTimeout(() => {
			window.location.href = url;
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

<!-- body -->
<div class="px-6 md:px-8 lg:px-16 grid3" onload={handleActive()}>
	<div class="">
		<section class="pt-6 pb-6 md:pt-8 md:pb-16 sticky top-0 flex flex-col justify-end h-screen">
			<div class="flex flex-col gap-y-8 content-end  pr-8">
				<div class="bg-text-default w-1/4 h-0.5" />
				<div class="text-base md:text-lg text-text-subdued">
					Hi, I'm Christopher, a product designer with a software engineering background. <br /><br
					/>
					I'm passionate about designing and building
					<span class="font-bold text-text-default">accessible</span>
					and <span class="font-bold text-text-default">intuitive</span> experiences.<br /><br />
					Currently designing at
					<a
						class="text-action-interactive-default text-blue-50 hover:text-action-interactive-hover"
						href="https://www.trulioo.com/"
						target="_blank">Trulioo</a
					>.<br />
				</div>
				<span class="flex flex-row gap-6">
					<a href="https://github.com/chrisquinn135" target="_blank" class="hover">
						<img src={'/github.png'} alt="logo" class="w-8" />
					</a>
					<a href="https://www.linkedin.com/in/chrisquinn135/" target="_blank" class="hover">
						<img src={'/linkedin.svg'} alt="logo" class="w-8 rounded" />
					</a>
				</span>
			</div>
		</section>
	</div>

	<section class="flex flex-col gap-y-8 pt-6 pb-6 md:pt-8 md:pb-16">
		<div class="flex flex-col gap-y-2">
			<div class="bg-text-default w-full h-0.5" />
			<h1 class="text-xl font-bold">SELECTED WORK</h1>
		</div>
		<div class="flex flex-col gap-y-16" data-sveltekit-preload-data="hover">
			<Card
				title={'Asset Manager'}
				desc={'Centralizing Assets for Improved Consistency Across the Platform'}
				slug="/asset-card.png"
				t1={'Product Design'}
				t2={'Design Tooling'}
				url={'/assetmanager'}
				onClick={handlePageTransition}
			/>
			<div id="fold">
				<Card
					title={'Trulioo Design Linter'}
					desc={'Introducing Automation to the Design Review Process'}
					slug="/design-lint-card.png"
					t1={'Product Design'}
					t2={'Design Tooling'}
					url={'/design-lint'}
					onClick={handlePageTransition}
				/>
			</div>
			<Card
				title={'Accessibility at Trulioo'}
				desc={'Introducing Accessibility into the Trulioo Design System'}
				slug="/accessibility-card.png"
				t1={'Design System'}
				t2={'Accessibility'}
				url={'/accessibility'}
				onClick={handlePageTransition}
			/>
		</div>
	</section>
	<div class="hidden md:block">
		<section
			class="sticky top-0 flex flex-col items-end justify-end h-screen pt-6 pb-6 md:pt-8 md:pb-16"
		>
			<div
				role="button"
				tabindex="0"
				class="flex flex-row rotate gap-x-4 content-center"
				on:click={handleClick}
				on:keypress={handleClick}
			>
				<span class="whitespace-nowrap">scroll down</span>
				<img src="/scroll.svg" alt="scroll" class="bounce w-16" />
			</div>
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
		display: grid;
		grid-template-columns: 2fr 6fr; /* 1/4, 5/8, 1/8 proportions */
		gap: 32px;
		@media screen and (min-width: 768px) {
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
