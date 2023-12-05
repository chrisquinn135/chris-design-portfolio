<script>
	import Footer from '../../components/footer.svelte';

	// font styles
	let h1 = 'text-3xl sm:text-4xl font-bold';
	let h3 = 'text-text-default text-lg font-bold sm:text-2xl';
	let label = 'text-text-default font-bold text-base';
	let body = 'text-text-subdued text-base font-light';
	let div = 'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16 self-start w-full';

	let img =
		'p-2 sm:p-8 bg-surface-+1 rounded-lg flex flex-col text-text-subdued gap-8 font-light border border-border-subdued';
</script>

<!-- Body content -->
<div class="px-6 md:px-8 lg:px-16 grid3">
	<div class="hidden sm:block">
		<section class="pt-6 pb-6 md:pt-8 md:pb-16 sticky top-0 flex flex-col justify-end h-screen">
			<div class="flex flex-col gap-4 content-end">
				<nav class={label}>CONTENTS</nav>
				<ul class="flex flex-col gap-4 text-text-placeholder">
					<li>
						<a
							href="#about"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>About</a
						>
					</li>
					<li>
						<a
							href="#experience"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Experience</a
						>
					</li>
				</ul>
			</div>
		</section>
	</div>

	<section class="flex flex-col gap-16 pt-6 pb-24 md:pt-8 md:pb-16" id="top">
		<div class="sm:flex flex-col gap-16 hidden">
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2" id="about">
					<div class="bg-text-default w-full h-0.5" />
					<h2 class={h3}>ABOUT</h2>
				</div>
				<h1 class={h1}>Nice to meet you!</h1>
			</div>
			<div class="grid grid-cols-2 gap-16">
				<div class="flex flex-col gap-16">
					<img src={'/chris.webp'} alt="hero" class="rounded-lg" />
					<div class="flex flex-col gap-4">
						<h3 class={h3}>Outside of work, you can find me...</h3>
						<ul class="flex flex-col gap-4 text-text-subdued text-base font-light">
							<li>• Coding my next plugin (stay tuned!!) 🖥️</li>
							<li>• Attempting to learn latte art ☕</li>
							<li>• Training for my next half marathon 🏃</li>
							<li>• Trying to keep my plants alive 🪴</li>
						</ul>
					</div>
				</div>
				<div class="flex flex-col gap-16">
					<div class={body}>
						<div class="flex flex-col gap-4">
							<h3 class={h3}>I’m Chris, a product designer based in San Diego!</h3>
							<span>
								I bring a unique lens to product design through combining my development background
								and technical know-how with strong design skills and sensibilities. I pride myself
								in bridging the gap between designer and developer, ensuring that the perfect
								experience gets delivered to the users!
								<br /><br />
								I’ve had the opportunity to work on a variety of projects across different disciplines,
								including B2B platforms, internal tools, and identity technologies. I am currently interested
								in opportunities that will allow me to leverage my unique position as a designer who
								can talk code and elevate the standard for technical and visual implementations.
								<br /><br />
								Feel free to reach out and start a conversation either at christophersu02@gmail.com or
								any of my socials below!
							</span>
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
						</div>
					</div>
					<img src={'/running.jpg'} alt="hero" class="rounded-lg" />
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-8 sm:hidden">
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2" id="about">
					<div class="bg-text-default w-full h-0.5" />
					<h2 class={h3}>ABOUT</h2>
				</div>
				<h1 class={h1}>Nice to meet you!</h1>
			</div>
			<div class="flex flex-col gap-16">
				<img src={'/chris.webp'} alt="hero" class="rounded-lg" />
				<div class={body}>
					<div class="flex flex-col gap-4">
						<h3 class={h3}>I’m Chris, a product designer based in San Diego!</h3>
						<span>
							I bring a unique lens to product design through combining my development background
							and technical know-how with strong design skills and sensibilities. I pride myself in
							bridging the gap between designer and developer, ensuring that the perfect experience
							gets delivered to the users!
							<br /><br />
							I’ve had the opportunity to work on a variety of projects across different disciplines,
							including B2B platforms, internal tools, and identity technologies. I am currently interested
							in opportunities that will allow me to leverage my unique position as a designer who can
							talk code and elevate the standard for technical and visual implementations.
							<br /><br />
							Feel free to reach out and start a conversation either at christophersu02@gmail.com or
							any of my socials below!
						</span>
						<span class="flex flex-row gap-6">
							<a href="https://www.linkedin.com/in/chrisquinn135/" target="_blank" class="hover">
								<img src={'/linkedin.svg'} alt="logo" class="w-8 rounded" />
							</a>
							<a href="https://github.com/chrisquinn135" target="_blank" class="hover">
								<img src={'/github.png'} alt="logo" class="w-8" />
							</a>
							<a href="./christopher-su-resume.pdf" target="_blank" class="hover">
								<span class="text-sm underline">Resume</span>
							</a>
						</span>
					</div>
				</div>
				<div class="flex flex-col gap-16">
					<img src={'/running.jpg'} alt="hero" class="rounded-lg" />
					<div class="flex flex-col gap-4">
						<h3 class={h3}>Outside of work, you can find me...</h3>
						<ul class="flex flex-col gap-4 text-text-subdued text-base font-light">
							<li>• Coding my next plugin (stay tuned!!) 🖥️</li>
							<li>• Attempting to learn latte art ☕</li>
							<li>• Training for my next half marathon 🏃</li>
							<li>• Trying to keep my plants alive 🪴</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-border-subdued w-full h-px gap-2" />
		<div class="flex flex-col gap-16">
			<div>
				<h2 class={h1}>Experience</h2>
			</div>
			<div class={div}>
				<span class={h3}>Trulioo </span>
				<div class={body}>
					<p class={label}>Associate UX/UI Designer — 2022 to Present</p>
					Designed, delivered and launched multiple features for a global B2B SaaS identity
					solutions platform, acquiring a significant number of clients within the first year of
					launch. Responsibilities include ideation, wireframing, prototyping, and visual design to
					create experiences at the global and enterprise level.
				</div>
			</div>
			<div class={div}>
				<span class={h3}>Trulioo </span>
				<div class={body}>
					<p class={label}>Product Visual Designer Intern — 2022</p>
					Provided support for the Visual design team and contributed to feature releases for a B2B SaaS identity
					solutions platform. 
				</div>
			</div>
			<div class={div}>
				<span class={h3}>VentOUT</span>
				<div class={body}>
					<p class={label}>UX Designer — 2022</p>
					Designed an online chat web application from conception to high-fidelity
					prototypes over a two day timespan for SFHacks 2022, SFSU’s hackathon with over 200
					participants.
				</div>
			</div>
			<div class={div}>
				<span class={h3}>Ditto </span>
				<div class={body}>
					<p class={label}>UX Designer and iOS Developer — 2021</p>
					Designed and developed a mobile app that allows users to share photos based on location; Developed a proof-of-concept app using Swift UI to generate over 20 user interests.
				</div>
			</div>
		</div>
		<img src={'/cover.jpg'} alt="cover" class="rounded-lg" />
		<Footer />
	</section>

	<div class="hidden md:block">
		<section
			class="sticky top-0 flex flex-col items-end justify-end h-screen pt-6 pb-6 md:pt-8 md:pb-16"
		/>
	</div>
</div>

<style>
	.grid3 {
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
</style>
