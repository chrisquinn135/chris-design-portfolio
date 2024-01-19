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
	let code = 'bg-surface-+1 py-1 px-2 text-text-default text-sm';
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
	<title>Christopher Su — Trulioo</title>
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
				TRULIOO — LINK LEADS MANAGER
			</p>
			<h1 class="h1">Designing the link managment system to improve lead conversion</h1>
		</div>

		<img src="/lead/hero.png" alt="modal design rational" />

		<SectionLayout id="brief">
			<div class={div}>
				<div class="flex flex-col gap-8 sm:gap-16">
					<div>
						<p class={label}>Timeline</p>
						<p class={body}>2 months, shipped and launched</p>
					</div>
					<div>
						<p class={label}>Team</p>
						<div class={body}>
							<p>1 Product Manager</p>
							<p>1 Designer</p>
							<p>2 Developers</p>
						</div>
					</div>
				</div>
				<div>
					<p class={label}>Summary</p>
					<p class={body}>
						The Trulioo platform is utilized for creating workflows and overseeing consumer leads
						generated through these workflows.
						<br /><br />
						I designed a new linking flow that allows customers to link individual leads together in
						their client manager. By linking two leads together, they will appear on each other’s lead
						view and provide more context and details for lead conversion.
						<br /><br />
						Please reach out for the extended case study.
					</p>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
			<h2 class="h1 sm:text-center ">Highlights at a glance</h2>
			<div class="flex flex-col gap-4">
				<div class={videoWrapper}>
					A high-level overview of all leads linked with the current lead view.
					<img src="/lead/home.png" alt="modal design rational" class={video} />
				</div>
			</div>
			<div class="flex flex-col gap-8">
				<div class={img}>
					Customers have the choice to either link an existing lead or create a new lead and link
					it.
					<video
						src="/lead/exist.mp4"
						type="video/mp4"
						class={video}
						autoplay
						playsinline
						muted
						loop
					/>
					<video
						src="/lead/new-lead.mp4"
						type="video/mp4"
						class={video}
						autoplay
						playsinline
						muted
						loop
					/>
				</div>
			</div>
			<div class="flex flex-col gap-8">
				<div class={videoWrapper}>
					Manage links by changing relationships, removing links or navigating to linked lead views.
					<video
						src="/lead/editting.mp4"
						type="video/mp4"
						class={video}
						autoplay
						playsinline
						muted
						loop
					/>
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
						<p class={label}>Feature design experience</p>
						<p>
							Working on this project gave me concerte experience in feature design and working with
							shifting priorities and timelines. I was able to build great relations with both
							developers and the project manager and we were able to ship a great product together in the
							end.
						</p>
					</div>
				</div>
				<div class="flex flex-row gap-4">
					<div class="w-0.5 bg-border-subdued h-full" />
					<div class={body}>
						<p class={label}>Working with the design system</p>
						<p>
							In previous projects, I worked primarily on design system-scoped projects. During this
							project, I was able to work first-hand with the design system I was building. This
							allowed to me to gain valuable insights into design system's components and
							interactions, fostering a deeper understanding of its overall architecture and
							usability.
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
