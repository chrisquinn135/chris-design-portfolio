<div class="px-6 pb-20 sm:pb-0 sm:px-8 lg:px-16 grid">
	<slot />
</div>

<style>
	.grid {
		display: flex;
		gap: 32px;
		@media screen and (min-width: 640px) {
			display: grid;
			grid-template-columns: 2fr 6fr; /* 1/4, 5/8, 1/8 proportions */
			gap: 32px;
		}
		@media screen and (min-width: 768px) {
			display: grid;
			gap: 32px;
			grid-template-columns: 1fr 4fr 1fr; /* 1/4, 5/8, 1/8 proportions */
		}
	}
</style>
