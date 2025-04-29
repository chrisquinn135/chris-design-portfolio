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
	<title>Christopher Su — State Farm Design System Plugin</title>
</svelte:head>
<!-- Body content -->

<PageLayout>
	<div class="hidden sm:block" />
	<section class="flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16" id="top">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<div class="bg-text-default w-full h-0.5" />
			</div>
			<p class="text-text-subdued text-base sm:text-xl font-medium">
				STATE FARM DESIGN SYSTEM PLUGIN
			</p>
			<h1 class="h1">Creating a multi-functionality design tool</h1>
		</div>

		<img src="/sfds/thumbnail.png" alt="modal design rational" />

		<SectionLayout id="brief">
			<div class={div}>
				<div class="flex flex-col gap-8 sm:gap-16">
					<div>
						<p class={label}>Timeline</p>
						<p class={body}>8 months, ongoing maintainence</p>
					</div>
					<div>
						<p class={label}>Figma functionalities</p>
						<div class={body}>
							<p>OneX Converter</p>
							<p>Component Code Generation</p>
							<p>Design Linter</p>
							<p>Color Selector</p>
						</div>
					</div>
				</div>
				<div>
					<p class={label}>Summary</p>
					<p class={body}>
						The State Farm Design System plugin is a multi-functionality design tool designed to
						help streamline our processes, improve design quality, and boost overall productivity.
						<br /><br />
						I led both the design and development efforts for this project, collaborating with leadership
						and design organization to ensure product fit. I conducted audits, facilitated workshops
						and led the visual, interaction and user flow tracks all while leading the technical implementation
						of the tool from conception to launch.
						<br /><br />
						The following case study highlights the major functionalities that I designed and built into
						the plugin.
					</p>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
			<div class="flex flex-col gap-8">
				<h2 class="h1 sm:text-center">OneX Converter</h2>
				<p class={body + ' text-center'}>
					The OneX Converter converts styles and components from the previous design system (OneX)
					to the State Farm Design System (SFDS). The plugin will parse the page for any components
					and styles and automatically instance swap components while maintaining overrides such as
					text and color as best as possible.
				</p>
				<div class="flex flex-col gap-4">
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
					</div>
				</div>
			</div>
			<div class="flex flex-col gap-8">
				<h2 class="h1 sm:text-center">Component Code Generation</h2>
				<p class={body + ' text-center'}>
					The component code generation detects if a SFDS component is selected and generates the
					HTML, CSS and SCSS code for the component.
				</p>
				<div class="flex flex-col gap-4">
					<div class={videoWrapper}>
						<video
							src="/sfds/codegen.mp4"
							type="video/mp4"
							class={video}
							autoplay
							playsinline
							muted
							loop
						/>
					</div>
				</div>
			</div>
			<div class="flex flex-col gap-8">
				<h2 class="h1 sm:text-center">Design Linter</h2>
				<p class={body + ' text-center'}>
					The design linter will scan your designs and check if you’re using the right design
					tokens.
				</p>
				<div class="flex flex-col gap-4">
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
					</div>
				</div>
			</div>
			<div class="flex flex-col gap-8">
				<h2 class="h1 sm:text-center">Color Selector</h2>
				<p class={body + ' text-center'}>
					The color selector is a tool to help choose what SFDS color token to use in specific
					instances.
				</p>
				<div class="flex flex-col gap-4">
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
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<!-- Impact section -->
		<SectionLayout id="retrospection">
			<h2 class="h1">Reflections:</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-16">
				<div class="flex flex-row gap-4">
					<div class="w-0.5 bg-border-subdued h-full" />
					<div class={body}>
						<p class={label}>Bridging design and development</p>
						<p>
							Building the in-house plugin was a deep dive into bridging the gap between design and
							development. Seeing designers use the code generator and linter to save hours of
							manual work validated the need for tools that anticipate real-world workflows. I
							learned that even small UX decisions—like where to place a button or how to structure
							a dropdown—can make or break adoption.
						</p>
					</div>
				</div>
				<div class="flex flex-row gap-4">
					<div class="w-0.5 bg-border-subdued h-full" />
					<div class={body}>
						<p class={label}>Structuring feedback loops</p>
						<p>
							If I could revisit this project, I’d invest more time upfront in refining our feedback loop—office hours, structured user
							testing earlier in the process would have surfaced edge cases we didn’t catch until
							later. The next iteration would focus on extending plugin functionality to scale
							across multiple teams and ensure long-term maintainability.
						</p>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<div class="flex flex-col gap-8">
			<h2 class="text-2xl sm:text-4xl font-bold">Next projects:</h2>

			<div class="flex flex-col sm:flex-row gap-16 sm:gap-0">
				<Card
					title={'ASSET MANAGER — CUSTOM FIGMA PLUGIN'}
					desc={'Creating a Custom Tool for Consistent Assets Across the Platform'}
					slug="/assetsq.png"
					url={'/assetmanager'}
					key={['Figma Plugin APIs', 'Product design']}
				/>
				<Card
					title={'ACCESSIBILITY IN THE DESIGN SYSTEM'}
					desc={'Redesigning Components to Incorporate Accessible Design'}
					slug="/accsq.png"
					url={'/accessibility'}
					key={['Design systems', 'Accessibility']}
				/>
			</div>
		</div>
		<Footer />
	</section>
	<div class="hidden sm:block">
		<section
			class="sticky top-0 flex flex-col items-end justify-end h-screen pt-6 pb-6 sm:pt-8 sm:pb-16"
		/>
	</div>
</PageLayout>
