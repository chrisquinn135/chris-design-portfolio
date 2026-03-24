<script>
	import Card from '../../components/card.svelte';
	import Footer from '../../components/footer.svelte';
	import SectionLayout from '../../layouts/sectionLayout.svelte';
	import ContainerLayout from '../../layouts/containerLayout.svelte';
	import PageLayout from '../../layouts/pageLayout.svelte';
	import NavigationLayout from '../../layouts/navigationLayout.svelte';
	let videoWrapper =
		'p-2 sm:p-6 bg-surface-+1 flex flex-col justify-center items-center text-text-subdued gap-4 font-light';
	let video = 'w-full shadow-[0_20px_40px_-12px_rgba(50,50,93,0.25)]';
	// font styles
	let body = 'text-text-subdued text-lg font-light';
	// content styles
	let imgPad =
		'p-2 sm:p-6 bg-surface-+1 flex flex-col justify-center items-center text-center text-text-subdued gap-8 font-light';
	// section styles
	let div = 'grid gap-8 sm:grid-cols-2 sm:gap-16';
	let divVertical = 'flex flex-col gap-8';
	let divTitleText = 'flex flex-col gap-4';
	let divGrid = 'grid sm:grid-cols-12 sm:gap-8 gap-2 gap-y-8';
</script>

<svelte:head>
	<title>Christopher Su — State Farm Design System</title>
</svelte:head>
<!-- Body content -->

