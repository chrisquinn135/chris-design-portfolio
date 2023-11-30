<script>
	import Card from '../../components/card.svelte';
	import Footer from '../../components/footer.svelte';

	// font styles
	let h1 = 'text-3xl sm:text-4xl font-bold';
	let h2 = 'text-text-subdued text-lg sm:text-2xl';
	let h3 = 'text-text-default text-lg font-bold sm:text-2xl';
	let label = 'text-text-default font-bold text-base';
	let body = 'text-text-subdued text-base font-light';
	let numfoot = 'text-text-default text-sm font-bold';
	let code = 'bg-surface-+1 py-1 px-2 text-text-default text-sm';
	let footer = 'text-text-subdued text-sm font-light';
	// content styles
	let videoWrapper =
		'p-2 sm:p-8 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-text-subdued gap-8 font-light border border-border-subdued';
	let video = 'w-full shadow-[0_20px_40px_-12px_rgba(50,50,93,0.25)] rounded-lg';
	let img =
		'p-2 sm:p-8 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-center text-text-subdued gap-8 font-light border border-border-subdued';
	// 'p-2 sm:p-8 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-text-subdued gap-8 font-light border border-2 border-text-default shadow-[0_3px_0_0_rgba(0,0,0,1)]';

	// section styles
	let section = 'flex flex-col gap-8 sm:gap-16';
	let div = 'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16';
	let container = 'flex flex-col gap-4 sm:gap-8';
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
							href="#feature"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Feature definition</a
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
							href="#dev"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Development</a
						>
					</li>
					<li>
						<a
							href="#launch"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Launch</a
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
	<section class="flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16" id="top">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<div class="bg-text-default w-full h-0.5" />
			</div>
			<h1 class={h1}>Asset Manager — Custom Figma Plugin</h1>
			<h2 class={h2}>Centralizing Assets for Improved Consistency Across the Platform</h2>
		</div>
		<img src={'/asset/hero-image.png'} alt="hero" class="rounded-lg w-full" />
		<section class={section}>
			<div class={div}>
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
					<p class={label}>Summary</p>
					<p class={body}>
						Asset Manager is a Figma plugin that stores assets such as illustrations and data used
						within the Trulioo Platform for quick access and input.
						<br /><br />Asset Manager is currently launched within the design organization and has a
						100% adoption rate within daily design workflows.
					</p>
				</div>
			</div>
			<div class={videoWrapper}>
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
					src="/asset/asset-he.png"
					alt="User journey map and related problem origins"
					class="rounded-lg w-full"
				/>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</section>
		<!-- problem section -->
		<section class={section} id="overview">
			<div>
				<h2 class={h1}>01<br />Overview</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>The problem</h3>
					<div class={body}>
						The Trulioo platform comprises of a diverse range of products, each overseen by its own
						dedicated team. This led to isolated work environments, where teams operated in silos
						with limited cross-team communication. <br /><br />
						<span class={label}>
							These isolated teams gave rise to inconsistencies in assets across the various
							products
						</span>, necessitating time-consuming review sessions and error-checking processes.
					</div>
				</div>
				<div class={img}>
					<p>Three empty states with different illustrations and text</p>
					<img
						src="/asset/multiple-comb.png"
						alt="User journey map and related problem origins"
						class="rounded-lg w-full"
					/>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>The goal</h3>
					<div class={body}>
						Create a design tool that integrates directly with an asset repository, ensuring a
						unified asset experience across the platform. Assets include illustrations and reusable
						text throughout the platform.
					</div>
				</div>
				<div class={img}>
					<p>Proposed workflow for selecting assets</p>
					<img
						src="/asset/updated-flow.png"
						alt="User journey map and related problem origins"
						class="rounded-lg w-full"
					/>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>My contribution</h3>
					<div class={body}>
						After championing and gaining support for the creation of a design tool, I led both the
						design and development efforts for this project, collaborating daily with leadership and
						the design team to ensure product fit. <br /><br />I conducted audits, facilitated
						workshops and led the visual, interaction and userflow tracks all while working on the technical implementation of the tool from start to launch.
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</section>
		<!-- problem section -->
		<section class={section} id="problem">
			<div>
				<h2 class={h1}>02 <br />Tackling the core problem</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>What we started with</h3>
					<div class={body}>
						The current platform had an abundance of inconsistent asset usage across its different
						products. <br /><br />An audit of the production environment and all designs handed off
						within the last six months revealed that
						<span class={label}
							>every product had different variations in common asset use cases.</span
						>
					</div>
				</div>
				<ul
					class="p-4 sm:p-8 bg-surface-+1 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 justify-between p-16 text-2xl sm:text-4xl font-bold border border-border-subdued"
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
					<h3 class={h3}>Creating an asset repository</h3>
					<p class={body}>
						To create a unified asset repository, I lead several workshops with our design team to
						consolidate each inconsistent asset usage found in the audit, making sure that <span
							class={label}
							>each unique use case had a single set of illustration and text combinations</span
						>.
						<br />
						<br />
						Having established an asset repository, I was prepared to design and develop the tool for
						managing and housing this repository.
					</p>
				</div>
				<div class={img}>
					<p>Consolidating similar use cases together</p>
					<img
						src="/asset/consolidation.png"
						alt="Consolidating different asset combinations"
						class="rounded-lg w-full"
					/>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
		<!-- opportunity section -->
		<section class={section} id="feature">
			<div>
				<h2 class={h1}>03<br />Feature definition</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Figuring out the direction</h3>
					<div class={body}>
						I conducted interviews with the design team to understand their goals, content
						preferences, and how they currently might interact with design tools. I also audited and
						researched best-in-class design tools and learned how they tackled asset retrieval and
						insertion.<br /><br />
						After several alignment sessions, I was able to hammer out the list of features and requirements
						to focus our attention on.
					</div>
				</div>
				<div class={img}>
					<p>Asset retrieval and insertion features</p>
					<img
						src="/asset/asset-feature.png"
						alt="Consolidating different asset combinations"
						class="rounded-lg w-full"
					/>
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
						The first iteration of designs featured a tag filter system that allowed users to filter
						results by the asset type. <br /> <br />I improved this with the implementation of a tab
						list component to separate out illustration and text assets into individual screens and
						replacing the tag filter system with a more robust filter and sort mechanism.
					</div>
				</div>
				<div class={img}>
					<p>Organization and filter system improvements</p>
					<img
						src="/asset/org-filter.png"
						alt="Consolidating different asset combinations"
						class="rounded-lg w-full"
					/>
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
							>. Additional design changes described below.
						</p>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Improved descriptions</p>
							<p class={body}>
								Descriptions were expanded to include "Use case" and "Products" sections to give
								designers better context on which asset to use.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>"Back to results" icon button</p>
							<p class={body}>
								The outline button was replaced with an icon button to reduce visual emphasis,
								allowing the user to focus on more important information within the screen.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Editable string text</p>
							<p class={body}>
								String text is contained within input fields for greater control over the text
								customization.
							</p>
						</div>
					</div>
				</div>
				<div class={img}>
					<p>Individual asset screen improvements</p>
					<img
						src="/asset/improved-ind.png"
						alt="Individual asset screen improvements"
						class="rounded-lg w-full"
					/>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
		<!-- development section -->
		<section class={section} id="dev">
			<div>
				<h2 class={h1}>05<br />Development</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Diving into implementation</h3>
					<div class={body}>
						The following section is a quick dive into the technical implementation of the asset
						manager. If you're more interested in the designs, feel free to jump to the <a
							class="text-action-interactive-default text-blue-50 hover:text-action-interactive-hover underline"
							href="#launch">launch</a
						>
						section to see the final designs and implementation.
						<br /><br />
						For this section, I'll focus mainly on the component insertion logic, namely adding and swapping
						assets. If you'd like to learn more, you can visit the
						<a
							class="text-action-interactive-default text-blue-50 hover:text-action-interactive-hover underline"
							href="https://github.com/trulioo-visual-team/asset-finder"
							target="_blank">source code</a
						>
						or reach out to
						<a
							class="text-action-interactive-default text-blue-50 hover:text-action-interactive-hover underline"
							href="https://www.linkedin.com/in/chrisquinn135/"
							target="_blank">me</a
						> for more information!
					</div>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Keys, keys, keys</h3>
					<div class={body}>
						In order to insert the assets onto the canvas, we first have to import the component
						through its master component key. I utilized the <a
							class="text-action-interactive-default text-blue-50 hover:text-action-interactive-hover underline"
							href="https://www.figma.com/community/plugin/758276196886757462/node-inspector"
							target="_blank">Node Inspector</a
						>
						plugin to find the keys for all listed assets and stored them along with their specific use
						case information within a JSON file for quick lookup.
					</div>
				</div>
				<div class={img}>
					<img
						src="/asset/sample-code.png"
						alt="Individual asset screen improvements"
						class="rounded-lg w-full"
					/>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>"Add asset" logic</h3>
					<div class={body}>
						To add an asset onto the page, we first call the <code class={code}
							>importComponentByKeyAsync(key)</code
						>
						function in order to import desired component into the plugin.<br /><br />
						Once an instance is imported, we call the <code class={code}>createInstance()</code> function
						and place the instance in the center of the viewport. Lastly, we center the newly created
						instance within the viewport.
					</div>
				</div>
				<div class={img}>
					<img
						src="/asset/add-logic.png"
						alt="Individual asset screen improvements"
						class="rounded-lg w-full"
					/>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>"Swap asset" logic</h3>
					<div class={body}>
						Swapping assets differs slightly in the logic required due to two main factors, the
						amount of items selected and the types of the items selected. Because the user has the
						possibility to select more than one item, we'll have to iterate through every selected
						item using a for-loop. Before performing any swaps, we'll additionally have to validate
						that each item is an <code class={code}>"INSTANCE"</code> object.
						<br /><br />
						Once these conditions are satisfied, it becomes much more simple. We'll import the desired
						component with the <code class={code}>importComponentByKeyAsync(key)</code> function,
						swap the item with the desired component using
						<code class={code}>swapComponent(importComponent)</code> function, and we are done!
					</div>
				</div>
				<div class={img}>
					<img
						src="/asset/swap-logic.png"
						alt="Individual asset screen improvements"
						class="rounded-lg w-full"
					/>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</section>
		<!-- Final designs section -->
		<section class={section} id="launch">
			<div>
				<h2 class={h1}>06<br />Introducing the Asset Manager</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Centralized assets</h3>
					<div class={body}>
						The asset manager offers a convenient organization of assets, categorizing them into two
						distinct tabs: "Illustrations" and "Text." Under the "Illustrations" tab, users can
						access illustrations and their associated text usages across the platform. Meanwhile,
						the "Text" tab provides easy access to common text elements like dates of birth and
						countries. <br /> <br />This organization streamlines asset retrieval, empowering users
						to locate specific assets swiftly through efficient search, filtering, and sorting
						functionalities.
					</div>
				</div>
				<div class={img}>
					<img src="/asset/group.png" alt="illustration assets" class="rounded-lg w-full" />
				</div>
				<div class={videoWrapper}>
					<video
						src="/asset/filter-sort.mp4"
						type="video/mp4"
						class={video}
						autoplay
						playsinline
						muted
						loop
					/>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Swap and add assets</h3>
					<p class={body}>
						Designers have the option to either swap or add individual assets directly onto canvas,
						providing direct integration into the designer's workflow.<br /><br />Designers are also
						able to swap entire groups of content for text assets.
					</p>
				</div>
				<div class={img}>
					<img src="/asset/swap-and-add.png" alt="illustration assets" class="rounded-lg w-full" />
				</div>

				<div class={videoWrapper}>
					<video
						src="/asset/swap-ill-text.mp4"
						type="video/mp4"
						class={video}
						autoplay
						playsinline
						muted
						loop
					/>
				</div>

				<div class={videoWrapper}>
					<video
						src="/asset/swap-multiple-node.mp4"
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
		</section>
		<!-- Impact section -->
		<section class={section} id="impact">
			<div>
				<h2 class={h1}>07<br />Impact and retrospection</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Shipped and integrated</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							At this moment, the asset manager has been shipped to the entire design team and
							integrated into every designer's workflow.
							<br /><br />Results have seen:
						</p>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={body}>
								Illustration inconsistencies <span class={label}>reduced by over 80%</span>.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
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
							During this project, I was able to gain valuable experience in <span class={label}
								>collaborative design and stakeholder management</span
							>. Because this project affects the design process of all designers in our team, I had
							to ensure that I got feedback and buy in from stakeholders and designers.<br /> <br />
							In addition, I was able to continue
							<span class={label}
								>polishing up my skills in Figma plugin development and bring great results to our
								design system!</span
							>
						</p>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
		<div class="flex flex-col gap-8">
			<h2 class="text-2xl sm:text-4xl font-bold">Next project:</h2>
			<Card
				title={'Trulioo Design Linter'}
				desc={'Introducing Automation to the Design Review Process'}
				slug="/tds-hero.png"
				t1={'Product Design'}
				t2={'Design Tooling'}
				url={'/tds'}
			/>
		</div>
		<Footer />
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
