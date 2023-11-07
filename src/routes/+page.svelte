<script>
	import Card from '../components/card.svelte';
	import Logo from '../components/logo.svelte';
	import Menu from '../components/menu.svelte';

	function handleClick() {
		document.getElementById('fold').scrollIntoView({
			behavior: 'smooth'
		});
	}

	let isActive = false;
	function handleNav() {
		isActive = !isActive;
	}
</script>

<div class="h-11 top-0 left-0 fixed ml-6 md:ml-8 lg:ml-16 mt-6 md:mt-8 z-50">
	<Logo inverse={isActive} />
</div>

<div role='button' tabIndex=0 on:keypress={handleNav} class="h-11 top-0 right-0 fixed mr-6 md:mr-8 lg:mr-16 mt-6 md:mt-8 z-50" on:click={handleNav}>
	<Menu inverse={isActive} />
</div>

<nav
	class={isActive
		? 'navi2 px-16 py-8 fade-in bg-surface-inverse z-10 fixed h-screen w-screen'
		: 'navi px-16 py-8 fade-in bg-surface-inverse z-10 fixed h-screen w-screen'}
>
	<div class="flex flex-col gap-8 text-text-disabled text-4xl font-bold justify-center h-full">
		<a
			href="/assetmanager"
			class="hover:translate-x-8 duration-300 ease-in-out hover:text-text-inverse-default"
			>Asset Manager</a
		>
		<a
			href="/tds"
			class="hover:translate-x-8 duration-300 ease-in-out hover:text-text-inverse-default"
			>Trulioo Design Linter</a
		>
		<a
			href="/accessibility"
			class="hover:translate-x-8 duration-300 ease-in-out hover:text-text-inverse-default"
			>Accessibility in the Design System</a
		>
	</div>
    <p class='bottom-0 py-16 fixed text-text-inverse-default'>Designed and developed by Christopher Su</p>
</nav>
<div class="px-6 md:px-8 lg:px-16 grid3">
	<div class="">
		<section class="pt-6 pb-6 md:pt-8 md:pb-16 sticky top-0 flex flex-col justify-end h-screen">
			<div class="flex flex-col gap-y-8 content-end">
				<div class="bg-text-default w-1/4 h-0.5" />
				<div class="text-base md:text-lg text-text-subdued">
					Hi, I'm Christopher, a product designer with a software engineering background <br /><br
					/>
					Passionate about designing and building
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
		<div class="flex flex-col gap-y-16">
			<Card
				title={'Asset Manager'}
				desc={'Centralizing Assets for Improved Consistency Across the Platform'}
				slug="/asset-card.png"
				t1={'Product Design'}
				t2={'Design Tooling'}
			/>
			<div id="fold">
				<Card
					title={'Trulioo Design Linter'}
					desc={'Introducing Automation to the Design Review Process'}
					slug="/design-lint-card.png"
					t1={'Product Design'}
					t2={'Design Tooling'}
				/>
			</div>
			<Card
				title={'Accessibility at Trulioo'}
				desc={'Introducing Accessibility into the Trulioo Design System'}
				slug="/accessibility-card.png"
				t1={'Design System'}
				t2={'Accessibility'}
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
	.navi2 {
		top: 0;
		opacity: 1;
		transition: top 0.3s ease-out, opacity 0.3s ease-in-out;
	}

	.navi {
		top: -100%;
		opacity: 0;
		transition: top 0.3s ease-out, opacity 0.3s ease-in-out;
	}
	/* 
    .fade-in {
        transition: opacity 0.3s ease-in-out;
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
