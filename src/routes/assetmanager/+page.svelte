<script>
	import Card from "../../components/card.svelte";
	// font styles
	let h1 = 'text-3xl sm:text-4xl font-bold'
	let h3 = 'text-text-default text-lg font-bold sm:text-2xl';
	let label = 'text-text-default font-bold text-base';
	let body = 'text-text-subdued text-base font-light';
	let numfoot = 'text-text-default text-sm font-bold';
	let footer = 'text-text-subdued text-sm font-light';
	// content styles
	let video = 'p-2 sm:p-8 bg-surface-+1 rounded-lg';
	// section styles
	let section = 'flex flex-col gap-8 sm:gap-16'
	let div = 'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16'
	let container = 'flex flex-col gap-4 sm:gap-8'
	
</script>
<svelte:head>
    <title>Christopher Su — Asset Manager</title> 
</svelte:head>
<!-- Body content -->

<div class="px-6 pb-20 sm:pb-0 sm:px-8 lg:px-16 grid3">
	<div class="hidden sm:block">
		<section class="pt-6 pb-6 sm:pt-8 sm:pb-16 sticky top-0 flex flex-col justify-end h-screen">
			<div class="flex flex-col gap-4 content-end">
				<nav class={label}>CONTENTS</nav>
				<ul class="flex flex-col gap-4 text-text-placeholder">
					<li>
						<a
							href="#overview"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Overview</a
						>
					</li>
					<li>
						<a
							href="#problem"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Problem space</a
						>
					</li>
					<li>
						<a
							href="#exploration"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Exploration</a
						>
					</li>
					<li>
						<a
							href="#opportunity"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Opportunity points</a
						>
					</li>
					<li>
						<a
							href="#design"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Design iterations</a
						>
					</li>
					<li>
						<a
							href="#final"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Final designs</a
						>
					</li>
					<li>
						<a
							href="#dev"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Development</a
						>
					</li>
					<li>
						<a
							href="#impact"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Impact</a
						>
					</li>
				</ul>
			</div>
		</section>
	</div>

	<section class='flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16' id='top'>
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<div class="bg-text-default w-full h-0.5" />
				<h2 class={h3}>ASSET MANAGER</h2>
			</div>
			<h1 class={h1}>
				Centralizing Assets for Improved Consistency Across the Platform
			</h1>
		</div>
		<img src={'/asset/hero-image.png'} alt="hero" class='rounded-lg w-full'/>
		<section class={section} id="overview">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16">
				<div class="flex flex-col gap-8 sm:gap-16">
					<div>
						<p class={label}>My Role</p>
						<p class={body}>Lead Designer and Developer</p>
					</div>
					<div>
						<p class={label}>Timeline</p>
						<p class={body}>August 2023 - October 2023</p>
					</div>
				</div>
				<div>
					<p class={label}>Overview</p>
					<p class={body}>
						Asset Manager is a Figma plugin that stores assets such as illustrations and data used
						within the Trulioo Platform for quick access and input.
						<br /><br />Asset Manager is currently being used across the organization and has a 100%
						adoption rate within daily design workflows.
					</p>
				</div>
			</div>
			<div class="flex flex-col gap-2 items-end">
				<div class={video}>
					<video src="/asset/swap-assets.mp4" type="video/mp4" class="w-full" autoplay muted loop />
				</div>
				<div class="">
					<span class={numfoot}>0.1 </span><span class={footer}>Swap assets</span>
				</div>
			</div>
			<div class="flex flex-col gap-2 items-end">
				<div class={video}>
					<video
						src="/asset/swap-multiple-node.mp4"
						type="video/mp4"
						class="w-full"
						autoplay playsinline
						muted
						loop
					/>
				</div>
				<div class="">
					<span class={numfoot}>0.2 </span><span class={footer}>Swap multiple text nodes</span>
				</div>
			</div>
			<div class="flex flex-col gap-2 items-end">
				<div class={video}>
					<video
						src="/asset/asset-organization.mp4"
						type="video/mp4"
						class="w-full"
						autoplay playsinline
						muted
						loop
					/>
				</div>
				<div class="">
					<span class={numfoot}>0.3 </span><span class={footer}>Asset organization</span>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</section>
