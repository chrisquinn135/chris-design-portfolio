import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/card.js";
import { F as Footer } from "../../../chunks/footer.js";
import { S as SectionLayout } from "../../../chunks/sectionLayout.js";
import { N as NavigationLayout, C as ContainerLayout } from "../../../chunks/containerLayout.js";
import { P as PageLayout } from "../../../chunks/pageLayout.js";
let h3 = "text-text-default text-lg font-bold sm:text-2xl";
let label = "text-text-default font-bold text-base";
let body = "text-text-subdued text-base font-light";
let code = "bg-surface-+1 py-1 px-2 text-text-default text-sm";
let videoWrapper = "p-2 sm:p-8 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-text-subdued gap-8 font-light border border-border-subdued";
let video = "w-full shadow-[0_20px_40px_-12px_rgba(50,50,93,0.25)] rounded-lg";
let img = "p-2 sm:p-8 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-center text-text-subdued gap-8 font-light border border-border-subdued";
let imgPad = "p-2 pb-1 sm:p-8 sm:pb-4 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-center text-text-subdued gap-8 font-light border border-border-subdued";
let div = "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-nybjhc_START -->${$$result.title = `<title>Christopher Su — Asset Manager</title>`, ""}<!-- HEAD_svelte-nybjhc_END -->`, ""}  ${validate_component(PageLayout, "PageLayout").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="hidden sm:block">${validate_component(NavigationLayout, "NavigationLayout").$$render($$result, {}, {}, {
        default: () => {
          return `<li data-svelte-h="svelte-14619mu"><a href="#overview" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Overview</a></li> <li data-svelte-h="svelte-57os3t"><a href="#asset" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Research</a></li> <li data-svelte-h="svelte-1uq2bsk"><a href="#ideation" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Core issues</a></li> <li data-svelte-h="svelte-1xnkd5q"><a href="#design" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Design iterations</a></li> <li data-svelte-h="svelte-13w8pk2"><a href="#dev" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Development</a></li> <li data-svelte-h="svelte-144vyud"><a href="#launch" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Final experience</a></li> <li data-svelte-h="svelte-3wufe2"><a href="#impact" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Impact</a></li> <li data-svelte-h="svelte-1259dlw"><a href="#retrospection" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Retrospection</a></li>`;
        }
      })}</div> <div class="justify-items-center"><section id="top" class="max-w-4xl flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16"><div class="flex flex-col gap-4" data-svelte-h="svelte-1lsspuw"><div class="flex flex-col gap-2"><div class="bg-text-default w-full h-0.5"></div></div> <p class="text-text-subdued text-base sm:text-xl font-medium">ASSET MANAGER — CUSTOM FIGMA PLUGIN</p> <h1 class="h1">Creating a Custom Tool for Consistent Assets</h1></div> <img${add_attribute("src", "/asset/heroadj.webp", 0)} alt="hero" class="rounded-lg w-full"> ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "brief" }, {}, {
        default: () => {
          return `<div${add_attribute("class", div, 0)}><div class="flex flex-col gap-8 sm:gap-16"><div><p${add_attribute("class", label, 0)}>Timeline</p> <p${add_attribute("class", body, 0)}>August 2023 - October 2023</p></div> <div><p${add_attribute("class", label, 0)}>Skills</p> <div${add_attribute("class", body, 0)}><p data-svelte-h="svelte-if2a5o">Figma plugin APIs</p> <p data-svelte-h="svelte-1nidl0l">Product design</p> <p data-svelte-h="svelte-l79nvr">Design tools</p> <p data-svelte-h="svelte-4bq49e">Interaction design</p></div></div></div> <div><p${add_attribute("class", label, 0)}>Summary</p> <p${add_attribute("class", body, 0)}>Asset Manager is a Figma plugin that stores assets such as illustrations and data used
							within the Trulioo Platform for quick access and input.
							<br><br>
							I led both the design and development efforts for this project, collaborating daily with
							leadership and the design team to ensure product fit. I conducted audits, facilitated workshops
							and led the visual, interaction and user flow tracks all while leading the technical implementation
							of the tool from conception to launch.</p></div></div> <div${add_attribute("class", videoWrapper, 0)}><p class="text-text-default text-lg sm:text-2xl text-center" data-svelte-h="svelte-12qoxn8">Swap assets directly onto the canvas — providing direct integration into designer
						workflows.</p> <video src="/asset/swap-assets.mp4" type="video/mp4"${add_attribute("class", video, 0)} autoplay playsinline muted loop></video> <img src="/asset/asset-hero2.png" alt="User journey map and related problem origins" class="rounded-lg w-full"></div> <div class="bg-border-subdued w-full h-px"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "overview" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-1ts6dr1"><h2 class="h1">01<br>Overview</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>The problem</h3> <div${add_attribute("class", body, 0)}>The Trulioo platform comprises of a diverse range of products, each overseen by its
							own dedicated team. This led to isolated work environments, where teams operated in
							silos with limited cross-team communication. <br><br> <span${add_attribute("class", label, 0)}>These isolated teams gave rise to inconsistencies in assets across the various
								products
							</span>, necessitating time-consuming review sessions and error-checking processes.</div></div> <div${add_attribute("class", imgPad, 0)}><p data-svelte-h="svelte-jtfgr1">Three empty states with different illustrations and text</p> <img src="/asset/multiple-comb.png" alt="User journey map and related problem origins" class="rounded-lg w-full"></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>The goal</h3> <div${add_attribute("class", body, 0)}>Ensure a unified asset experience across the platform. Assets include illustrations
							and reusable text throughout the platform.</div></div> <div class="p-2 pb-1 sm:pb-4 pr-0 sm:pr-0 sm:p-8 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-center text-text-subdued gap-8 font-light border border-border-subdued" data-svelte-h="svelte-1g12i8m"><p>Example asset combinations</p> <img src="/asset/current-implementation.png" alt="User journey map and related problem origins" class="rounded-lg w-full"></div> `;
            }
          })} <div class="bg-border-subdued w-full h-px"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "asset" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-190ptej"><h2 class="h1">02 <br>Pinpointing the core problem</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>What we started with</h3> <div${add_attribute("class", body, 0)}>The current platform had an abundance of inconsistent asset usage across its different
							products. <br><br>An audit of the production environment and all designs handed
							off within the last six months revealed that
							<span${add_attribute("class", label, 0)}>every product had different variations in common asset use cases.</span></div></div> <ul class="p-4 sm:p-8 bg-surface-+1 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 justify-between p-16 text-2xl sm:text-4xl font-bold border border-border-subdued" data-svelte-h="svelte-yeam9t"><li class="flex flex-col text-center gap-2"><p>52</p> <p class="text-xl text-text-subdued font-normal">Unique illustration usages</p></li> <li class="flex flex-col text-center gap-2"><p>23</p> <p class="text-xl text-text-subdued font-normal">Unique use-cases</p></li> <li class="flex flex-col text-center gap-2"><p>2.26</p> <p class="text-xl text-text-subdued font-normal">Average variations</p></li></ul>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Analyzing the user journey</h3> <p${add_attribute("class", body, 0)}>Structuring the user journey allowed me to identify the pain points in the asset
							selection process.
							<br><br>
							Designers had been referencing different designs and use-cases when using assets, resulting
							in conflicting usage across teams. In addition, the current process required a significant
							time investment in the designer workflows due to the neccessity for manual coordination
							between designers.</p></div> <div${add_attribute("class", img, 0)}><div data-svelte-h="svelte-7wprjp">User journey map and related problem origins</div> <img src="/asset/user-flow.png" alt="User journey map and related problem origins" class="rounded-lg w-full"></div>`;
            }
          })} <div class="bg-border-subdued w-full h-px gap-2"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "ideation" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-29lbsu"><h2 class="h1">03<br>Tackling the Backbone of the Project</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Creating an asset repository</h3> <p${add_attribute("class", body, 0)}>To create a unified asset repository, I lead several workshops with our design team to
							consolidate each inconsistent asset usage found in the audit, making sure that <span${add_attribute("class", label, 0)}>each unique use case had a single set of illustration and text combinations</span>.
							<br> <br>
							Having established an asset repository, I was prepared to create the tool for managing
							and housing this repository.</p></div> <div${add_attribute("class", img, 0)}><p data-svelte-h="svelte-1rqhfrv">Consolidating similar use cases together</p> <img src="/asset/consolidation.png" alt="Consolidating different asset combinations" class="rounded-lg w-full"></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Rethinking the user journey</h3> <div${add_attribute("class", body, 0)}>I addressed the issues found with the previous user journey by mapping out what the
							journey would look like with a design tool.<br><br>
							By integrating a design tool into the user journey, we are able to significantly decrease
							the time investment necessary in addition to ensuring consistent asset usage.</div></div> <div${add_attribute("class", img, 0)}><p data-svelte-h="svelte-10afeoq">Updated user flow</p> <img src="/asset/updated-flow.png" alt="Consolidating different asset combinations" class="rounded-lg w-full"></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Deciding on a tool</h3> <div${add_attribute("class", body, 0)}>Several tools were suggested to house our asset repository, including tools like
							Google Docs and custom Figma plugins.<br><br>
							I made the decision to create a custom Figma plugin because of its superior integration
							capabilities into designer workflows. While the development period would be higher, the
							plugin would cut down on the asset selection journey and allow designers to focus on delivering
							great user experiences.</div></div> <div${add_attribute("class", img, 0)}><img src="/asset/figma-doc.png" alt="User journey map and related problem origins" class="rounded-lg w-full"></div>`;
            }
          })} <div class="bg-border-subdued w-full h-px gap-2"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "design" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-1qd445s"><h2 class="h1">04<br>Design iteration</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Testing initial designs</h3> <div${add_attribute("class", body, 0)}>Once the initial designs were complete, I ran moderated user tests with three
							designers and iterated on the designs based on the gathered insights.</div></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Improving asset organization and searchability</h3> <div${add_attribute("class", body, 0)}>The first iteration of designs featured a tag filter system that allowed users to
							filter results by the asset type. <br> <br>I improved this with the implementation
							of a tab list component to separate out illustration and text assets into individual
							screens and replacing the tag filter system with a more robust filter and sort
							mechanism.</div></div> <div${add_attribute("class", imgPad, 0)}><p data-svelte-h="svelte-xsu4b6">Organization and filter system improvements</p> <img src="/asset/org-filter.png" alt="Consolidating different asset combinations" class="rounded-lg w-full"></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Improving the asset insertion screen</h3> <div class="flex flex-col gap-4"><p${add_attribute("class", body, 0)}>Initial designs for inserting/swapping assets required users to click on individual
								rows and the actual swap vs insert interaction was determined whether the designer
								had anything selected within the frame. This combination was extremely confusing for
								first time users and lacked a clear micro interaction structure. <br><br>
								I improved this by separating out the insert and swap functionality into two separate
								buttons within each row. This allows
								<span${add_attribute("class", label, 0)}>better signifiers into the available options for the designer</span>. Additional design changes described below.</p> <div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"><p${add_attribute("class", label, 0)}>Improved descriptions</p> <p${add_attribute("class", body, 0)}>Descriptions were expanded to include &quot;Use case&quot; and &quot;Products&quot; sections to give
									designers better context on which asset to use.</p></div> <div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"><p${add_attribute("class", label, 0)}>&quot;Back to results&quot; icon button</p> <p${add_attribute("class", body, 0)}>The outline button was replaced with an icon button to reduce visual emphasis,
									allowing the user to focus on more important information within the screen.</p></div> <div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"><p${add_attribute("class", label, 0)}>Editable string text</p> <p${add_attribute("class", body, 0)}>String text is contained within input fields for greater control over the text
									customization.</p></div></div></div> <div${add_attribute("class", imgPad, 0)}><p data-svelte-h="svelte-1uckr3y">Individual asset screen improvements</p> <img src="/asset/improved-ind.png" alt="Individual asset screen improvements" class="rounded-lg w-full"></div>`;
            }
          })} <div class="bg-border-subdued w-full h-px gap-2"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "dev" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-17e57ut"><h2 class="h1">05<br>Development</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Diving into implementation</h3> <div${add_attribute("class", body, 0)}>The following section is a quick dive into the technical implementation of the plugin.
							If you&#39;re more interested in the designs, feel free to jump to the <a class="text-action-interactive-default text-blue-50 hover:text-action-interactive-hover underline" href="#launch" data-svelte-h="svelte-1ip263o">launch</a>
							section to see the final designs and implementation.
							<br><br>
							I lead development efforts for both the frontend (UI) and backend logic and collaborated
							with developers on code best practices and implementation.<br><br>For this
							section, I&#39;ll focus mainly on the component insertion logic, namely adding and
							swapping assets. If you&#39;d like to learn more, you can visit the
							<a class="text-action-interactive-default text-blue-50 hover:text-action-interactive-hover underline" href="https://github.com/trulioo-visual-team/asset-finder" target="_blank" data-svelte-h="svelte-1shr86p">source code</a>
							or reach out to
							<a class="text-action-interactive-default text-blue-50 hover:text-action-interactive-hover underline" href="https://www.linkedin.com/in/chrisquinn135/" target="_blank" data-svelte-h="svelte-1qdbwx0">me</a> for more information!</div></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Keys, keys, keys</h3> <div${add_attribute("class", body, 0)}>In order to insert the assets onto the canvas, we first have to import the component
							through its master component key. I utilized the <a class="text-action-interactive-default text-blue-50 hover:text-action-interactive-hover underline" href="https://www.figma.com/community/plugin/758276196886757462/node-inspector" target="_blank" data-svelte-h="svelte-hlfil8">Node Inspector</a>
							plugin to find the keys for all listed assets and stored them along with their specific
							use case information within a JSON file for quick lookup.</div></div> <div${add_attribute("class", img, 0)}><img src="/asset/json.png" alt="Individual asset screen improvements" class="rounded-lg w-full shadow-[0_20px_40px_-12px_rgba(50,50,93,0.25)]"></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>&quot;Add asset&quot; logic</h3> <div${add_attribute("class", body, 0)}>To add an asset onto the page, we first call the <code${add_attribute("class", code, 0)}>importComponentByKeyAsync(key)</code>
							function in order to import desired component into the plugin.<br><br>
							Once an instance is imported, we call the <code${add_attribute("class", code, 0)}>createInstance()</code> function
							and place the instance in the center of the viewport. Lastly, we center the newly created
							instance within the viewport.</div></div> <div${add_attribute("class", img, 0)}><img src="/asset/addins.png" alt="Individual asset screen improvements" class="rounded-lg w-full shadow-[0_20px_40px_-12px_rgba(50,50,93,0.25)]"></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>&quot;Swap asset&quot; logic</h3> <div${add_attribute("class", body, 0)}>Swapping assets differs slightly in the logic required due to two main factors, the
							amount of items selected and the types of the items selected. Because the user has the
							possibility to select more than one item, we&#39;ll have to iterate through every selected
							item using a for-loop. Before performing any swaps, we&#39;ll additionally have to
							validate that each item is an <code${add_attribute("class", code, 0)}>&quot;INSTANCE&quot;</code> object.
							<br><br>
							Once these conditions are satisfied, it becomes much more simple. We&#39;ll import the desired
							component with the <code${add_attribute("class", code, 0)}>importComponentByKeyAsync(key)</code> function,
							swap the item with the desired component using
							<code${add_attribute("class", code, 0)}>swapComponent(importComponent)</code> function, and we are done!</div></div> <div${add_attribute("class", img, 0)}><img src="/asset/swapins.png" alt="Individual asset screen improvements" class="rounded-lg w-full shadow-[0_20px_40px_-12px_rgba(50,50,93,0.25)]"></div>`;
            }
          })} <div class="bg-border-subdued w-full h-px"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "launch" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-y0ff6v"><h2 class="h1">06<br>Final experience</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Efficient organization</h3> <div${add_attribute("class", body, 0)}>The asset manager provides organization of assets under two tabs, &quot;Illustrations&quot; and
							&quot;Text&quot;, empowering users to locate specific assets swiftly through efficient search,
							filtering, and sorting functionalities.</div></div> <div${add_attribute("class", imgPad, 0)}><img src="/asset/organization.png" alt="illustration assets" class="rounded-lg w-full"></div> <div${add_attribute("class", img, 0)}><video src="/asset/filter-sort.mp4" type="video/mp4"${add_attribute("class", video, 0)} autoplay playsinline muted loop></video></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Centralized Assets</h3> <div${add_attribute("class", body, 0)}>The individual pages draw assets from the centralized repository, ensuring that users
							are always using the most up-to-date illustrations and text.</div></div> <div${add_attribute("class", imgPad, 0)}><img src="/asset/individual-view.png" alt="illustration assets" class="rounded-lg w-full"></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Swap and add assets</h3> <p${add_attribute("class", body, 0)}>Users have the option to either swap the current selection or add individual assets
							directly onto canvas, providing direct integration into the user&#39;s workflow.</p></div> <div${add_attribute("class", imgPad, 0)}><img src="/asset/export-single.png" alt="illustration assets" class="rounded-lg w-full"></div> <div${add_attribute("class", img, 0)}><video src="/asset/swap-ill-text.mp4" type="video/mp4"${add_attribute("class", video, 0)} autoplay playsinline muted loop></video></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Swap groups</h3> <p${add_attribute("class", body, 0)}>For text assets, users have the option to swap entire groups of content at once rather
							than swapping out content individually.</p></div> <div${add_attribute("class", imgPad, 0)}><img src="/asset/export-double.png" alt="illustration assets" class="rounded-lg w-full"></div> <div${add_attribute("class", img, 0)}><video src="/asset/swap-multiple-node.mp4" type="video/mp4"${add_attribute("class", video, 0)} autoplay playsinline muted loop></video></div>`;
            }
          })} <div class="bg-border-subdued w-full h-px gap-2"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "impact" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-1go2ni2"><h2 class="h1">07<br>Impact and what&#39;s next</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Shipped and integrated</h3> <div class="flex flex-col gap-4"><p${add_attribute("class", body, 0)}>The asset manager tool has been officially released to the entire design team and
								integrated into every designer&#39;s workflow, leading to great improvements in both the
								efficiency and consistency of new features.
								<br><br>
								In addition, stakeholder interest in future design tooling projects skyrocketed with
								several ideas in the pipeline for the future.</p></div></div> <div${add_attribute("class", imgPad, 0)}><p data-svelte-h="svelte-jtno37">KPI results since release</p> <img src="/asset/improve.png" alt="Individual asset screen improvements" class="rounded-lg w-full"></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>Where are we going?</h3> <div class="flex flex-col gap-4"><p${add_attribute("class", body, 0)}>We are still experimenting and collecting metrics on how the Asset Manager can be
								improved in the future adoption and impact-wise, but as a start, here are some
								things we&#39;re looking at for the future of the Asset Manager!</p> <div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"><p${add_attribute("class", label, 0)}>Cross-functional implementation</p> <p${add_attribute("class", body, 0)}>Being able to integrate to the entire design team is great, but what if we could
									integrate to the entire organization. Developers could be pulling from the same
									database as designers, ensuring 100% accuracy and consistency in both design and
									development implementation.</p></div> <div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"><p${add_attribute("class", label, 0)}>Cloud database integration</p> <p${add_attribute("class", body, 0)}>Currently, component keys and asset information is being stored locally within the
									plugin source code. Moving it to an external database would allow designers to
									update, add and remove assets without releasing a new version of the plugin.</p></div> <div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"><p${add_attribute("class", label, 0)}>Analytics and metrics tracking</p> <p${add_attribute("class", body, 0)}>The Asset Manager could track all insertions of assets across all projects,
									allowing the team to get deeper insight into what assets are being used, not used,
									and edited.</p></div></div></div>`;
            }
          })} <div class="bg-border-subdued w-full h-px gap-2"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "retrospection" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-vacbvi"><h2 class="h1">08<br>Retrospection</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", div, 0)}><h3${add_attribute("class", h3, 0)}>What I learned</h3> <div class="flex flex-col gap-4"><p${add_attribute("class", body, 0)}>During this project, I was able to gain valuable experience in <span${add_attribute("class", label, 0)}>collaborative design and stakeholder management</span>. Because this project affects the design process of all designers in our team, I
								had to ensure that I got feedback and buy in from stakeholders and designers.
								<br><br>In addition, I was able to work hand-in-hand with developers on not only
								the design process, but also the development process. Not only did I foster a great
								relationship with them, but I also got hands-on insight on the developer&#39;s thought
								process.<br> <br>
								Lastly, I was able to continue
								<span${add_attribute("class", label, 0)}>polishing up my skills in Figma plugin development and bring great results to our
									design system!</span></p></div></div>`;
            }
          })} <div class="bg-border-subdued w-full h-px gap-2"></div>`;
        }
      })} <div class="flex flex-col gap-8"><h2 class="text-2xl sm:text-4xl font-bold" data-svelte-h="svelte-1qlqdgb">Next projects:</h2> <div class="flex flex-col sm:flex-row gap-16 sm:gap-0">${validate_component(Card, "Card").$$render(
        $$result,
        {
          title: "STATE FARM DESIGN SYSTEM",
          desc: "Modernizing the system for the next generation",
          slug: "/sfds.png",
          url: "/sfds",
          key: ["February 2024 - Present", "Design systems"]
        },
        {},
        {}
      )} ${validate_component(Card, "Card").$$render(
        $$result,
        {
          title: "DESIGN TOKENS",
          desc: "Implementing design tokens at State Farm",
          slug: "/token.png",
          url: "/designToken",
          key: ["May 2024 - October 2024", "Design systems", "System design"]
        },
        {},
        {}
      )}</div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</section></div> <div class="hidden sm:block" data-svelte-h="svelte-p7rs17"><section class="sticky top-0 flex flex-col items-end justify-end h-screen pt-6 pb-6 sm:pt-8 sm:pb-16"></section></div>`;
    }
  })}`;
});
export {
  Page as default
};
