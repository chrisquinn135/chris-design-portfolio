<script>
	import Card from '../../components/card.svelte';
	import Footer from '../../components/footer.svelte';
	import SectionLayout from '../../layouts/sectionLayout.svelte';
	import ContainerLayout from '../../layouts/containerLayout.svelte';
	import PageLayout from '../../layouts/pageLayout.svelte';
	import NavigationLayout from '../../layouts/navigationLayout.svelte';
	// font styles
	let h3 = 'text-text-default text-lg font-bold sm:text-2xl';
	let label = 'text-text-default font-bold text-base';
	let body = 'text-text-subdued text-base font-light';
	let numfoot = 'text-text-default text-sm font-bold';
	let footer = 'text-text-subdued text-sm font-light';
	// content styles
	// content styles
	let videoWrapper =
		'p-2 sm:p-8 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-text-subdued gap-8 font-light border border-border-subdued';
	let video = 'w-full shadow-[0_20px_40px_-12px_rgba(50,50,93,0.25)] rounded-lg';
	let img =
		'p-2 sm:p-8 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-center text-text-subdued gap-8 font-light border border-border-subdued';
	// 'p-2 sm:p-8 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-text-subdued gap-8 font-light border border-2 border-text-default shadow-[0_3px_0_0_rgba(0,0,0,1)]';
	let imgPad =
		'p-2 pb-1 sm:p-8 sm:pb-4 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-center text-text-subdued gap-8 font-light border border-border-subdued';
	// section styles
	let div = 'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16';
</script>

<svelte:head>
	<title>Christopher Su — Accessibility in the Design System</title>
