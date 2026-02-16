<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Change this to your desired portfolio password (or use import.meta.env.VITE_PORTFOLIO_PASSWORD)
	const PORTFOLIO_PASSWORD = 'welcome';

	const curtainDuration = 300;
	const curtainEasing = (t) => t * (2 - t);

	/**
	 * Out transition: curtain (whole overlay) slides upward off the screen. No opacity.
	 */
	function curtainUp(node, { lifting: shouldAnimate = false }) {
		if (!shouldAnimate) return { duration: 0 };
		const height = node.offsetHeight;
		return {
			duration: curtainDuration,
			easing: curtainEasing,
			css: (t) => `transform: translateY(${(1 - t) * -height}px);`,
		};
	}

	let unlocked = false;
	let lifting = false;
	let password = '';
	let error = '';

	onMount(() => {
		if (browser) {
			unlocked = sessionStorage.getItem('portfolio-unlocked') === 'true';
		}
	});

	function handleSubmit(e) {
		e?.preventDefault();
		error = '';
		if (password.trim() === PORTFOLIO_PASSWORD) {
			lifting = true;
			if (browser) sessionStorage.setItem('portfolio-unlocked', 'true');
			unlocked = true;
		} else {
			error = 'Incorrect password';
		}
	}
</script>

{#if !unlocked}
	<div
		class="password-gate"
		role="dialog"
		aria-label="Portfolio password"
		out:curtainUp={{ lifting }}
	>
		<div class="h-11 top-0 left-0 fixed ml-6 sm:ml-8 lg:ml-16 mt-6 sm:mt-8 z-50">
			<img src="/inverse.png" alt="logo" class="h-full" />
		</div>
		<div class="gate-form-wrap">
			<form on:submit={handleSubmit} class="gate-form items-center gap-4">
				<label for="portfolio-password" class="gate-label font-bold">Portfolio password</label>
				<input
					id="portfolio-password"
					type="password"
					bind:value={password}
					class="gate-input"
					placeholder="Enter password"
					autocomplete="current-password"
				/>
				{#if error}
					<p class="gate-error">{error}</p>
				{/if}
				<button type="submit" class="gate-button">Enter</button>
				
			</form>
		</div>
	</div>
{/if}

<style>
	.password-gate {
		position: fixed;
		inset: 0;
		z-index: 9999;
		pointer-events: auto;
		background: #000;
	}

	.gate-form-wrap {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.password-gate .gate-form {
		pointer-events: auto;
	}

	.gate-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-width: 280px;
		max-width: 90vw;
	}

	.gate-label {
		color: rgba(255, 255, 255, 0.9);
		font-family: 'Raleway', sans-serif;
		text-align: center;
		font-weight: 700;
    font-size: 2rem;
    line-height: 125%;
	}

	.gate-input {
		width: 100%;
		padding: 0.75rem 1rem;
		font-size: 1rem;
		color: #fff;
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 6px;
		outline: none;
		transition: border-color 0.2s, box-shadow 0.2s;
	}

	.gate-input::placeholder {
		color: rgba(255, 255, 255, 0.4);
	}

	.gate-input:focus {
		border-color: rgba(255, 255, 255, 1);
		box-shadow: 0 0 0 1px rgba(255, 255, 255, 1);
	}

	.gate-error {
		color: #e57373;
		font-size: 0.875rem;
		margin: 0;
	}

	.gate-button {
		padding: 0.625rem 1.5rem;
		font-size: 0.9375rem;
		font-weight: 500;
		color: #000;
		background: #fff;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		transition: background 0.2s, transform 0.1s;
	}

	.gate-button:hover {
		background: rgba(255, 255, 255, 0.9);
	}

	.gate-button:active {
		transform: scale(0.98);
	}
</style>
