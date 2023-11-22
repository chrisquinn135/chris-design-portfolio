<script>
	import Card from '../../components/card.svelte';
	import Footer from '../../components/footer.svelte';
	// font styles
	let h1 = 'text-3xl sm:text-4xl font-bold';
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
    <title>Christopher Su — Accessibility in the Design System</title> 
</svelte:head>
<!-- Body content -->
<div class="px-6 pb-24 sm:pb-0 sm:px-8 lg:px-16 grid3">
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
							href="#audit"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Audit</a
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
							href="#win"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>Quick wins</a
						>
					</li>
					<li>
						<a
							href="#wcag"
							class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default"
							>WCAG 2.1 compliance</a
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

	<section id="top" class="flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<div class="bg-text-default w-full h-0.5" />
				<h2 class={h3}>ACCESSIBILITY IN THE DESIGN SYSTEM</h2>
			</div>
			<h1 class={h1}>Introducing Accessibility into the Trulioo Design System</h1>
		</div>
		<img src={'/accessibility/hero.webp'} alt="hero" class='w-full'/>
		<section class={section} id="overview">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16">
				<div class="flex flex-col gap-8 sm:gap-16">
					<div>
						<p class={label}>My Role</p>
						<p class={body}>Product designer</p>
					</div>
					<div>
						<p class={label}>Timeline</p>
						<p class={body}>May 2023 - August 2023</p>
					</div>
				</div>
				<div>
					<p class={label}>Overview</p>
					<p class={body}>
						The Trulioo Design System aims to meet <a
							class="text-action-interactive-default text-blue-50 hover:text-action-interactive-hover"
							href="https://www.w3.org/TR/WCAG21/"
							target="_blank">WCAG 2.1 AA</a
						>
						compliance at minimum for all components. <br /><br />I led research and incorporation
						of accessibility compliance into the design system, reshaped the handoff process to
						incorporate accessibility compliance and led workshops to support and educate the design
						and development teams about the importance and implementation of accessible design.
					</p>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</section>
		<!-- problem section -->
		<section class={section} id="problem">
			<div>
				<h2 class={h1}>01<br />Problem space</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Current implementation</h3>
					<div class={body}>
						Trulioo is known as a global identity solutions expert, accurately verifying digital
						identity around the world. Despite this, their platform does not provide adequate
						accessibility adherence, inhibiting their ability to capture the global audience and
						leaving them open to potential accessibility-related lawsuits.
					</div>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>The goal</h3>
					<div class={body}>
						Make accessibility a core foundation of all Trulioo products by incorporating
						accessibility considerations at all points of product development, from design to
						production.
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img src="/accessibility/guideline.webp" alt="WCAG2.1 webpage" class="rounded-lg w-full" />
					<div class="">
						<span class={numfoot}>1.0 </span><span class={footer}>WCAG2.1 webpage</span>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</section>
		<!-- exploration section -->
		<section class={section} id="audit">
			<div>
				<h2 class={h1}>02<br />Auditing the design system and platform</h2>
			</div>
			<div class={container}>
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
					class="p-4 sm:p-8 bg-surface-+1 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 justify-between p-16 text-2xl sm:text-4xl font-bold"
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
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
		<!-- opportunity section -->
		<section class={section} id="opportunity">
			<div>
				<h2 class={h1}>03<br />Opportunity points</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Categrozing improvement areas</h3>
					<div class="flex flex-col gap-4">
						<p class={body}>
							I prioritized key improvement areas into <span class={label}
								>two stages based on perceived ease of implementation and immediate impact level.
							</span>
						</p>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>Quick wins with immediate user impact</p>
							<p class={body}>These include color contrast, interactive states, and target area.</p>
						</div>
						<div
							class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"
						>
							<p class={label}>WCAG2.1 level AA compliance</p>
							<p class={body}>
								These include keyboard traversal, focus order, and component markup.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
		<!-- Design iteration section -->
		<section class={section} id="win">
			<div>
				<h2 class={h1}>04<br />Quick wins with immediate user impact</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Color contrast</h3>
					<div class={body}>
						Components have been updated to WCAG 2.1 level AA color contrast compliance in two
						steps. <br /><br />First, I implemented a new color system that incorporated semantic
						naming conventions. Each color was tested for accessibility compliance within its
						specific use case (<span class={label}>Figure 4.0</span> and
						<span class={label}>Figure 4.1</span>). <br /><br />Next, I attached the new color
						system to every component, ensuring that all components complied with color contrast
						accessibility.
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img
						src="/accessibility/color-sys.webp"
						alt="Implementation of color system"
						class="rounded-lg w-full"
					/>
					<div class="">
						<span class={numfoot}>4.0 </span><span class={footer}
							>Implementation of color system</span
						>
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img
						src="/accessibility/contrast-compliant.webp"
						alt="Contrast compliant components"
						class="rounded-lg w-full"
					/>
					<div class="">
						<span class={numfoot}>4.1 </span><span class={footer}
							>Contrast compliant components</span
						>
					</div>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Interactive states</h3>
					<div class={body}>
						Existing interactive states for all interactive components have been expanded to
						include, but not limited to, focus, hover, active and error states (<span class={label}
							>Figure 4.2</span
						>).<br /><br />
						A notable change was the overhaul of our focus indicator to a two-color focus indicator.
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img
						src="/accessibility/focus-state.webp"
						alt="Focus state addition and modification"
						class="rounded-lg w-full"
					/>
					<div class="">
						<span class={numfoot}>4.2 </span><span class={footer}
							>Focus state addition and modification</span
						>
					</div>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Target area</h3>
					<div class={body}>
						I created in-depth documentation on how to incorporate proper target area size to adhere
						to WCAG 2.1 level AA compliance (<span class={label}>Figure 4.3</span>).
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img src="/accessibility/target-area.webp" alt="Button target area" class="rounded-lg w-full" />
					<div class="">
						<span class={numfoot}>4.3 </span><span class={footer}>Button target area</span>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
		<!-- development section -->
		<section class={section} id="wcag">
			<div>
				<h2 class={h1}>05<br />WCAG 2.1 AA compliance</h2>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Keyboard traversal</h3>
					<div class={body}>
						Component documentation now includes guidelines on all available keyboard traversal
						options within a given component. Users can now navigate through components regardless
						of disability or circumstance (<span class={label}>Figure 5.0</span>).
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img
						src="/accessibility/keyboard-traversal.webp"
						alt="Modal keyboard traversal guidelines"
						class="rounded-lg w-full"
					/>
					<div class="">
						<span class={numfoot}>5.0 </span><span class={footer}
							>Modal keyboard traversal guidelines</span
						>
					</div>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Focus order</h3>
					<div class={body}>
						Component documentation now includes guidelines on initial focus and focus order between
						elements (<span class={label}>Figure 5.1</span>).
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img src="/accessibility/focus-order.webp" alt="Modal focus order" class="rounded-lg w-full" />
					<div class="">
						<span class={numfoot}>5.0 </span><span class={footer}>Modal focus order</span>
					</div>
				</div>
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Component markup</h3>
					<div class={body}>
						Component documentation now includes guidelines on all required markup and ARIA tags.
						Components are now accessible via screen readers and give additional context of content
						they are reading (<span class={label}>Figure 5.2</span>).
					</div>
				</div>
				<div class="flex flex-col gap-2 items-end">
					<img src="/accessibility/markup.webp" alt="Dropdown markup" class="rounded-lg w-full" />
					<div class="">
						<span class={numfoot}>5.0 </span><span class={footer}>Dropdown markup</span>
					</div>
				</div>
			</div>
			<div class="bg-border-subdued w-full h-px" />
		</section>
		<!-- Impact section -->
		<section class={section} id="impact">
			<div>
				<h2 class={h1}>06<br />Impact and retrospection</h2>
			</div>
			<div class={container}>
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
			</div>
			<div class={container}>
				<div class={div}>
					<h3 class={h3}>Retrospection</h3>
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
			</div>
			<div class="bg-border-subdued w-full h-px gap-2" />
		</section>
		<div class="flex flex-col gap-8">
			<h2 class="text-2xl sm:text-4xl font-bold">Next project:</h2>
			<Card
				title={'Asset Manager'}
				desc={'Centralizing Assets for Improved Consistency Across the Platform'}
				slug="/asset-card.png"
				t1={'Product Design'}
				t2={'Design Tooling'}
				url={'/assetmanager'}
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
