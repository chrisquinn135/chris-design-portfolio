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
	<title>Christopher Su — Asset Manager</title>
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
					>Platform audit</a
				>
			</li>
			<li>
				<a
					href="#user"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Updating user journey</a
				>
			</li>
			<li>
				<a
					href="#ideation"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Ideation</a
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
			<li>
				<a
					href="#retrospection"
					class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
					>Retrospection</a
				>
			</li>
		</NavigationLayout>
	</div>
	<section class="flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16" id="top">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<div class="bg-text-default w-full h-0.5" />
			</div>
			<h1 class="h1">Asset Manager — Custom Figma Plugin</h1>
			<h2 class="text-text-subdued text-lg sm:text-2xl">
				Centralizing Assets for Improved Consistency Across the Platform
			</h2>
		</div>
		<img src={'/asset/hero.png'} alt="hero" class="rounded-lg w-full" />
		<SectionLayout id="brief">
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
					src="/asset/asset-hero2.png"
					alt="User journey map and related problem origins"
					class="rounded-lg w-full"
				/>
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
						The Trulioo platform comprises of a diverse range of products, each overseen by its own
						dedicated team. This led to isolated work environments, where teams operated in silos
						with limited cross-team communication. <br /><br />
						<span class={label}>
							These isolated teams gave rise to inconsistencies in assets across the various
							products
						</span>, necessitating time-consuming review sessions and error-checking processes.
					</div>
				</div>
				<div class={imgPad}>
					<p>Three empty states with different illustrations and text</p>
					<img
						src="/asset/multiple-comb.png"
						alt="User journey map and related problem origins"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>The goal</h3>
					<div class={body}>
						Create a design tool that integrates directly with an asset repository, ensuring a
						unified asset experience across the platform. Assets include illustrations and reusable
						text throughout the platform.
					</div>
				</div>
				<div
					class="p-2 pb-1 sm:pb-4 pr-0 sm:pr-0 sm:p-8 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-center text-text-subdued gap-8 font-light border border-border-subdued"
				>
					<p>Example asset combinations</p>
					<img
						src="/asset/current-implementation.png"
						alt="User journey map and related problem origins"
						class="rounded-lg w-full"
					/>
				</div>
				<!-- <div class={img}>
					<p>Proposed workflow for selecting assets</p>
					<img
						src="/asset/updated-flow.png"
						alt="User journey map and related problem origins"
						class="rounded-lg w-full"
					/>
				</div> -->
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>My contribution</h3>
					<div class={body}>
						After championing and gaining support for the creation of a design tool, I led both the
						design and development efforts for this project, collaborating daily with leadership and
						the design team to ensure product fit. <br /><br />I conducted audits, facilitated
						workshops and led the visual, interaction and user flow tracks all while leading the
						technical implementation of the tool from conception to launch.
					</div>
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px" />
		</SectionLayout>
		<!-- problem section -->
		<SectionLayout id="asset">
			<div>
				<h2 class="h1">02 <br />Tackling the core problem</h2>
			</div>
			<ContainerLayout>
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
			</ContainerLayout>
			<ContainerLayout>
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
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<!-- opportunity section -->
		<SectionLayout id="user">
			<div>
				<h2 class="h1">03<br />Updating the journey</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Pinpointing the issues</h3>
					<p class={body}>
						Structuring the user journey allowed me to identify the pain points in the asset
						selection process.
						<br /><br />
						Designers had been referencing different designs and use-cases when using assets, resulting
						in conflicting usage across teams. In addition, the current process required a significant
						time investment in the designer workflows due to the neccessity for manual coordination between
						designers.
					</p>
				</div>
				<div class={img}>
					<div>User journey map and related problem origins</div>
					<img
						src="/asset/user-flow.png"
						alt="User journey map and related problem origins"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Rethinking the user journey</h3>
					<div class={body}>
						By integrating a design tool into the user journey, we will be able to significantly
						decrease the time investment necessary in addition to ensuring consistent asset usage.<br
						/><br />
					</div>
				</div>
				<div class={img}>
					<p>Updated user flow</p>
					<img
						src="/asset/updated-flow.png"
						alt="Consolidating different asset combinations"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>

		<SectionLayout id="ideation">
			<div>
				<h2 class="h1">04<br />Landing on a solution</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Selecting a tool</h3>
					<div class={body}>
						Several tools were suggested to house our asset repository, including tools like Google
						Docs and custom Figma plugins.<br /><br />
						I made the decision to create a custom Figma plugin because of its superior integration capabilities
						into designer workflows. While the development period would be higher, the plugin would cut
						down on the asset selection journey and allow designers to focus on delivering great user
						experiences.
					</div>
				</div>
				<div class={img}>
					<img
						src="/asset/figma-doc.png"
						alt="User journey map and related problem origins"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Feature definition</h3>
					<div class={body}>
						Several alignment sessions later, I was able to hammer out the list of features and
						requirements to focus our attention on. <br /><br />
						We boiled down the core functionality to focus on how a user can retrieve and insert specific
						assets.
					</div>
				</div>
				<div class={imgPad}>
					<img
						src="/asset/insert-retrieve.png"
						alt="Consolidating different asset combinations"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>

			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<!-- Design iteration section -->
		<SectionLayout id="design">
			<div>
				<h2 class="h1">05<br />Design iteration</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Testing initial designs</h3>
					<div class={body}>
						Once the initial designs were complete, I ran moderated user tests with three designers
						and iterated on the designs based on the gathered insights.
					</div>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Improving asset organization and searchability</h3>
					<div class={body}>
						The first iteration of designs featured a tag filter system that allowed users to filter
						results by the asset type. <br /> <br />I improved this with the implementation of a tab
						list component to separate out illustration and text assets into individual screens and
						replacing the tag filter system with a more robust filter and sort mechanism.
					</div>
				</div>
				<div class={imgPad}>
					<p>Organization and filter system improvements</p>
					<img
						src="/asset/org-filter.png"
						alt="Consolidating different asset combinations"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
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
				<div class={imgPad}>
					<p>Individual asset screen improvements</p>
					<img
						src="/asset/improved-ind.png"
						alt="Individual asset screen improvements"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<!-- development section -->
		<SectionLayout id="dev">
			<div>
				<h2 class="h1">06<br />Development</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Diving into implementation</h3>
					<div class={body}>
						The following section is a quick dive into the technical implementation of the plugin.
						If you're more interested in the designs, feel free to jump to the <a
							class="text-action-interactive-default text-blue-50 hover:text-action-interactive-hover underline"
							href="#launch">launch</a
						>
						section to see the final designs and implementation.
						<br /><br />
						I lead development efforts for both the frontend (UI) and backend logic and collaborated
						with developers on code best practices and implementation.<br /><br />For this section,
						I'll focus mainly on the component insertion logic, namely adding and swapping assets.
						If you'd like to learn more, you can visit the
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
			</ContainerLayout>
			<ContainerLayout>
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
						src="/asset/json.png"
						alt="Individual asset screen improvements"
						class="rounded-lg w-full shadow-[0_20px_40px_-12px_rgba(50,50,93,0.25)]"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
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
						src="/asset/addins.png"
						alt="Individual asset screen improvements"
						class="rounded-lg w-full shadow-[0_20px_40px_-12px_rgba(50,50,93,0.25)]"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
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
						src="/asset/swapins.png"
						alt="Individual asset screen improvements"
						class="rounded-lg w-full shadow-[0_20px_40px_-12px_rgba(50,50,93,0.25)]"
					/>
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px" />
		</SectionLayout>
		<!-- Final designs section -->
		<SectionLayout id="launch">
			<div>
				<h2 class="h1">07<br />Introducing the Asset Manager</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Efficent organization</h3>
					<div class={body}>
						The asset manager provides organization of assets under two tabs, "Illustrations" and
						"Text", empowering users to locate specific assets swiftly through efficient search,
						filtering, and sorting functionalities.
					</div>
				</div>
				<div class={imgPad}>
					<img src="/asset/organization.png" alt="illustration assets" class="rounded-lg w-full" />
				</div>
				<div class={img}>
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
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Centralized Assets</h3>
					<div class={body}>
						The individual pages draw assets from the centralized repository, ensuring that users
						are always using the most up-to-date illustrations and text.
					</div>
				</div>
				<div class={imgPad}>
					<img src="/asset/individual-view.png" alt="illustration assets" class="rounded-lg w-full" />
				</div>

			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Swap and add assets</h3>
					<p class={body}>
						Users have the option to either swap the current selection or add individual assets directly onto canvas,
						providing direct integration into the user's workflow.
					</p>
				</div>
				<div class={imgPad}>
					<img src="/asset/export-single.png" alt="illustration assets" class="rounded-lg w-full" />
				</div>
				<div class={img}>
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
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Swap groups</h3>
					<p class={body}>
						For text assets, users have the option to swap entire groups of content at once rather than swapping out content individually. 
					</p>
				</div>
				<div class={imgPad}>
					<img src="/asset/export-double.png" alt="illustration assets" class="rounded-lg w-full" />
				</div>
				<div class={img}>
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

			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<!-- Impact section -->
		<SectionLayout id="impact">
			<div>
				<h2 class="h1">08<br />Impact and what's next</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Shipped and integrated</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							The asset manager tool has been officially released to the entire design team and
							integrated into every designer's workflow, leading to great improvements in both the
							efficiency and consistency of new features.
							<br /><br />
							In addition, stakeholder interest in future design tooling projects skyrocketed with several
							ideas in the pipeline for the future.
						</p>
					</div>
				</div>
				<div class={imgPad}>
					<p>KPI results since release</p>
					<img
						src="/asset/improve.png"
						alt="Individual asset screen improvements"
						class="rounded-lg w-full"
					/>
				</div>
			</ContainerLayout>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>Where are we going?</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							We are still experimenting and collecting metrics on how the Asset Manager can be
							improved in the future adoption and impact-wise, but as a start, here are some things
							we're looking at for the future of the Asset Manager!
						</p>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Cross-functional implementation</p>
							<p class={body}>
								Being able to integrate to the entire design team is great, but what if we could
								integrate to the entire organization. Developers could be pulling from the same
								database as designers, ensuring 100% accuracy and consistency in both design and
								development implementation.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Cloud database integration</p>
							<p class={body}>
								Currently, component keys and asset information is being stored locally within the
								plugin source code. Moving it to an external database would allow designers to
								update, add and remove assets without releasing a new version of the plugin.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Analytics and metrics tracking</p>
							<p class={body}>
								The Asset Manager could track all insertions of assets across all projects, allowing
								the team to get deeper insight into what assets are being used, not used, and
								edited.
							</p>
						</div>
					</div>
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<!-- Impact section -->
		<SectionLayout id="retrospection">
			<div>
				<h2 class="h1">09<br />Retrospection</h2>
			</div>
			<ContainerLayout>
				<div class={div}>
					<h3 class={h3}>What I learned</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							During this project, I was able to gain valuable experience in <span class={label}
								>collaborative design and stakeholder management</span
							>. Because this project affects the design process of all designers in our team, I had
							to ensure that I got feedback and buy in from stakeholders and designers.
							<br /><br />In addition, I was able to work hand-in-hand with developers on not only
							the design process, but also the development process. Not only did I foster a great
							relationship with them, but I also got hands-on insight on the developer's thought
							process.<br /> <br />
							Lastly, I was able to continue
							<span class={label}
								>polishing up my skills in Figma plugin development and bring great results to our
								design system!</span
							>
						</p>
					</div>
				</div>
			</ContainerLayout>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</SectionLayout>
		<div class="flex flex-col gap-8">
			<h2 class="text-2xl sm:text-4xl font-bold">Next project:</h2>
			<Card
				title={'Trulioo Design Linter'}
				desc={'Introducing Automation to the Design Review Process'}
				slug="/tds-hero.avif"
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
</PageLayout>