<!-- problem section -->
		<section  class={section} id="problem">
			<div>
				<h2 class={h1}>01<br />Problem space</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Inconsistent illustration and text usage across products</h3>
					<div class={body}>
						The Trulioo platform comprises a diverse range of products, each overseen by its own
						dedicated design and development team. This led to isolated work environments, where
						teams operated in silos with limited cross-team communication. <br /><br />
						<span class={label}>
							These isolated workflows gave rise to inconsistencies among the various products
						</span>
						, necessitating time-consuming review sessions and error-checking processes (<span
							class={label}>Figure 1.0</span
						>).
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img
						src="/asset/asset-combinations.jpg"
						alt="different asset combinations"
						class="rounded-lg w-full"
					/>
					<div class="">
						<span class={numfoot}>1.0 </span><span class={footer}
							>Various asset combinations for the same use-case</span
						>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</section>
<!-- exploration section -->
		<section class={section} id="exploration">
			<div>
				<h2 class={h1}>02<br />Finding out how far the problem ran</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Auditing the platform</h3>
					<div class={body}>
						It was crucial to first assess the extent of this issue. I conducted a thorough audit of
						the production environment and all designs handed off within the last six months,
						focusing on any instances of illustration usage paired with corresponding copy.<br /><br
						/>
						It turns out that
						<span class={label}
							>every product had different variations in common asset use cases.</span
						>
						, necessitating time-consuming review sessions and error-checking processes.
					</div>
				</div>
				<ul
					class="p-4 sm:p-8 bg-surface-+1 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 justify-between p-16 text-2xl sm:text-4xl font-bold"
				>
					<li class="flex flex-col text-center gap-2">
						<p>52</p>
						<p class="text-xl text-text-subdued font-normal">Unique illustration usages</p>
					</li>
					<li class="flex flex-col text-center gap-2">
						<p>23</p>
						<p class="text-xl text-text-subdued font-normal">Unique use-cases</p>
					</li>
					<li class="flex flex-col text-center gap-2">
						<p>2.26</p>
						<p class="text-xl text-text-subdued font-normal">Average variations</p>
					</li>
				</ul>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Conducting designer interviews</h3>
					<p class={body}>
						Next, I conducted interviews with the design team to map the user journey and pinpoint
						the problem origin (<span class={label}>Figure 2.0</span>). <br /> <br />Designers had
						been referencing different designs and use-cases when using assets, resulting in
						conflicting usage across teams. In addition, the current process required a significant
						time investment in the designer workflows.
					</p>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img
						src="/asset/user-flow.png"
						alt="User journey map and related problem origins"
						class="rounded-lg w-full"
					/>
					<div class="">
						<span class={numfoot}>2.0 </span><span class={footer}
							>User journey map and related problem origins</span
						>
					</div>
				</div>
			</div>
			<div
				class="flex flex-col gap-2 border border-border-subdued justify-center text-center p-4 sm:p-8 rounded-lg bg-surface-0"
			>
				<p class={body}>How might we...</p>
				<p class={h3}>
					Streamline the asset selection journey and ensure consistent usage across design teams?
				</p>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
