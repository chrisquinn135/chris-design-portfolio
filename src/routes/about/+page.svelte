<script>
	// font styles
	let h1 = 'text-3xl sm:text-4xl font-bold';
	let h3 = 'text-text-default text-lg font-bold sm:text-2xl';
	let label = 'text-text-default font-bold text-base';
	let body = 'text-text-subdued text-base font-light';
	let numfoot = 'text-text-default text-sm font-bold';
	let footer = 'text-text-subdued text-sm font-light';
	// content styles
	let video = 'p-2 sm:p-8 bg-surface-+1 rounded-lg';
	// section styles
	let section = 'flex flex-col gap-8 sm:gap-16';
	let div = 'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16 self-start w-full';
	let container = 'flex flex-col gap-4 sm:gap-8';
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

	<section class="flex flex-col gap-16 pt-6 pb-24 md:pt-8 md:pb-16" id='top'>
		<div class="sm:flex flex-col gap-16 hidden">
			<div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2" id='about'>
                    <div class="bg-text-default w-full h-0.5" />
                    <h2 class={h3}>ABOUT</h2>
                </div>
                <h1 class={h1}>
                    Nice to meet you!
                </h1>
            </div>
			<div class="grid grid-cols-2 gap-16">
                <div class='flex flex-col gap-16'>
                    <img src={'/chris.webp'} alt="hero" class='rounded-lg'/>
                    <p class={body}>
                        When I'm not designing, you can often find me
                        pursuing my other passions, such as <span class={label}>training for my next race 🏃</span>, <span class={label}>coding my new design tool</span> (stay
                        tuned!) ⌨️, and <span class={label}>trying to keep my plants alive 🪴</span>!
                    </p>
                </div>
                <div class='flex flex-col gap-16'>
                    <p class={body}>
                        I’m <span class={label}>Chris</span>, a UX/UI designer at Trulioo based in San Diego! I'm passionate about creating
                        cohesive and efficient design solutions that empower teams to work more effectively and
                        deliver exceptional products. I find inspiration in the world around me, and I bring that
                        same creative energy to my work as a designer. I believe that great design is about more
                        than just aesthetics; it's about <span class={label}>solving problems and creating meaningful experiences</span> that
                        delight and engage users.
                    </p>
                    <img src={'/running.jpg'} alt="hero" class='rounded-lg'/>
                </div>
			</div>
		</div>
		<div class="flex flex-col gap-8 sm:hidden">
			<div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2" id='about'>
                    <div class="bg-text-default w-full h-0.5" />
                    <h2 class={h3}>ABOUT</h2>
                </div>
                <h1 class={h1}>
                    Nice to meet you!
                </h1>
            </div>
			<div class="flex flex-col gap-16">
                    <img src={'/chris.webp'} alt="hero" class='rounded-lg'/>
                    <p class={body}>
                        I’m <span class={label}>Chris</span>, a UX/UI designer at Trulioo based in San Diego! I'm passionate about creating
                        cohesive and efficient design solutions that empower teams to work more effectively and
                        deliver exceptional products. I find inspiration in the world around me, and I bring that
                        same creative energy to my work as a designer. I believe that great design is about more
                        than just aesthetics; it's about <span class={label}>solving problems and creating meaningful experiences</span> that
                        delight and engage users.
                    </p>
					<img src={'/running.jpg'} alt="hero" class='rounded-lg'/>
                    <p class={body}>
                        When I'm not designing, you can often find me
                        pursuing my other passions, such as <span class={label}>training for my next race 🏃</span>, <span class={label}>coding my new design tool</span> (stay
                        tuned!) ⌨️, and <span class={label}>trying to keep my plants alive 🪴</span>!
                    </p>
			</div>
		</div>
		<div class="flex flex-col gap-16">
			<div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2" id='about'>
                    <div class="bg-text-default w-full h-0.5" />
                    <h2 class={h3}>EXPERIENCE</h2>
                </div>
                <h1 class={h1}>
                    Pivoting from development to design
                </h1>
            </div>
			<div class={div}>
				<h3 class={h3}>Studying software development</h3>
				<div class={body}>
					In May 2022, I graduated with a <span class={label}>degree in software development</span> from San Francisco State
					University. <br /><br />There, I built a solid foundation in frontend development and a
					knack for detail-oriented work. It was also there that I got my first introduction in product
					design when I took the Human-Computer Interactions course in my senior year.
				</div>
			</div>
			<div class={div}>
				<h3 class={h3}>Moving into design</h3>
				<div class={body}>
					I got my first taste in product design when I took the Human-Computer Interactions course
					in my senior year at university. Although I enjoyed frontend development immensely, I was
					immediately drawn to product design and did everything I could to learn more including
					attending talks, taking certificate programs and participating in hackathons as a
					designer. <br /> <br />To my advantage, <span class={label}>the skills that I learned in frontend development
					helped expedite my designer education and even helped me prototype, build and test my own
					designs</span>.
				</div>
			</div>
			<div class={div}>
				<h3 class={h3}>Trulioo</h3>
				<div class={body}>
					In June 2022, I was able to secure my first professional experience at Trulioo as an
					product design intern where I was responsible for assisting in various features and
					projects throughout our platform. <br/><br/>Within three months, I was able to <span class={label}>convert early to a
					full time position due to great performance reviews and now work primarily in design
					systems</span> at Trulioo.
				</div>
			</div>
		</div>
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
</style>
