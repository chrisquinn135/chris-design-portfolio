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
					>Overview</a
				>
			</li>
			<li>
				<a
					href="#asset"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Research</a
				>
			</li>
			<li>
				<a
					href="#ideation"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Approach</a
				>
			</li>
			<li>
				<a
					href="#design"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Testing</a
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
	<section class="flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16" id="top">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<div class="bg-text-default w-full h-0.5" />
			</div>
			<p class="text-text-subdued text-base sm:text-xl font-medium">Design tokens</p>
			<h1 class="h1">Implementing design tokens at State Farm</h1>
		</div>
		<img src={'/token/hero.png'} alt="hero" class="rounded-lg w-full" />
		<SectionLayout id="brief">
			<div class={div}>
				<div class="flex flex-col gap-8 sm:gap-16">
					<div>
						<p class={label}>Timeline</p>
						<p class={body}>April 2024 - September 2024</p>
					</div>
					<div>
						<p class={label}>Skills</p>
						<div class={body}>
							<p>Design tokens</p>
							<p>Systems thinking</p>
							<p>Workshop facilitation</p>
							<p>Figma plugin APIs</p>
						</div>
					</div>
				</div>

				<div>
					<p class={label}>Summary</p>
					<p class={body}>
						I led a multi-team effort to create and implement design tokens within the State Farm
						Design System. The project aimed to provide a scalable and systematic solution to
						future-proof the visual styles used at State Farm. This included facilitating research
						and workshops, creating a flexible token structure, and developing a token manager
						plugin in collaboration with our development team.
						<br /><br />
						Since the release, design tokens have been adopted by both design and engineering teams,
						allowing for increased consistency and efficiency in the organization. I am currently working
						on expanding design token education and exploring the introduction of multi-brand theming.
					</p>
				</div>
			</div>
			<!-- <div class={videoWrapper}>
				<p class="text-text-default text-lg sm:text-2xl text-center">
					Swap assets directly onto the canvas — providing direct integration into designer
					workflows.
				</p>
				<video
					src="/asset/swap-assets.mp4"
					type="video/mp4"
					class={video}
					autoplay
					playsinline
					muted
					loop
				/>
				<img
					src="/asset/asset-hero2.png"
					alt="User journey map and related problem origins"
					class="rounded-lg w-full"
				/>
			</div> -->
			<div class="bg-border-subdued w-full h-px" />
		</SectionLayout>
		<!-- problem section -->
		<SectionLayout id="overview">
			<div>
				<h2 class="h1">01<br />Overview</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>The context</h3>
					<div class={body}>
						Visual style alignment has long been a challenge at State Farm, affecting both
						collaboration between product teams and consistency within individual teams. The
						previous design system included stylesheets, however, the selecting styles was not
						intuitive, resulting in inconsistencies across various teams. Furthermore, engineering
						teams frequently resorted to hardcoding values when implementing designs, which meant
						that any foundational changes to the system could take months, if not years, to roll
						out.
						<br /><br />
						It was clear that we needed a solution that would facilitate
						intuitive style selection
						and enable both design and engineering teams to work from a
						unified source of truth.
					</div>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Why design tokens?</h3>
					<div class={body}>
						After some preliminary research, it became clear that design tokens could effectively
						address this issue. Design tokens are sets of design-related decisions stored in
						name-value pairs, representing various design elements such as colors, font sizes, or
						spacing units.
						<br /><br />
						The key advantage of these design tokens is that they allow for semantic naming, which enhances
						clarity and understanding when selecting styles, and they are platform agnostic. This means
						that both design and engineering can utilize a shared language, ensuring consistency throughout
						the development process.
					</div>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>The goal</h3>
					<div class={body}>
						<span class={label}>1.</span> Develop a flexible and future-proof design token structure
						that aligns with the State Farm visual style
						<br /><br />
						<span class={label}>2.</span> Implement design tokens throughout the organization to ensure
						consistency and efficiency in design and development processes
					</div>
				</div>
				
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px" />
		</SectionLayout>
		<!-- problem section -->
		<SectionLayout id="asset">
			<div>
				<h2 class="h1">02 <br />Initial exploration</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>What we started with</h3>
					<div class={body}>
						Before jumping in to everything tokens, I first needed to understand how styles were
						utilized at State Farm and identify the shortcomings of the existing system.
					</div>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Attending workshops and building a strong base</h3>
					<p class={body}>
						I also attended various workshops and engaged with industry-leading experts to deepen my
						knowledge in the field.
						<br /><br />
						Once I had a solid understanding of design tokens, I was able to evaluate their potential
						impact on our design system and how they could be structured to promote clarity and ease
						of use across teams.
					</p>
				</div>
				<div class={img}>
					<img
						src="/token/industry.png"
						alt="Industry notes"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<!-- opportunity section -->
		<SectionLayout id="ideation">
			<div>
				<h2 class="h1">03<br />Crafting an approach</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Two-layer token structure</h3>
					<p class={body}>
						We wanted to avoid over-engineering our design tokens, especially since the concept was new to State Farm. Although a three-layer token system could facilitate component tokens and support a multi-brand experience, the potential advantages could complicate the system beyond what most teams would require.
						<br/><br/>
						Instead, we determined that a two-layer token system would be sufficient to ensure clarity while still enabling us to provide semantic naming for our users.
					</p>
				</div>
				<div class={img}>
					<img
						src="/token/layer.png"
						alt="Token layer structure"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Three-part naming convention</h3>
					<div class={body}>
						We wanted to create a token naming structure that was easy to understand and flexible enough to accommodate future token additions or changes. Each name should clearly describe how and where to use the corresponding token.
						<br/><br/>
						To achieve this, I developed a three-part naming structure consisting of property, role, and modifiers.
					</div>
				</div>
				<div class={img}>
					<img
						src="/token/naming.png"
						alt="Token naming structure"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Creating the initial token set</h3>
					<div class={body}>
						With the design token structure in place, I was able to effectively name and categorize the stylesheets within State Farm.
					</div>
				</div>
				<div class={img}>
					<img
						src="/token/initialProposal.png"
						alt="Initial proposal"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<!-- Design iteration section -->
		<SectionLayout id="design">
			<div>
				<h2 class="h1">04<br />Validating the proposal</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>User testing</h3>
					<div class={body}>
						Once the initial proposal was complete, I conducted workshops and collaborative sessions to ensure that the token set would meet the diverse needs and requirements of the various product teams within the organization.					</div>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Simplifying token categories</h3>
					<div class={body}>
						Initially, we categorized token use cases into very specific instances, such as separating spacing into padding and gap, despite their scales being identical. However, we discovered that users preferred simplicity in token selection rather than having every case abstracted into its own category. 
						<br/><br/>
						In this case, we decided to merge padding and gap into a single category called "spacing."

					</div>
				</div>
				<div class={imgPad}>
					<img
						src="/token/merging.png"
						alt="Merging categories"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Baking in accessible design</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							User testing also enabled us to identify edge cases where designers might inadvertently create non-accessible designs, particularly concerning color contrast. 
							<br/><br/>
							We were able to catch these instances and ensure that the available color tokens would guarantee 100% color contrast compliance, provided they are used in the appropriate use-cases.
						</p>
					</div>
				</div>
				<div class={imgPad}>
					<p>Branded text on white and accent backgrounds</p>
					<img
						src="/token/contrast.png"
						alt="Branded text on white and accent backgrounds"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Planning future education resources</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							Because design tokens were a new concept for our designers, we received numerous requests for in-depth token education. 
							<br/><br/>
							We have added this to our immediate backlog and have initiated several educational initiatives, including creating recorded Figma demos, hosting office hours and share sessions, and developing tools to assist designers in selecting tokens.	
						</p>
					</div>
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<!-- development section -->
		<SectionLayout id="dev">
			<div>
				<h2 class="h1">05<br />Implementation</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Design token storage</h3>
					<div class={body}>
						Once testing was complete, I collaborated with our engineering team to implement the design tokens within our system. 
						<br/><br/>
						The tokens are stored in GitLab, where they are translated into usable formats for both designers and engineers.
					</div>
				</div>
				<div class={imgPad}>
					<img
						src="/token/gitlab.png"
						alt="Gitlab structure"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Maintaining a single source of truth</h3>
					<div class={body}>
						We developed a token manager in Figma to maintain GitLab as the single source of truth. 
						<br/><br/>
						The plugin can detect any discrepancies between the tokens JSON file and our variable set within Figma. Once a difference is identified, we have the option to either revert the change or push the update to GitLab, where it will trigger a pipeline to update the tokens accordingly.
					</div>
				</div>
				<div class={img}>
					<img
						src="/token/tokenManager.png"
						alt="Token manager"
						class="rounded-lg w-full"
					/>
				</div>		
				<div class={img}>
					<p>Managing a source of truth via a Figma plugin</p>
					<img
						src="/token/tokenPlugin.png"
						alt="Token manager"
						class="rounded-lg w-full"
					/>
				</div>		
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px" />
		</SectionLayout>
		<!-- Final designs section -->
		<SectionLayout id="launch">
			<div>
				<h2 class="h1">06<br />Impact and future plans</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Improved cross-team alignment</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							Semantic tokens have enabled all product teams to utilize design tokens in a consistent manner. By standardizing the way tokens are defined and implemented, teams can easily collaborate, ensuring that design choices are both cohesive and aligned with brand standards.
						</p>
					</div>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Usage of a shared language</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							Design and development now share a unified language.  Because of this, the handoff from design to implementation has been significantly clarified, leading to a marked reduction in design QA time. This improved clarity not only streamlines the development process but also minimizes misunderstandings, ensuring that the final product closely aligns with the original design vision. 						</p>
					</div>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Reduced time to change styles</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							The time it takes to change style values at State Farm has been drastically reduced from several months to just a few minutes. This allows designers and developers to quickly update visual styles across the entire application ecosystem whenever updates are required, ensuring a more agile response to branding needs and accessibility feedback.						</p>
					</div>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Future plans</h3>
					<div class="flex flex-col gap-4">
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Theming and revisiting component tokens</p>
							<p class={body}>
								Our future plans include multi-brand theming and revisiting component tokens. By implementing theming, we can easily switch between different visual styles, making our products more adaptable to specific audience needs or specific branding initiatives.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Building out token education</p>
							<p class={body}>
								With the release of design tokens within the system, we are simultaneously enhancing our educational efforts surrounding their usage. I have taken an active role in this initiative by creating demo videos, conducting outreach workshops, and developing comprehensive documentation for design tokens. 
							</p>
						</div>
						
					</div>
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		
		<div class="flex flex-col gap-8">
			<h2 class="text-2xl sm:text-4xl font-bold">Next projects:</h2>

			<div class="flex flex-col sm:flex-row gap-16 sm:gap-0">
				<Card
					title={'ACCESSIBILITY IN THE DESIGN SYSTEM'}
					desc={'Redesigning Components to Incorporate Accessible Design'}
					slug="/accsq.png"
					url={'/accessibility'}
					key={['Design systems', 'Accessibility']}
				/>
				<Card
					title={'TRULIOO — LINK LEADS MANAGER'}
					desc={'Designing the link managment system to improve lead conversion'}
					slug="/herolead.png"
					url={'/trulioo'}
					key={['Product design', 'Platform capabilities']}
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
