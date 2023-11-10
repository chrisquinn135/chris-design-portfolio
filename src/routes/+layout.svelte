<script>
	import '../app.scss';
	import { goto } from '$app/navigation';

	import Logo from '../components/logo.svelte';
	import Menu from '../components/menu.svelte';
	import Curtain from '../components/curtain.svelte';
	import { loading } from '../store';

	import { page } from '$app/stores';

	// import '../styles/app.css';

	let isActive = false;
	function handleNav() {
		isActive = !isActive;
	}
	function closeNav() {
		isActive = false;
	}

	function handle(url) {
		$loading = true;
		setTimeout(() => {
			$loading = false;
			isActive = false;
			goto(url);
		}, 1000);
	}
</script>

{#if $loading}
	<Curtain />
{/if}

<div>
	<button
		class="h-11 top-0 left-0 fixed ml-6 md:ml-8 lg:ml-16 mt-6 md:mt-8 z-50"
		tabindex="0"
		on:click={() => handle('/')}
		data-sveltekit-preload-data="hover"
	>
		<Logo inverse={isActive} />
	</button>

	<button
		tabindex="0"
		on:keypress={handleNav}
		class="h-11 top-0 right-0 fixed mr-6 md:mr-8 lg:mr-16 mt-6 md:mt-8 z-50"
		on:click={handleNav}
	>
		<Menu inverse={isActive} />
	</button>
</div>

<nav
	class={isActive
		? 'navi2 px-16 py-8 bg-surface-inverse z-10 fixed h-screen w-screen'
		: 'navi px-16 py-8 bg-surface-inverse z-10 fixed h-screen w-screen'}
>
	<div
		class="flex flex-col gap-8 text-text-disabled text-4xl font-bold justify-center h-full items-start"
		data-sveltekit-preload-data="hover"
	>
		<button
			class="cursor-pointer hover:translate-x-8 duration-300 ease-in-out hover:text-text-inverse-default"
			on:click={() => handle('/assetmanager')}>Asset Manager</button
		>
		<button
			on:click={() => handle('/tds')}
			class="hover:translate-x-8 duration-300 ease-in-out hover:text-text-inverse-default"
			on:click={closeNav}>Trulioo Design Linter</button
		>
		<button
			on:click={() => handle('/accessibility')}
			class="hover:translate-x-8 duration-300 ease-in-out hover:text-text-inverse-default"
			on:click={closeNav}>Accessibility in the Design System</button
		>
	</div>
	<p class="bottom-0 absolute py-16 text-text-inverse-default">
		Designed and developed by Christopher Su
	</p>
</nav>
<slot />

<style>
	.active {
		top: 0;
		transition: top 0.3s ease-out, opacity 0.3s ease-in-out;
		z-index: 100;
	}

	.inactive {
		top: -100%;
		transition: top 0.3s ease-out, opacity 0.3s ease-in-out;
	}

	.navi2 {
		top: 0;
		display:block;
		opacity: 1;
		transition: top 0.3s ease-out, opacity 0.3s ease-in-out;
	}

	.navi {
		top: -100%;
		opacity: 0;
		display: none;
		transition: top 0.3s ease-out, opacity 0.3s ease-in-out;
	}
</style>
