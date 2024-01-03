<script>
	import '../app.scss';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import { browser } from '$app/environment';

	import Logo from '../components/logo.svelte';
	import Menu from '../components/menu.svelte';
	import InverseMenu from '../components/inverseMenu.svelte';
	import Curtain from '../components/curtain.svelte';
	import ScrollTop from '../components/scrollTop.svelte';
	import { loading, destination } from '../store';

	import { page } from '$app/stores';
	// import '../styles/app.css';

	let isActive = false;
	function handleNav() {
		isActive = !isActive;
	}
	function closeNav() {
		isActive = false;
	}

	let y;
	function handle(url) {
		if (url != $page.route.id) {
			$destination = url;
			$loading = true;
			setTimeout(() => {
				$loading = false;
				isActive = false;
				goto(url);
			}, 1000);
		} else {
			isActive = false;
		}
	}
</script>

<svelte:window bind:scrollY={y} />

{#if $loading}
	<Curtain />
{/if}
{#if y > 500}
	<ScrollTop />
{/if}

<!-- MOBILE NAV -->
<div
	class="fixed sm:hidden bottom-0 flex bg-surface-inverse w-full flex flex-row justify-between px-6 py-4 z-50"
>
	<button
		class="h-11"
		tabindex="0"
		on:click={() => handle('/')}
		data-sveltekit-preload-data="hover"
	>
		<Logo inverse={true} />
	</button>
	<div class="flex flex-row gap-4">
		<div class=" bg-surface-0 w-0.5 h-full text-text-inverse" />
		<button tabindex="0" on:keypress={handleNav} class="h-11" on:click={handleNav}>
			<InverseMenu inverse={isActive} />
		</button>
	</div>
</div>

<!-- Desktop Nav -->
<div class="hidden sm:block">
	<button
		class="h-11 top-0 left-0 fixed ml-6 sm:ml-8 lg:ml-16 mt-6 sm:mt-8 z-50"
		tabindex="0"
		on:click={() => handle('/')}
		data-sveltekit-preload-data="hover"
	>
		<Logo inverse={isActive} />
	</button>

	<button
		tabindex="0"
		on:keypress={handleNav}
		class="h-11 top-0 right-0 fixed mr-6 sm:mr-8 lg:mr-16 mt-6 sm:mt-8 z-50"
		on:click={handleNav}
	>
		<Menu inverse={isActive} />
	</button>
</div>

{#if isActive}
	<nav
		transition:fly={{ duration: 300, y: '-100vh' }}
		class={'px-8 sm:px-8 lg:px-16 py-8 bg-surface-inverse z-20 fixed h-screen w-screen'}
	>
		<div
			class={isActive
				? 'block flex flex-col gap-8 text-text-disabled text-4xl font-bold justify-center h-full items-start'
				: ' hidden flex flex-col gap-8 text-text-disabled text-4xl font-bold justify-center h-full items-start'}
			data-sveltekit-preload-data="hover"
		>
			<button
				class="text-left cursor-pointer sm:hover:translate-x-8 duration-300 ease-in-out hover:text-text-inverse-default"
				on:click={() => handle('/about')}>About</button
			>
			<button
				class="text-left cursor-pointer sm:hover:translate-x-8 duration-300 ease-in-out hover:text-text-inverse-default"
				on:click={() => handle('/assetmanager')}>Asset Manager</button
			>

			<button
				on:click={() => handle('/accessibility')}
				class="text-left sm:hover:translate-x-8 duration-300 ease-in-out hover:text-text-inverse-default"
				>Accessibility in the Design System</button
			>
			<button
				on:click={() => handle('/tds')}
				class="text-left sm:hover:translate-x-8 duration-300 ease-in-out hover:text-text-inverse-default"
				>Trulioo Design Linter</button
			>
		</div>
		<p class="top-0 text-xl sm:top-auto sm:bottom-0 position absolute py-16 text-text-disabled">
			Designed and developed by Christopher Su
		</p>
	</nav>
{/if}
<slot />

<style>
</style>