<PageLayout>
	<div class="hidden sm:block">
		<NavigationLayout>
			<li>
				<a
					href="#overview"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Foundations</a
				>
			</li>
			<li>
				<a
					href="#asset"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Components</a
				>
			</li>
			<li>
				<a
					href="#ideation"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Alignment and community</a
				>
			</li>
			<li>
				<a
					href="#design"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Design tooling</a
				>
			</li>
			<!-- <li>
				<a
					href="#dev"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Implementation</a
				>
			</li>
			<li>
				<a
					href="#launch"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Impact</a
				>
			</li> -->
			<!-- <li>
				<a
					href="#impact"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Future plans</a
				>
			</li> -->
			<!-- <li>
				<a
					href="#retrospection"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Retrospection</a
				>
			</li> -->
		</NavigationLayout>
	</div>
	<div class="justify-items-center">
		<section class="max-w-4xl flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16 w-full" id="top">
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<div class="bg-text-default w-full h-0.5" />
				</div>
				<p class="text-text-subdued text-lg sm:text-xl font-medium">STATE FARM DESIGN SYSTEM</p>
				<h1 class="h1">Modernizing the system for the next generation</h1>
			</div>
			<img src={'/sfds/sfds-hero.png'} alt="hero" class="w-full" />
			<SectionLayout id="brief">
				<div class={divGrid}>
					<div class="flex flex-col gap-4 col-span-12 sm:col-span-6">
						<p class="h3">Challenge</p>
						<p class={body}>
							With more than a century of history, State Farm has evolved through many visual eras.
							Its previous design system, in place for eight years, had become constrained by legacy technology, accessibility gaps, and inconsistent user experiences.
							<br /><br />
							I joined in 2024 at a pivotal moment, as the organization began reimagining its design
							system for the future.
						</p>
					</div>
					<div class="flex flex-col gap-4 col-span-12 sm:col-span-6">
						<p class="h3">Impact</p>
						<p class={body}>
							I led the modernization of design system, redefining foundations, scaling components,
							and pushing the system beyond maintenance mode into a strategic platform for
							consistency, efficiency, and innovation.
							<br /><br />
							Since the release of the new design system, adoption has expanded across product team,
							with ongoing enhancements in accessibility, tooling, and AI integration to ensure it continues
							to evolve alongside the organization’s needs.
						</p>
					</div>
				</div>
				<div class="grid grid-cols-12 sm:gap-8 gap-2 gap-y-8">
						<img src={'/sfds/sfds-0-1.png'} alt="digital alignment issues" class="w-full col-span-6 sm:col-span-3" />
						<img src={'/sfds/sfds-0-2.png'} alt="visual alignment issues" class="w-full col-span-6 sm:col-span-3" />
						<img src={'/sfds/sfds-0-3.png'} alt="visual alignment issues" class="w-full col-span-6 sm:col-span-3" />
						<button on:click={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })} class="cursor-pointer container flex flex-col gap-4 col-span-6 sm:col-span-3">
							<div class="test">
								<div class="box" />
								<img src={'/sfds/sfds-0-4.png'} alt="visual alignment issues" class="w-full col-span-3" />
							</div>
						</button>
						
				</div>
				<div class="bg-border-subdued w-full h-px" />
			</SectionLayout>
			<!-- problem section -->
			<SectionLayout id="overview">
				<div>
					<h2 class="h2"><span class="numericLabel">01</span><br />Foundations</h2>
				</div>
				<ContainerLayout>
					<div class={`${divGrid} items-center`}>
						<div class={`${divTitleText} sm:col-span-7 col-span-12`}>
							<h3 class="h3">Starting with design tokens</h3>
							<p class={body}>
								I led the introduction of design tokens as the single source of truth for UI styling
								across the system. This reduced visual drift, improved design–engineering alignment,
								and created a scalable and consistent visual foundation.
								<br /><br />
								For a deeper look at the implementation strategy, see the dedicated design token case
								study below.
							</p>
							<a
								href="/designToken"
								class="hover h-8 w-fit bg-surface-0 flex gap-2 items-center pr-3 pl-4 py-2 rounded-lg border-2 border-text-default hover:bg-surface-+3 shadow-[0_2px_0_0_rgba(0,0,0,1)]"
							>
								<span class="text-sm font-bold text-text-default">Go to case study</span>
								<img class="w-4 pointer" src="/arrow-right.png" alt="arrow right" />
							</a>
						</div>
						<div class={`${body} sm:col-span-5 col-span-12`}>
							<img src={'/sfds/sfds-1-1.png'} alt="digital alignment issues" class="w-full" />
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3">Systemizing design decisions</h3>
							<div class={body}>
								I took this opportunity to redefine our design language using a systematic,
								math-driven approach. I established scalable rules for foundational elements that
								could be reliably extended across products.
							</div>
						</div>
						<div class={divGrid}>
							<div class={imgPad + ' col-span-12 sm:col-span-6'}>
								<img src={'/sfds/sfds-1-2.png'} alt="visual alignment issues" class="w-full" />
							</div>
							<div class={imgPad + ' col-span-12 sm:col-span-6'}>
								<img src={'/sfds/sfds-1-3.png'} alt="visual alignment issues" class="w-full" />
							</div>
						</div>
						<div class={body}>
							Implementing tokens also unlocked theming and responsiveness across the system. We
							introduced structured token layers to support responsive spacing and typography, as
							well as light and dark themes.
						</div>
						<div class={imgPad}>
							<img src={'/sfds/sfds-1-4.png'} alt="visual alignment issues" class="w-full" />
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3">Building in accessibility</h3>
							<div class={body}>
								Accessibility was built into the system from the foundational level. I embedded
								WCAG-compliant standards into system’s core elements to ensure accessible outcomes
								by default.
							</div>
						</div>
						<div class={imgPad}>
							<img src={'/sfds/sfds-1-5.png'} alt="visual alignment issues" class="w-full" />
						</div>
					</div>
				</ContainerLayout>
				<div class="bg-border-subdued w-full h-px" />
			</SectionLayout>
			<!-- problem section -->
			<SectionLayout id="asset">
				<h2 class="h2"><span class="numericLabel">02</span><br />Components</h2>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3">40+ components redesigned and modernized</h3>
							<div class={body}>
								We rebuilt the component library from the ground up. Each component was audited and
								reviewed with product-area champions to identify inconsistencies, gaps, and
								scalability issues.
								<br /><br />
								Components were re-architected using modern Figma build practices such as nested properties,
								boolean and text variables, and slots, creating flexible, reusable components that reduced
								duplication and improved implementation clarity.
							</div>
						</div>
						<div class={divGrid}>
							<img src={'/sfds/sfds-2-1-1.png'} alt="visual alignment issues" class="w-full col-span-12 sm:col-span-6" />
							<img src={'/sfds/sfds-2-1-2.png'} alt="visual alignment issues" class="w-full col-span-12 sm:col-span-6" />
							<img src={'/sfds/sfds-2-1-3.png'} alt="visual alignment issues" class="w-full col-span-12 sm:col-span-6" />
							<img src={'/sfds/sfds-2-1-4.png'} alt="visual alignment issues" class="w-full col-span-12 sm:col-span-6" />
							<img src={'/sfds/sfds-2-1-5.png'} alt="visual alignment issues" class="w-full col-span-12 sm:col-span-6" />
							<img src={'/sfds/sfds-2-1-6.png'} alt="visual alignment issues" class="w-full col-span-12 sm:col-span-6" />
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3">Introducing data visualization and chat components</h3>
							<div class={body}>
								In addition to modernizing the existing components, we introduced several new
								components around initiatives such as data visualization and chat.
							</div>
						</div>
						<div class={imgPad}>
							<img src={'/sfds/sfds-2-3.png'} alt="visual alignment issues" class="w-full" />
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3">Channeling my inner developer</h3>
							<div class={body}>
								I had the opportunity to directly contributed to the design system codebase,
								submitting merge requests to bug fix and refine components in production.
								<br /><br />
								This hands-on involvement strengthened design-engineer alignment and ensured parity between
								Figma architecture and the live component library.
							</div>
						</div>
						<div class={imgPad}>
							<img src={'/sfds/sfds-2-2.png'} alt="visual alignment issues" class="w-full" />
						</div>
					</div>
				</ContainerLayout>
				<div class="bg-border-subdued w-full h-px gap-2" />
			</SectionLayout>
			<!-- opportunity section -->
			<SectionLayout id="ideation">
				<h2 class="h2"><span class="numericLabel">03</span><br />Alignment and community</h2>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3">Documentation and design system education</h3>
							<div class={body}>
								Design system documentation is the first step to answering and documenting the work
								we were doing. We located on an internal website and provides users with guidance
								necessary to use the system effectively.
								<br /><br />
								Documentation was written and published directly into HTML and Markdown, speeding up
								updates as well as providing cost-saving benefits from not using an external documentation
								platform.
							</div>
						</div>
						<div class={imgPad}>
							<img src={'/sfds/sfds-3-1.png'} alt="three-part naming convention" class="w-full" />
						</div>
						<div class={body}>
							In addition to written documentation, we recorded several tutorial videos on design
							system specific topics such as templating, mode swapping and token usage.
						</div>
						<div class={imgPad}>
							<img src={'/sfds/sfds-3-2.png'} alt="three-part naming convention" class="w-full" />
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3">Office hours and design champions</h3>
							<div class={body}>
								Design systems work is as much about relationships as it is about code or
								components. During SFDS modernization, we held weekly meetings with product
								champions to consult, gather feedback, and ensure the system met real team needs.
								This collaboration drove meaningful outcomes:
								<br /><br />
								<ul class="list-disc list-outside pl-6">
									<li>
										Feedback influenced the Figma build or aesthetic design for <span
											class="text-text-default font-bold">54% of components</span
										>.
									</li>
									<li>
										Feedback shaped functionality or documentation guidance for <span
											class="text-text-default font-bold">71% of components</span
										>.
									</li>
									<li>
										Developed <span class="text-text-default font-bold">10 new pattern guides</span>
										to improve consistency, all informed by product team input.
									</li>
								</ul>
							</div>
						</div>
						<div class={imgPad}>
							<img src={'/sfds/sfds-3-3.png'} alt="three-part naming convention" class="w-full" />
						</div>
						<div class={body}>
							Since the SFDS launch, we’ve expanded engagement with monthly release share-outs and
							bi-monthly office hours, while providing multiple channels for both designers and
							engineers to ask questions, give feedback, and stay aligned.
						</div>
					</div>
				</ContainerLayout>
				<div class="bg-border-subdued w-full h-px gap-2" />
			</SectionLayout>
			<SectionLayout id="design">
				<h2 class="h2"><span class="numericLabel">04</span><br />Design system tooling</h2>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3">Custom Figma plugins</h3>
							<div class={body}>
								I built several custom Figma plugins while at State Farm. These were aggregated into
								the State Farm Design System plugin, which served as the designer’s general toolkit
								when designing products. These functionalities included:
								<br /><br />
								<ul class="list-disc list-outside pl-6">
									<li>
										<span class="text-text-default font-bold">OneX Converter:</span> Migrates styles
										and components from the legacy design system to the State Farm Design System (SFDS),
										reducing manual rework.
									</li>
									<li>
										<span class="text-text-default font-bold">Design Linter:</span> Scans designs to
										ensure correct usage of design tokens, preventing inconsistencies before handoff.
									</li>
									<li>
										<span class="text-text-default font-bold">Color Selector:</span> Helps designers
										quickly apply the correct SFDS color tokens in context, ensuring accessible and consistent
										color usage.
									</li>
								</ul>
							</div>
						</div>
						<div class={videoWrapper}>
							<video
								src="/sfds/converter.mp4"
								type="video/mp4"
								class={video}
								autoplay
								playsinline
								muted
								loop
							/>
							OneX Converter functionality demo
						</div>
						<div class={videoWrapper}>
							<video
								src="/sfds/linter.mp4"
								type="video/mp4"
								class={video}
								autoplay
								playsinline
								muted
								loop
							/>
							Design Linter functionality demo
						</div>
						<div class={videoWrapper}>
							<video
								src="/sfds/selector.mp4"
								type="video/mp4"
								class={video}
								autoplay
								playsinline
								muted
								loop
							/>
							Color Selector functionality demo
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3">Code Connect and MCP agents</h3>
							<div class={body}>
								To prepare SFDS for the AI-driven design landscape, I implemented Code Connect for
								all system components. This mapping enabled automated code generation for engineers
								and integration with Figma’s MCP server, further streamlining handoffs and setting
								the stage for AI-assisted UI development.
							</div>
						</div>
						<div class={imgPad}>
							<img src={'/sfds/sfds-4-1.png'} alt="three-part naming convention" class="w-full" />
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3">Generative UI with Figma Make</h3>
							<div class={body}>
								After Figma’s Make launch at 2025 Config, I explored how generative UI could work
								within SFDS constraints. Initial attempts revealed gaps in design system
								integration, making outputs inconsistent. Through iterative testing and refinement,
								I developed the SFDS Make Template, which is now being piloted across the
								organization to enable reliable, AI-assisted design.
							</div>
						</div>
						<div class={imgPad}>
							<img src={'/sfds/sfds-4-2.png'} alt="three-part naming convention" class="w-full" />
						</div>
					</div>
				</ContainerLayout>
				<div class="bg-border-subdued w-full h-px gap-2" />
			</SectionLayout>

			<div class="flex flex-col gap-8">
				<h2 class="text-2xl sm:text-4xl font-bold">Next projects:</h2>

				<div class="flex flex-col sm:flex-row gap-16 sm:gap-0">
					<Card
						title={'DESIGN TOKENS'}
						desc={'Implementing design tokens at State Farm'}
						slug="/token.png"
						url={'/designToken'}
						key={['May 2024 - October 2024', 'Design systems', 'System design']}
					/>
					<Card
						title={'ASSET MANAGER — CUSTOM FIGMA PLUGIN'}
						desc={'Creating a custom tool for consistent assets across the platform'}
						slug="/assetsq.png"
						url={'/assetmanager'}
						key={['August 2023 - October 2023', 'Product design', 'Software development']}
					/>
				</div>
			</div>
			<Footer />
		</section>
	</div>
	<div class="hidden sm:block">
		<section
			class="sticky top-0 flex flex-col items-end justify-end h-screen pt-6 pb-6 sm:pt-8 sm:pb-16"
		/>
	</div>
</PageLayout>

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

	.text-container {
		position: relative;
		display: inline-block;
		overflow: hidden;
	}

	.text-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: #121212;
		transition: left 0.2s ease-in-out; /* Adjust the transition duration as needed */
		z-index: -1;
	}

	.container:hover .text-container::before {
		left: 0;
	}

	.container:hover .text-container {
		color: white;
		transition: left 0.3s ease-in-out; /* Adjust the transition duration as needed */
	}

	.container:hover .box {
		margin: 0px;
	}

	.box {
		border: 10px solid #121212;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: -10px;
		z-index: 2;
		transition: 0.3s;
	}

	.test {
		position: relative;
		overflow: hidden;
	}

	.imagecont {
		max-width: 100%;
		max-height: 100%;
		width: 100%;

		min-height: 1px;
		display: block;
		transition: 0.3s;
	}
</style>
