<script>
	import Card from '../../components/card.svelte';
	import Footer from '../../components/footer.svelte';
	import SectionLayout from '../../layouts/sectionLayout.svelte';
	import ContainerLayout from '../../layouts/containerLayout.svelte';
	import PageLayout from '../../layouts/pageLayout.svelte';
	import NavigationLayout from '../../layouts/navigationLayout.svelte';
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
	<title>Christopher Su — Design tokens</title>
</svelte:head>
<!-- Body content -->

<PageLayout>
	<div class="hidden sm:block">
		<NavigationLayout>
			<li>
				<a
					href="#overview"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Background</a
				>
			</li>
			<li>
				<a
					href="#asset"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Approach</a
				>
			</li>
			<li>
				<a
					href="#ideation"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Design decisions</a
				>
			</li>
			<li>
				<a
					href="#design"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Validation</a
				>
			</li>
			<li>
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
			</li>
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
		<section id="top" class="max-w-4xl flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16">
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<div class="bg-text-default w-full h-0.5" />
				</div>
				<p class="text-text-subdued text-lg sm:text-xl font-medium">DESIGN TOKENS</p>
				<h1 class="h1">Implementing design tokens at State Farm</h1>
			</div>
			<img src={'/token/token-hero.png'} alt="hero" class="w-full" />
			<SectionLayout id="brief">
				<div class={divGrid}>
					<div class="flex flex-col gap-4 col-span-12 sm:col-span-6">
						<p class="h3">Overview</p>
						<p class={body}>
							I led a multi-team effort to <span class="text-text-default font-bold"
								>create and implement design tokens</span
							>
							throughout the State Farm Design System.
							<br /><br />
							The project aimed to provide a scalable and systematic solution to future-proof the design
							decisions and visual styles used at State Farm.
						</p>
					</div>

					<div class="flex flex-col gap-4 col-span-12 sm:col-span-6">
						<p class="h3">Impact</p>
						<p class={body}>
							Since the release, design tokens have been adopted by both design and engineering
							teams, allowing for <span class="text-text-default font-bold"
								>increased consistency and efficiency</span
							>
							in the organization.
							<br /><br />
							I am currently working on expanding design token education and exploring the introduction
							of multi-brand theming.
						</p>
					</div>
				</div>
				<div class="bg-border-subdued w-full h-px" />
			</SectionLayout>
			<!-- problem section -->
			<SectionLayout id="overview">
				<div>
					<h2 class="h2"><span class="numericLabel">01</span><br />Background</h2>
				</div>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3">Issues with <span>visual alignment</span></h3>
							<div class={body}>
								Visual style alignment has always been an issue at State Farm, both between and
								within product teams. While the previous design system had stylesheets, choosing
								styles was not intuitive and often led to inconsistencies across teams.
							</div>
						</div>
						<img src={'/token/dt-1-1.png'} alt="visual alignment issues" class="w-full" />
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={`${divGrid} items-center`}>
						<div class={`${divTitleText} sm:col-span-7 col-span-12`}>
							<h3 class="h3">Issues with digital alignment</h3>
							<p class={body}>
								There was no standardized approach to styling. Design and engineering frequently
								relied on hardcoded values, leading to digital misalignment and inconsistent UI
								patterns across products.
								<br /><br />
								As a result, foundational changes required manual updates and could take months, if not
								years, to update.
							</p>
						</div>
						<div class={`${body} sm:col-span-5 col-span-12`}>
							<img src={'/token/dt-1-2.png'} alt="digital alignment issues" class="w-full" />
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div
						class="flex flex-col gap-2 bg-surface-+1 p-4 sm:p-8 justify-center items-center text-center"
					>
						<p class="text-lg font-bold text-text-subdued">SYSTEM CHALLENGE</p>
						<p class="h3">
							State Farm needed a scalable approach that enabled <span class="text-[#015886]"
								>intuitive style selection</span
							>
							while aligning design and engineering around a
							<span class="text-[#51733A]">shared source of truth</span>
						</p>
					</div>
				</ContainerLayout>
				<div class="bg-border-subdued w-full h-px" />
			</SectionLayout>
			<!-- problem section -->
			<SectionLayout id="asset">
				<h2 class="h2"><span class="numericLabel">02</span><br />Deciding on an approach</h2>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={`${divTitleText} sm:col-span-7 col-span-12`}>
							<h3 class="h3">Landing on <span>design tokens</span></h3>
							<p class={body}>
								After conducting research, attending workshops, and speaking with industry experts,
								it became clear that design tokens could effectively address our issues.
							</p>
						</div>
						<div class="flex flex-row gap-4 bg-[#E8EEF3] px-3 py-2 sm:px-6 sm:py-3 items-center">
							<img src={'/token/info.png'} alt="info-icon" class="w-[32px]" />
							<p class="text-lg text-text-subdued">
								Design tokens are sets of <span class="text-[#015886] font-bold"
									>design-related decisions</span
								> stored in name-value pairs, representing various design elements such as colors, font
								sizes, or spacing units.
							</p>
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3">Why <span>design tokens?</span></h3>
							<div class={body}>
								Design tokens target both issues, semantic naming structures inform the user when to
								use a token, and platform agnostically allows engineering and design to share the
								same language.
							</div>
						</div>
						<img src={'/token/dt-2-2.png'} alt="visual alignment issues" class="w-full" />
					</div>
				</ContainerLayout>
				<div class="bg-border-subdued w-full h-px gap-2" />
			</SectionLayout>
			<!-- opportunity section -->
			<SectionLayout id="ideation">
				<h2 class="h2">
					<span class="numericLabel">03</span><br />Systemizing the design decisions
				</h2>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={body}>
							I wanted to avoid over-engineering our design tokens, especially since the concept was
							new to State Farm.
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={`${divGrid} items-center`}>
						<div class={`${divTitleText} sm:col-span-7 col-span-12`}>
							<h3 class="h3"><span>Two-layer</span> token structure</h3>
							<p class={body}>
								I determined that a two-layer token structure would be sufficient to ensure clarity
								while still enabling us to provide semantic naming for our users.
								<br /><br />
								Although a three-layer token system could facilitate component tokens and support a multi-brand
								experience, the potential advantages could complicate the system beyond what most teams
								would require.
							</p>
						</div>
						<div class={`sm:col-span-5 col-span-12`}>
							<img
								src={'/token/dt-3-1.png'}
								alt="digital alignment issues"
								class="justify-self-center md:w-3/4"
							/>
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3"><span>Three-part</span> naming convention</h3>
							<div class={body}>
								I focused on creating a naming structure that was easy to understand and scalable
								enough to accommodate future token additions or changes. Each name should clearly
								describe where and when to use each token.
								<br /><br />
								To achieve this, I developed a three-part naming structure consisting of property, role,
								and modifiers.
							</div>
						</div>
						<img src={'/token/dt-3-2.png'} alt="three-part naming convention" class="w-full" />
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={body}>
							With the design token structure in place, I was able to effectively tokenize the
							design decisions within the system.
						</div>
						<div class={imgPad}>
							<img src={'/token/dt-3-3.png'} alt="three-part naming convention" class="w-full" />
						</div>
					</div>
				</ContainerLayout>
				<div class="bg-border-subdued w-full h-px gap-2" />
			</SectionLayout>
			<!-- Design iteration section -->
			<SectionLayout id="design">
				<div>
					<h2 class="h2"><span class="numericLabel">04</span><br />Validating the structure</h2>
				</div>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={body}>
							Once the initial token set was complete, I conducted user research with the practice
							in order to ensure that the design tokens would meet the needs and requirements of the
							product teams within the organization
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={`${divGrid} items-center`}>
						<div class={`${divTitleText} sm:col-span-7 col-span-12`}>
							<h3 class="h3">Simplifying <span>token categories</span></h3>
							<p class={body}>
								Initially, tokens were categorized into very specific use-cases, such as separating
								spacing into padding and gap, despite their scales being identical.
								<br /><br />
								However, testing uncovered that users preferred simplicity during token selection rather
								than having every case abstracted into its own category.
							</p>
						</div>
						<div class={`${body} sm:col-span-5 col-span-12`}>
							<img src={'/token/dt-4-1.png'} alt="digital alignment issues" class="w-full" />
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3">Building in <span>accessible design</span></h3>
							<div class={body}>
								User testing also enabled us to identify edge cases where designers might
								inadvertently create non-accessible designs, particularly involving color contrast.
								<br /><br />
								We were able to catch these instances and ensure that the available color tokens would
								guarantee 100% color contrast compliance, provided they are used in the appropriate use-cases.
							</div>
						</div>
						<div class="grid grid-cols-12 sm:gap-8 gap-2">
							<img
								src={'/token/dt-4-2.png'}
								alt="three-part naming convention"
								class="w-full col-span-6"
							/>
							<img
								src={'/token/dt-4-3.png'}
								alt="three-part naming convention"
								class="w-full col-span-6"
							/>
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={`${divGrid} items-center`}>
						<div class={`${body} sm:col-span-5 col-span-12`}>
							<div class={imgPad}>
								<img src={'/token/dt-4-4.png'} alt="education" class="w-full" />
							</div>
						</div>
						<div class={`${divTitleText} sm:col-span-7 col-span-12`}>
							<h3 class="h3">Building out <span>education</span></h3>
							<p class={body}>
								Because design tokens were a new concept for our designers, we received numerous
								requests for in-depth token education.
								<br /><br />
								I led several educational initiatives, including creating recorded Figma demos, hosting
								office hours and share sessions, and developing tools to assist designers in selecting
								tokens.
							</p>
						</div>
					</div>
				</ContainerLayout>
				<div class="bg-border-subdued w-full h-px gap-2" />
			</SectionLayout>
			<!-- development section -->
			<SectionLayout id="dev">
				<h2 class="h2"><span class="numericLabel">05</span><br />Implementation on the backend</h2>
				<ContainerLayout>
					<div class={`${divGrid} items-center`}>
						<div class={`${divTitleText} col-span-6`}>
							<h3 class="h3"><span>Design</span> implementation</h3>
							<p class={body}>
								The Gitlab repository is synchronized with the Figma variables via a custom Figma
								plugin.
							</p>
						</div>
						<div class={`${divTitleText} col-span-6`}>
							<h3 class="h3"><span>Engineering</span> implementation</h3>
							<p class={body}>
								The tokens are processed and packaged using a CD/CI process that utilizes Style
								dictionary to convert JSON to a usable format.
							</p>
						</div>
					</div>
					<div class={`${divGrid} items-center`}>
						<div class={`${divTitleText} col-span-6`}>
							<img src={'/token/dt-5-1.png'} alt="design token implementation" class="w-full" />
						</div>
						<div class={`${divTitleText} col-span-6`}>
							<img src={'/token/dt-5-2.png'} alt="design token implementation" class="w-full" />
						</div>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={divTitleText}>
							<h3 class="h3">
								Managing a <span>single source of truth</span> across changes
							</h3>
							<div class={body}>
								I worked collaboratively with our engineers to develop a custom Figma plugin that
								helps maintain GitLab as the single source of truth.
								<br /><br />
								The plugin can detect any discrepancies between the tokens JSON file and our variable
								set within Figma. Once a difference is identified, the user has the option to either
								revert the change or push the update to GitLab, where it will trigger a pipeline to update
								the tokens accordingly.
							</div>
						</div>
						<div class={imgPad}>
							<img src={'/token/dt-5-3.png'} alt="token manager" class="w-full" />
						</div>
					</div>
				</ContainerLayout>
				<div class="bg-border-subdued w-full h-px" />
			</SectionLayout>
			<!-- Final designs section -->
			<SectionLayout id="launch">
				<h2 class="h2"><span class="numericLabel">06</span><br />Impact</h2>
				<ContainerLayout>
					<div class={divVertical}>
						<div class={`${divGrid} items-center`}>
							<div class={`${divTitleText} col-span-6`}>
								<h3 class="h3">
									Improved cross-team alignment through the usage of a shared language
								</h3>
								<p class={body}>
									By standardizing the way tokens are defined and implemented, teams can easily
									collaborate, ensuring that design choices are cohesive and aligned with brand
									standards.
								</p>
							</div>
							<div class={`${divTitleText} col-span-6`}>
								<h3 class="h3">Time required to change design styles reduced by 93%</h3>
								<p class={body}>
									The time it takes to change style values at State Farm has been drastically
									reduced from several months to just a few minutes.
								</p>
							</div>
						</div>
						<div class={imgPad}>
							<img src={'/token/dt-6-1.png'} alt="token manager" class="w-full" />
						</div>
					</div>
				</ContainerLayout>
				<div class="bg-border-subdued w-full h-px gap-2" />
			</SectionLayout>

			<div class="flex flex-col gap-8">
				<h2 class="text-2xl sm:text-4xl font-bold">Next projects:</h2>

				<div class="flex flex-col sm:flex-row gap-16 sm:gap-0">
					<Card
						title={'STATE FARM DESIGN SYSTEM'}
						desc={'Modernizing the system for the next generation'}
						slug="/sfds.png"
						url={'/sfds'}
						key={['February 2024 - Present', 'Design systems']}
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
