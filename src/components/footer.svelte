<div class="flex flex-col gap-8">
	<div class="bg-border-subdued w-full h-px gap-2" />
	<div class='flex flex-col gap-4'>
		<p class='text-text-default text-lg font-bold sm:text-2xl'>
			Get in touch below or directly at <span class="text-action-interactive-default"
				>christophersu02@gmail.com</span
			>!
		</p>
		<span class="flex flex-row gap-4">
            <a href="https://www.linkedin.com/in/chrisquinn135/" target="_blank" class="hover">
				<img src={'/linkedin.svg'} alt="logo" class="w-6 rounded" />
			</a>
            <a href="https://github.com/chrisquinn135" target="_blank" class="hover">
				<img src={'/github.png'} alt="logo" class="w-6" />
			</a>
            <a href="./christopher-su-resume.pdf" target="_blank" class="hover">
				<span class='text-sm underline'>Resume</span>
			</a>
		</span>
	</div>
	<div class="flex flex-col gap-2 text-xs text-text-subdued">
		<p>© 2023 Christopher Su</p>
		<p>Designed and developed by Christopher Su</p>
	</div>
</div>

<style>
	.hover {
		transform: none;
		transform-origin: 50% 50% 0px;
		opacity: 1;
		transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.2s ease;
	}

	.hover:hover {
		transform: translate3d(0px, -4px, 0px);
	}
</style>