<!-- opportunity section -->
		<section class={section} id="opportunity">
			<div>
				<h2 class={h1}>03<br />Defining opportunity points</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Centralizing assets</h3>
					<div class={body}>
						It was clear that centralizing assets in a single location would help designers pull
						from a single source of truth for illustration and text assets. There were several
						different options available, including tools like Google Docs (<span class={label}
							>Figure 3.0</span
						>) and custom Figma plugins (<span class={label}>Figure 3.1</span>).<br /><br />I
						ultimately opted for
						<span class={label}
							>creating custom Figma plugin because of its superior integration capabilities into
							designer workflows.</span
						>
					</div>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
					<div class="flex flex-col gap-2 sm:gap-4">
						<div class="flex flex-col gap-2 items-end">
							<img
								src="/asset/google.png"
								alt="google docs"
								class="rounded-lg w-full border border-border-subdued"
							/>
							<div class="">
								<span class={numfoot}>3.0 </span><span class={footer}>Google docs</span>
							</div>
						</div>
						<div
							class="flex flex-row gap-4 rounded-lg border border-border-subdued p-4 items-center bg-surface-0"
						>
							<img src="/circle-check.svg" alt="decorative" class="color-icon-green stroke-1 h-6" />
							<p class={body}>Simple and easy to set up</p>
						</div>
						<div
							class="flex flex-row gap-4 rounded-lg border border-border-subdued p-4 items-center bg-surface-0"
						>
							<img src="/circle-check.svg" alt="decorative" class="color-icon-green stroke-1 h-6" />
							<p class={body}>User-friendly for non-designer stakeholders</p>
						</div>
						<div
							class="flex flex-row gap-4 rounded-lg border border-border-subdued p-4 items-center bg-surface-0"
						>
							<img src="/circle-xmark.svg" alt="decorative" class="fill-icon-red stroke-1 h-6" />
							<p class={body}>Lack of integration into designer workflows</p>
						</div>
					</div>
					<div class="flex flex-col gap-2 sm:gap-4">
						<div class="flex flex-col gap-2 items-end">
							<img
								src="/asset/figma.jpg"
								alt="google docs"
								class="aspect-{16 / 9} rounded-lg w-full outline outline-8 outline-border-blue"
							/>
							<div class="">
								<span class={numfoot}>3.1 </span><span class={footer}>Figma Plugin API</span>
							</div>
						</div>
						<div
							class="flex flex-row gap-4 rounded-lg border border-border-subdued p-4 items-center bg-surface-0"
						>
							<img src="/circle-check.svg" alt="decorative" class="color-icon-green stroke-1 h-6" />
							<p class={body}>
								Integrates directly into designer workflows and increases design velocity
							</p>
						</div>
						<div
							class="flex flex-row gap-4 rounded-lg border border-border-subdued p-4 items-center bg-surface-0"
						>
							<img src="/circle-check.svg" alt="decorative" class="color-icon-green stroke-1 h-6" />
							<p class={body}>Control over asset usage and analytics</p>
						</div>
						<div
							class="flex flex-row gap-4 rounded-lg border border-border-subdued p-4 items-center bg-surface-0"
						>
							<img src="/circle-xmark.svg" alt="decorative" class="fill-icon-red stroke-1 h-6" />
							<p class={body}>Requires a development time period</p>
						</div>
					</div>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Rethinking the user journey</h3>
					<p class={body}>
						The current user journey led to inconsistent results and large time investments due to
						the reliance on manual coordination between designers.<br /><br /> Implementing an asset
						manager plugin would improve this by
						<span class={label}>integrating into the designer workflow</span>
						and providing quick and accurate asset retrieval (<span class={label}>Figure 3.2</span
						>). Designers will be able to cut down on the asset retrieval journey and focus on
						delivering great user experiences.
					</p>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img
						src="/asset/user-journey-rethink.jpg"
						alt="Improved user journey"
						class="rounded-lg w-full"
					/>
					<div class="">
						<span class={numfoot}>3.2 </span><span class={footer}>Improved user journey</span>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
<!-- Design iteration section -->
		<section class={section} id="design">
			<div>
				<h2 class={h1}>04<br />Design iteration</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Improving asset organization and searchability</h3>
					<div class={body}>
						The initial design featured a tag filter system that allowed users to filter results by
						the asset type. <br /> <br />I improved this with the implementation of a tab component
						to separate out illustration and text assets into individual screens and replacing the
						tag filter system with a more robust filter and sort mechanism (<span class={label}
							>Figure 4.0</span
						>).
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img
						src="/asset/organization.jpg"
						alt="Improved organization and filter system"
						class="rounded-lg w-full"
					/>
					<div class="">
						<span class={numfoot}>4.0 </span><span class={footer}
							>Improved organization and filter system</span
						>
					</div>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Improving the asset insertion screen</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							Initial designs for inserting/swapping assets required users to click on individual
							rows and the actual swap vs insert interaction was determined whether the designer had
							anything selected within the frame. This combination was extremely confusing for first
							time users and lacked a clear micro interaction structure. <br /><br />
							I improved this by separating out the insert and swap functionality into two separate buttons
							within each row. This allows
							<span class={label}
								>better signifiers into the available options for the designer</span
							>. Additional design changes described below (<span class={label}>Figure 4.1</span>).
						</p>
						<div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0">
							<p class={label}>Improved descriptions</p>
							<p class={body}>
								Descriptions were expanded to include "Use case" and "Products" sections to give
								designers better context on which asset to use.
							</p>
						</div>
						<div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0">
							<p class={label}>"Back to results" icon button</p>
							<p class={body}>
								The outline button was replaced with an icon button to reduce visual emphasis,
								allowing the user to focus on more important information within the screen.
							</p>
						</div>
						<div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0">
							<p class={label}>Editable string text</p>
							<p class={body}>
								String text is contained within input fields for greater control over the text
								customization.
							</p>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img
						src="/asset/individual-asset.jpg"
						alt="Individual asset screen improvements"
						class="rounded-lg w-full"
					/>
					<div class="">
						<span class={numfoot}>4.1 </span><span class={footer}
							>Individual asset screen improvements</span
						>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