</svelte:head>
<!-- Body content -->
<PageLayout>
	<div class="hidden sm:block">
		<NavigationLayout>
			<li>
				<a
					href="#overview"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Overview</a
				>
			</li>
			<li>
				<a
					href="#audit"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Audit</a
				>
			</li>
			<li>
				<a
					href="#opportunity"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Strategy</a
				>
			</li>
			<li>
				<a
					href="#win"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Sprint one</a
				>
			</li>
			<li>
				<a
					href="#wcag"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Sprint two</a
				>
			</li>
			<li>
				<a
					href="#impact"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Impact</a
				>
			</li>
			<li>
				<a
					href="#retro"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Retrospection</a
				>
			</li>
		</NavigationLayout>
	</div>

	<section id="top" class="flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<div class="bg-text-default w-full h-0.5" />
			</div>
			<h1 class="h1">Accessibility in the Design System</h1>
			<h2 class="text-text-subdued text-lg sm:text-2xl">
				Redesigning Components to Incorporate Accessible Design in Trulioo
			</h2>
		</div>
		<img src={'/accessibility/hero.webp'} alt="hero" class="w-full" />
		<SectionLayout id="brief">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16">
				<div class="flex flex-col gap-8 sm:gap-16">
					<div>
						<p class={label}>Timeline</p>
						<p class={body}>May 2023 - August 2023</p>
					</div>
					<div>
						<p class={label}>Skills</p>
						<div class={body}>
							<p>Accessibility</p>
							<p>Design systems</p>
							<p>Design strategy</p>
						</div>
					</div>
				</div>
				<div>
					<p class={label}>Summary</p>
					<p class={body}>
						The Trulioo Design System aims to meet <a
							class="text-action-interactive-default text-blue-50 hover:text-action-interactive-hover underline"
							href="https://www.w3.org/TR/WCAG21/"
							target="_blank">WCAG 2.1 AA</a
						>
						compliance at minimum for all components. <br /><br />I was the driver for accessibility
						for our design system and led research and implementation of accessibility compliance
						into the design system.
					</p>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</SectionLayout>
		<!-- problem section -->
		<SectionLayout id="overview">
			<div>
				<h2 class="h1">01<br />Overview</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>The problem</h3>
					<div class={body}>
						Trulioo is known as a global identity solutions expert, accurately verifying digital
						identity around the world. Despite this, their platform does not provide adequate
						accessibility adherence, inhibiting their ability to capture the global audience and
						leaving them open to potential accessibility-related lawsuits.
					</div>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>The goal</h3>
					<div class={body}>
						Make accessibility a core foundation of all Trulioo products by incorporating
						accessibility considerations at all points of product development, from design to
						production.
					</div>
				</div>
				<div class={videoWrapper}>
					<p>WCAG2.1 guidelines</p>
					<img src="/accessibility/wcag.webp" alt="WCAG2.1 webpage" class={video} />
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px" />
		</SectionLayout>
		<!-- exploration section -->
		<SectionLayout id="audit">
			<div>
				<h2 class="h1">02<br />Auditing the design system and platform</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>What we inherited</h3>
					<div class={body}>
						The current design system was not built with accessibility in mind as we found even <span
							class={label}>basic components failed WCAG 2.1 level A compliance.</span
						><br /><br />
						Furthermore, upon a third-party compliance audit of the Trulioo platform, we found that
						<span class={label}
							>our platform was non-compliant with WCAG 2.1 level AA success criteria.
						</span>
					</div>
				</div>
				<ul
					class="p-4 sm:p-8 bg-surface-+1 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 justify-between p-16 text-2xl sm:text-4xl font-bold border border-border-subdued"
				>
					<li class="flex flex-col text-center gap-2">
						<p>56%</p>
						<p class="text-xl text-text-subdued font-normal">
							Components with insufficient color contrast
						</p>
					</li>
					<li class="flex flex-col text-center gap-2">
						<p>81%</p>
						<p class="text-xl text-text-subdued font-normal">Components with insufficient markup</p>
					</li>
					<li class="flex flex-col text-center gap-2">
						<p>40%</p>
						<p class="text-xl text-text-subdued font-normal">
							Components with insufficient interactive states
						</p>
					</li>
				</ul>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<!-- opportunity section -->
		<SectionLayout id="opportunity">
			<div>
				<h2 class="h1">03<br />Strategic Planning</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Defining our north star</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							Before any work was done on either the development or design-side, I collaborated with
							stakeholders to determine key priorities as well as how we would measure the success
							of the project.
							<br /><br />
							We came away from these discussions with two key insights:
						</p>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Emphasis on user impact and high usage criteria</p>
							<p class={body}>
								Prioritization for accessibility categories will be based on perceived user impact
								in addition to the amount of times users may use or interact with categories daily.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>WCAG2.1 level AA compliance</p>
							<p class={body}>
								Success for this project will be measured by component compliance with the WCAG2.1
								level AA guidelines.
							</p>
						</div>
					</div>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Mapping out priorities</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							I analyzed the results of our platform audit and conducted research of
							industry-standard design systems in order to determine which categories of
							accessibility improvements to include within the initial accessibility improvements.
							<br /><br />
							Once the categories were finalized, I created a prioritization matrix and measured each
							category by its potential user impact and usage rate daily.
						</p>
					</div>
				</div>
				<div class={videoWrapper}>
					<p>Prioritization Matrix</p>
					<img
						src="/accessibility/matrix.webp"
						alt="Implementation of color system"
						class="rounded-lg w-full px-8"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Creating a game plan</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							Once the categories were broken down by priority, I was able to divide the improvement
							areas in two sprints.<br /><br />
							This allowed me to focus my attention on fewer categories at one time, improving quality
							of work in addition to gaining the ability to utilize any insights gained during sprint
							one on sprint two!
						</p>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Big wins with immediate user impact</p>
							<p class={body}>These include color contrast, interactive states, and target area.</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Screen reader and keyboard functionalities</p>
							<p class={body}>
								These include keyboard traversal, focus order, and component markup.
							</p>
						</div>
					</div>
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<!-- Design iteration section -->
		<SectionLayout id="win">
			<div>
				<h2 class="h1">04<br />Big wins with immediate user impact</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Color contrast</h3>
					<div class={body}>
						Components have been updated to WCAG 2.1 level AA color contrast compliance in two
						steps. <br /><br />First, I implemented a new color system that incorporated semantic
						naming conventions. Each color was tested for accessibility compliance within its
						specific use case. <br /><br />Next, I attached the new color system to every component,
						ensuring that all components complied with color contrast accessibility.
					</div>
				</div>
				<div class={imgPad}>
					<p>Implementation of color system</p>
					<img
						src="/accessibility/color-sys.webp"
						alt="Implementation of color system"
						class="rounded-lg w-full"
					/>
				</div>
				<div class={videoWrapper}>
					<p>Contrast compliant components</p>

					<img
						src="/accessibility/contrast-compliant.png"
						alt="Contrast compliant components"
						class="rounded-lg w-full px-8"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Interactive states</h3>
					<div class={body}>
						Existing interactive states for all interactive components have been expanded to
						include, but not limited to, focus, hover, active and error states.<br /><br />
						A notable change was the overhaul of our focus indicator to a two-color focus indicator.
					</div>
				</div>
				<div class={videoWrapper}>
					<p>Focus state addition and modification</p>
					<img
						src="/accessibility/focus-state.png"
						alt="Focus state addition and modification"
						class="rounded-lg w-full px-8"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Target area</h3>
					<div class={body}>
						I created in-depth documentation on how to incorporate proper target area size to adhere
						to WCAG 2.1 level AA compliance.
					</div>
				</div>
				<div class={videoWrapper}>
					<p>Button target area</p>
					<img
						src="/accessibility/target-area.png"
						alt="Button target area"
						class="rounded-lg w-full px-8"
					/>
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<!-- development section -->
		<SectionLayout id="wcag">
			<div>
				<h2 class="h1">05<br />Screen reader and keyboard functionalities</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Keyboard traversal</h3>
					<div class={body}>
						Component documentation now includes guidelines on all available keyboard traversal
						options within a given component. Users can now navigate through components regardless
						of disability or circumstance.
					</div>
				</div>
				<div class={videoWrapper}>
					<p>Modal keyboard traversal guidelines</p>
					<img
						src="/accessibility/keyboard-traversal.png"
						alt="Modal keyboard traversal guidelines"
						class={video}
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Focus order</h3>
					<div class={body}>
						Component documentation now includes guidelines on initial focus and focus order between
						elements.
					</div>
				</div>
				<div class={videoWrapper}>
					<p>Modal focus order</p>
					<img
						src="/accessibility/focus-order.webp"
						alt="Modal focus order"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Component markup</h3>
					<div class={body}>
						Component documentation now includes guidelines on all required markup and ARIA tags.
						Components are now accessible via screen readers and give additional context of content
						they are reading.
					</div>
				</div>
				<div class={videoWrapper}>
					<p>Dropdown markup</p>
					<img src="/accessibility/markup.png" alt="Dropdown markup" class="rounded-lg w-full" />
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px" />
		</SectionLayout>
		<!-- Impact section -->
		<SectionLayout id="impact">
			<div>
				<h2 class="h1">06<br />Impact and what's next</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Project impact</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							My contributions to improving the accessibility of our design system has led to <span
								class={label}>80% improvement in WCAG2.1 level AA and AAA compliance.</span
							> This has led to a more inclusive user experience and positively impacted our brand's
							reputation for being committed to accessibility and usability.
						</p>
					</div>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Next steps...</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							Here are a few things to look forward to in future steps:
						</p>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Platform level accessible design</p>
							<p class={body}>
								While the initial implementation of accessible design was targeted on the component
							level, future steps will target implementation on a product and platform level. This requires a lot of cross-functional team collaboration and is the next step on the horizon.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Accessibility testing processes</p>
							<p class={body}>
								Currently, there are no provisions on accessibility testing within both designer and developer processes. A future project could be see the implementation of tools like <a href='https://storybook.js.org/addons/@storybook/addon-a11y' class="text-action-interactive-default underline text-blue-50 hover:text-action-interactive-hover" target='_blank'>storybook-addon-a11y
								</a> within Storybook on the developer side or improved checks for accessibility on the designer side.
							</p>
						</div>
					</div>
				</div>
			</ContainerLayout>

			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<!-- Impact section -->
		<SectionLayout id="retro">
			<div>
				<h2 class="h1">07<br />Retrospection</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>What I learned</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							During this project, I've had the invaluable opportunity to expand my skill set and
							deepen my understanding of various aspects of accessible design. Accessibility
							shouldn't be an afterthought when designing products, it should be a <span
								class={label}>core foundation that is taken in consideration from the start</span
							>. I'm excited to take these principles into every project I work on from now on!
						</p>
					</div>
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<div class="flex flex-col gap-8">
			<h2 class="text-2xl sm:text-4xl font-bold">Next project:</h2>
			<Card
				title={'Asset Manager — Custom Figma Plugin'}
				desc={'A Custom Tool for Consistent Assets Across the Platform'}
				slug="/asset-hero.avif"
				t1={'Product Design'}
				t2={'Design Tooling'}
				url={'/assetmanager'}
			/>
		</div>
		<Footer />
	</section>

	<div class="hidden sm:block">
		<section
			class="sticky top-0 flex flex-col items-end justify-end h-screen pt-6 pb-6 sm:pt-8 sm:pb-16"
		/>
	</div>
</PageLayout>

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
