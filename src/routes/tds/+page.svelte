<script>
	import Card from '../../components/card.svelte';
	import Footer from '../../components/footer.svelte'
	// font styles
	let h1 = 'text-3xl sm:text-4xl font-bold';
	let h2 = 'text-text-subdued text-lg sm:text-2xl';
	let h3 = 'text-text-default text-lg font-bold sm:text-2xl';
	let label = 'text-text-default font-bold text-base';
	let body = 'text-text-subdued text-base font-light';
	let numfoot = 'text-text-default text-sm font-bold';
	let footer = 'text-text-subdued text-sm font-light';
	// content styles
	let video = 'p-2 sm:p-8 bg-surface-+1 rounded-lg';
	// section styles
	let section = 'flex flex-col gap-8 sm:gap-16';
	let div = 'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16';
	let container = 'flex flex-col gap-4 sm:gap-8';
</script>

<svelte:head>
    <title>Christopher Su — Trulioo Design Linter</title> 
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
							href="#opportunity"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Opportunity space</a
						>
					</li>
					<li>
						<a
							href="#pain"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Pain points</a
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
							href="#design"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Design consideration</a
						>
					</li>
					<li>
						<a
							href="#development"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Development</a
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
							href="#impact"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Impact</a
						>
					</li>
				</ul>
			</div>
		</section>
	</div>

	<section id='top' class="flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<div class="bg-text-default w-full h-0.5" />
			</div>
			<h1 class={h1}>Trulioo Design Linter — Custom Figma Plugin</h1>
			<h2 class={h2}>Introducing Automation to the Design Process</h2>
		</div>
		<img src={'/tds/hero.webp'} alt="hero" />
		<section class={section} id="overview">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16">
				<div class="flex flex-col gap-8 sm:gap-16">
					<div>
						<p class={label}>My Role</p>
						<p class={body}>Sole Designer and Developer</p>
					</div>
					<div>
						<p class={label}>Timeline</p>
						<p class={body}>November 2022 - February 2023</p>
					</div>
				</div>
				<div>
					<p class={label}>Overview</p>
					<p class={body}>
						Trulioo Design Linter (TDS) is a custom design linter that analyzes a project page and
						displays a list of layers with inconsistencies in color and font within the design
						system.
						<br /><br />TDS Lint is currently released as a Figma plugin in the Product Experience
						organization and expanded to include all backlogged features.
					</p>
				</div>
			</div>
			<div class="flex flex-col gap-2 items-end">
				<div class={video}>
					<video src="/tds/tds-lint.mp4" type="video/mp4" class="w-full" autoplay playsinline muted loop />
				</div>
				<div class="">
					<span class={numfoot}>0.1 </span><span class={footer}>TDS lint</span>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</section>
		<!-- problem section -->
		<section class={section} id="opportunity">
			<div>
				<h2 class={h1}>01<br />Opportunity space</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Too much reliance on manual processes</h3>
					<div class={body}>
						The handoff process involves all designs to go through the Visual team for a UI review
						and quality check before handoff to developers. While effective in catching 80% of
						errors, it creates a time-consuming burden for the Visual team (<span class={label}
							>Figure 1.0</span
						>).<br /><br />The process required extensive manual reviews and quality checks,
						<span class={label}
							>leading to reduced productivity and an increased risk of errors</span
						>, as the team spent a significant amount of time manually checking and adjusting
						designs.
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img
						src="/tds/design-review.webp"
						alt="touchpoints in the design review"
						class="rounded-lg w-full"
					/>
					<div class="">
						<span class={numfoot}>1.0 </span><span class={footer}
							>Touchpoints in the design review</span
						>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</section>
		<!-- exploration section -->
		<section class={section} id="pain">
			<div>
				<h2 class={h1}>02<br />What pain points exist in the design journey?</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Migration to the design system</h3>
					<div class={body}>
						Because the design system was relatively new, designers have not migrated entirely and
						were still using old components, colors and fonts (<span class={label}>Figure 2.0</span
						>).
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img
						src="/tds/design-systems.webp"
						alt="Search results for Design System"
						class="rounded-lg w-full"
					/>
					<div class="">
						<span class={numfoot}>2.0 </span><span class={footer}
							>Search results for "Design system"</span
						>
					</div>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Oversight from designers</h3>
					<p class={body}>
						Designers relied on the Visual team to do quality checks and did not always quality
						check their work before handing off designs to the Visual team.
					</p>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
		<!-- opportunity section -->
		<section class={section} id="exploration">
			<div>
				<h2 class={h1}>03<br />Exploration and ideation</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Landing on a design linter</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							From my research, I found that there were several points of opportunity that could be
							improved along the current design handoff process through automation and design
							tooling. I decided to focus on creating a custom design linter tool in order to <span
								class={label}>tackle both major themes found from the design team interviews.</span
							>
						</p>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Migration to the new design system</p>
							<p class={body}>
								A design linter will be able to highlight any design errors resulting from using
								legacy design systems.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Oversight from designers</p>
							<p class={body}>
								A design linter will be able to be used at all points of the design process.
								Designers will be incentivized to use it early and often to catch errors from
								inception.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				class="flex flex-col gap-2 border border-border-subdued justify-center text-center p-4 sm:p-8 rounded-lg bg-surface-0"
			>
				<p class={body}>What is a design linter?</p>
				<p class={h3}>
					A design linter is a software tool that checks files for inconsistencies and adherence to
					design standards by analyzing designs with predefined rules from the design system.
				</p>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Feature definition</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>I mapped the desired experience into four key features:</p>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Error checking</p>
							<p class={body}>
								The plugin should be able to output any design inconsistencies within the page.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Analysis by page or selection</p>
							<p class={body}>
								Designers will be able to lint through either the entire page or a single selection.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Ignore errors</p>
							<p class={body}>
								Designers can remove specific errors from the list if they are an intentional
								deviation from the design system.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Configuration settings</p>
							<p class={body}>Designers can adjust linting criteria based on product.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
		<!-- Design iteration section -->
		<section class={section} id="design">
			<div>
				<h2 class={h1}>04<br />Design considerations</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Scaling back for an MVP</h3>
					<div class={body}>
						Although I initially designed for the inclusion of all four key features, I quickly
						realized when scoping the tool for development timelines, developing the entire
						application would likely take the better part of a 6 months to a year. <br /><br />Due
						to this, <span class={label}>I opted to scale back the designs to a MVP version</span>
						in order to both release the application in an earlier timeframe and gain real user feedback
						that I could use to improve the next iteration of the design linter (<span class={label}
							>Figure 4.0</span
						>
						and <span class={label}>Figure 4.1</span>). <br /><br />I scaled back the features to
						the minimum viable features to make the application functional across products,
						<span class={label}
							>reducing the projected timeline from one year to three months for development</span
						>.
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img src="/tds/initial-design.webp" alt="Initial designs" class="rounded-lg w-full" />
					<div class="">
						<span class={numfoot}>4.0 </span><span class={footer}>Initial designs</span>
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img src="/tds/mvp-design.webp" alt="MVP designs" class="rounded-lg w-full" />
					<div class="">
						<span class={numfoot}>4.1 </span><span class={footer}>MVP designs</span>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
		<!-- development section -->
		<section class={section} id="development">
			<div>
				<h2 class={h1}>05<br />Development</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Sprint planning</h3>
					<div class={body}>
						Although it was my first time planning engineering sprints, I knew it was important to
						break down the development effort into multiple tasks rather than tackling the designs
						all at once. <br /><br />I invested time into identifying dependencies, prioritizing
						tasks, and estimating the time required for each task. By focusing on the goals and
						deliverables needed within every sprint, I was able to ensure a smooth development
						process (<span class={label}>Figure 5.0</span>).
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img src="/tds/dev.webp" alt="Sprint breakdown" class="rounded-lg w-full" />
					<div class="">
						<span class={numfoot}>5.0 </span><span class={footer}>Sprint breakdown</span>
					</div>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Development highlights</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							As my first coding project since university, it was great being able to dust off those
							dormant development skills and getting back into the nitty gritty of engineering. Here
							are some highlights of the development journey:
						</p>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Technology stack</p>
							<p class={body}>
								Utilized React framework for the frontend and Figma APIs through Typescript for the
								backend.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Increased understanding of the engineering process</p>
							<p class={body}>
								Increased my understanding of engineering processes and what engineers look for when
								analyzing and developing a design.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Plugin development ability</p>
							<p class={body}>
								Produced a concrete demonstration of my proficiency with Figma APIs and plugin
								development skills.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</section>
		<!-- Final designs section -->
		<section class={section} id="final">
			<div>
				<h2 class={h1}>06<br />Final designs</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Error checking at the click of a button</h3>
					<div class={body}>
						TDS Lint displays any color and font inconsistencies present in the current Figma page.
						Selecting an error will highlight and zoom into the selection in the Figma page (<span
							class={label}>Figure 6.0</span
						>
						and <span class={label}>Figure 6.1</span>).
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img src="/tds/running-tds.webp" alt="Running TDS Lint" class="rounded-lg w-full" />
					<div class="">
						<span class={numfoot}>6.0 </span><span class={footer}>Running TDS Lint</span>
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<div class={video}>
						<video src="/tds/tds-lint.mp4" type="video/mp4" class="w-full" autoplay playsinline muted loop />
					</div>
					<div class="">
						<span class={numfoot}>6.1 </span><span class={footer}>Linting functionality</span>
					</div>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Linting Criteria</h3>
					<p class={body}>
						TDS Lint displays any color and font inconsistencies present in the current Figma page.
						Selecting an error will highlight and zoom into the selection in the Figma page (<span
							class={label}>Figure 6.2</span
						>).
					</p>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img
						src="/tds/setting-criteria.webp"
						alt="setting lint criteria"
						class="rounded-lg w-full"
					/>
					<div class="">
						<span class={numfoot}>6.2 </span><span class={footer}>Setting lint criteria</span>
					</div>
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
					<h3 class={h3}>Project impact</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							At this moment, TDS Lint has been released to the entire design team and is currently
							being used in the day to day work of the Visual team. The design tool has seen amazing
							outcomes and great feedback after release!
							<br /><br />Results have seen:
						</p>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={body}>
								Time spent conducting UI reviews <span class={label}>reduced by over 80%</span>.
							</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={body}>
								<span class={label}>100% reduction in errors overall </span>post-UI review.
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
							During this project, I gained insight into the end-to-end process of creating a
							product from conception to launch, especially the engineering portion. Going forward,
							I am able to <span class={label}>better communicate with cross-functional teams and improve my own handoff
							process due to this experience</span>.
							<br /><br />
							In addition, I worked and approached design with an engineering mindset, especially when
							exploring the technical requirements of the project itself. This mindset is what helped
							me <span class={label}>break down the designs and features through priority and also gave me a taste of what
							engineers look for and require from design.</span>
						</p>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
		<div class="flex flex-col gap-8">
			<h2 class="text-2xl sm:text-4xl font-bold">Next project:</h2>
			<Card
				title={'Accessibility at Trulioo'}
				desc={'Introducing Accessibility into the Trulioo Design System'}
				slug="/acc-hero.avif"
				t1={'Design System'}
				t2={'Accessibility'}
				url={'/accessibility'}
			/>
		</div>
		<Footer/>
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