<!-- Final designs section -->
		<section class={section} id="final">
			<div>
				<h2 class={h1}>05<br />Final designs</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Centralized assets</h3>
					<div class={body}>
						The asset manager offers a convenient organization of assets, categorizing them into two
						distinct tabs: "Illustrations" and "Text." Under the "Illustrations" tab, users can
						access illustrations and their associated text usages across the platform. Meanwhile,
						the "Text" tab provides easy access to common text elements like dates of birth and
						countries (<span class={label}>Figure 5.0</span>). <br /> <br />This organization
						streamlines asset retrieval, empowering users to locate specific assets swiftly through
						efficient search, filtering, and sorting functionalities (<span class={label}
							>Figure 5.1</span
						>).
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img src="/asset/illustration-asset.jpg" alt="illustration assets" class="rounded-lg w-full" />
					<div class="">
						<span class={numfoot}>5.0 </span><span class={footer}>Illustration assets</span>
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<div class={video}>
						<video
							src="/asset/filter-sort.mp4"
							type="video/mp4"
							class="w-full"
							autoplay playsinline
							muted
							loop
						/>
					</div>
					<div class="">
						<span class={numfoot}>5.1 </span><span class={footer}>Filter and sort</span>
					</div>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Swap illustrations and text</h3>
					<p class={body}>
						Designers have the option to either swap or add individual assets directly onto canvas,
						providing direct integration into the designer's workflow (<span class={label}
							>Figure 5.2</span
						>
						and
						<span class={label}>Figure 5.3</span>).<br /><br />Designers are also able to swap
						entire groups of content for text assets (<span class={label}>Figure 5.4</span>).
					</p>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img src="/asset/swap-insert.webp" alt="illustration assets" class="rounded-lg w-full" />
					<div class="">
						<span class={numfoot}>5.2 </span><span class={footer}
							>Swap and insert functionality</span
						>
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<div class={video}>
						<video
							src="/asset/swap-ill-text.mp4"
							type="video/mp4"
							class="w-full"
							autoplay playsinline
							muted
							loop
						/>
					</div>
					<div class="">
						<span class={numfoot}>5.3 </span><span class={footer}
							>Swap illustrations and related text</span
						>
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<div class={video}>
						<video
							src="/asset/swap-multiple-node.mp4"
							type="video/mp4"
							class="w-full"
							autoplay playsinline
							muted
							loop
						/>
					</div>
					<div class="">
						<span class={numfoot}>5.4 </span><span class={footer}>Swap multiple text nodes</span>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
<!-- development section -->
		<section class={section} id="dev">
			<div>
				<h2 class={h1}>06<br />Development</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Standing on the shoulders of giants</h3>
					<div class={body}>
						Once the solution was finalized, I began research on how to implement an asset manager
						through the usage of Figma APIs. I cloned <a
							class="text-action-interactive-default text-blue-50 hover:text-action-interactive-hover"
							href="https://github.com/destefanis/design-lint"
							target="_blank">Daniel Destefanis' Design Lint</a
						>
						plugin and used the structure to build out the front and backend of the application,
						allowing for a much faster delivery time.<br /> <br />
						With my knowledge in Figma API's, software development and the cloned initial plugin structure,
						<span class={label}
							>I was able to develop and implement the designs within a three week timeframe</span
						>, much improved from my last Figma plugin!
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</section>
<!-- Impact section -->
		<section class={section} id="impact">
			<div>
				<h2 class={h1}>07<br />Impact and retrospection</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Project impact</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							At this moment, the asset manager has been released to the entire design team and
							integrated into every designer's workflow.
							<br /><br />Results have seen:
						</p>
						<div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0">
							<p class={body}>
								Illustration inconsistencies <span class={label}>reduced by over 80%</span>.
							</p>
						</div>
						<div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0">
							<p class={body}>
								<span class={label}>2 hours saved per project </span>selecting, aligning and
								creating assets and text.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Retrospection</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							During this project, I was able to gain valuable experience in <span class={label}>collaborative design
							and stakeholder management</span>. Because this project affects the design process of all
							designers in our team, I had to ensure that I got feedback and buy in from
							stakeholders and designers.<br/> <br/> 
							In addition, I was able to continue <span class={label}>polishing up my skills
							in Figma plugin development and bring great results to our design system!</span>
						</p>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
		<div class='flex flex-col gap-8'>
			<h2 class="text-2xl sm:text-4xl font-bold">
				Next project:
			</h2>
			<Card
					title={'Trulioo Design Linter'}
					desc={'Introducing Automation to the Design Review Process'}
					slug="/design-lint-card.png"
					t1={'Product Design'}
					t2={'Design Tooling'}
					url={'/tds'}
				/>
		</div>
	</section>

	<div class="hidden sm:block">
		<section
			class="sticky top-0 flex flex-col items-end justify-end h-screen pt-6 pb-6 sm:pt-8 sm:pb-16"
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
