import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, n as null_to_empty } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/card.js";
import { F as Footer } from "../../../chunks/footer.js";
import { S as SectionLayout } from "../../../chunks/sectionLayout.js";
import { N as NavigationLayout, C as ContainerLayout } from "../../../chunks/containerLayout.js";
import { P as PageLayout } from "../../../chunks/pageLayout.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid3.svelte-dtf8rd{display:flex;gap:32px;@media screen and (min-width: 640px) {\n			display: grid;\n			grid-template-columns: 2fr 6fr; /* 1/4, 5/8, 1/8 proportions */\n			gap: 32px;\n		};@media screen and (min-width: 768px) {\n			display: grid;\n			gap: 32px;\n			grid-template-columns: 2fr 5fr 1fr; /* 1/4, 5/8, 1/8 proportions */\n		}}",
  map: null
};
let h3 = "text-text-default text-lg font-bold sm:text-2xl";
let label = "text-text-default font-bold text-base";
let body = "text-text-subdued text-base font-light";
let videoWrapper = "p-2 sm:p-8 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-text-subdued gap-8 font-light border border-border-subdued";
let video = "w-full shadow-[0_20px_40px_-12px_rgba(50,50,93,0.25)] rounded-lg";
let imgPad = "p-2 pb-1 sm:p-8 sm:pb-4 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-center text-text-subdued gap-8 font-light border border-border-subdued";
let div = "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-13uanfe_START -->${$$result.title = `<title>Christopher Su — Accessibility in the Design System</title>`, ""}<!-- HEAD_svelte-13uanfe_END -->`, ""}  ${validate_component(PageLayout, "PageLayout").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="hidden sm:block">${validate_component(NavigationLayout, "NavigationLayout").$$render($$result, {}, {}, {
        default: () => {
          return `<li data-svelte-h="svelte-14619mu"><a href="#overview" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Overview</a></li> <li data-svelte-h="svelte-1j64f0k"><a href="#audit" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Audit</a></li> <li data-svelte-h="svelte-114qjre"><a href="#opportunity" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Strategy</a></li> <li data-svelte-h="svelte-r4cz5g"><a href="#win" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Sprint one</a></li> <li data-svelte-h="svelte-ckphha"><a href="#wcag" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Sprint two</a></li> <li data-svelte-h="svelte-3wufe2"><a href="#impact" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Impact</a></li> <li data-svelte-h="svelte-pmbzhb"><a href="#retro" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Retrospection</a></li>`;
        }
      })}</div> <div class="justify-items-center"><section id="top" class="max-w-4xl flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16"><div class="flex flex-col gap-4" data-svelte-h="svelte-oi5hd2"><div class="flex flex-col gap-2"><div class="bg-text-default w-full h-0.5"></div></div> <p class="text-text-subdued text-base sm:text-xl font-medium">ACCESSIBILITY IN THE DESIGN SYSTEM</p> <h1 class="h1">Redesigning Components to Incorporate Accessible Design in Trulioo</h1></div> <img${add_attribute("src", "/accessibility/hero.webp", 0)} alt="hero" class="w-full"> ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "brief" }, {}, {
        default: () => {
          return `<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16"><div class="flex flex-col gap-8 sm:gap-16"><div><p class="${escape(null_to_empty(label), true) + " svelte-dtf8rd"}">Timeline</p> <p class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">May 2023 - August 2023</p></div> <div><p class="${escape(null_to_empty(label), true) + " svelte-dtf8rd"}">Skills</p> <div class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}"><p data-svelte-h="svelte-r38km8">Accessibility</p> <p data-svelte-h="svelte-1ggsuik">Design systems</p> <p data-svelte-h="svelte-1q50wk3">Design strategy</p></div></div></div> <div><p class="${escape(null_to_empty(label), true) + " svelte-dtf8rd"}">Summary</p> <p class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">The Trulioo Design System aims to meet <a class="text-action-interactive-default text-blue-50 hover:text-action-interactive-hover underline" href="https://www.w3.org/TR/WCAG21/" target="_blank" data-svelte-h="svelte-14shqq9">WCAG 2.1 AA</a>
							compliance at minimum for all components. <br><br>I was the driver for
							accessibility for our design system and led research and implementation of
							accessibility compliance into the design system.</p></div></div> <div class="bg-border-subdued w-full h-px"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "overview" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-1ts6dr1"><h2 class="h1">01<br>Overview</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${escape(null_to_empty(div), true) + " svelte-dtf8rd"}"><h3 class="${escape(null_to_empty(h3), true) + " svelte-dtf8rd"}">The problem</h3> <div class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">Trulioo is known as a global identity solutions expert, accurately verifying digital
							identity around the world. Despite this, their platform does not provide adequate
							accessibility adherence, inhibiting their ability to capture the global audience and
							leaving them open to potential accessibility-related lawsuits.</div></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${escape(null_to_empty(div), true) + " svelte-dtf8rd"}"><h3 class="${escape(null_to_empty(h3), true) + " svelte-dtf8rd"}">The goal</h3> <div class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">Make accessibility a core foundation of all Trulioo products by incorporating
							accessibility considerations at all points of product development, from design to
							production.</div></div> <div class="${escape(null_to_empty(videoWrapper), true) + " svelte-dtf8rd"}"><p data-svelte-h="svelte-1ucq3ik">WCAG2.1 guidelines</p> <img src="/accessibility/wcag.webp" alt="WCAG2.1 webpage" class="${escape(null_to_empty(video), true) + " svelte-dtf8rd"}"></div>`;
            }
          })} <div class="bg-border-subdued w-full h-px"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "audit" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-1nukriu"><h2 class="h1">02<br>Auditing the design system and platform</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${escape(null_to_empty(div), true) + " svelte-dtf8rd"}"><h3 class="${escape(null_to_empty(h3), true) + " svelte-dtf8rd"}">What we inherited</h3> <div class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">The current design system was not built with accessibility in mind as we found even <span class="${escape(null_to_empty(label), true) + " svelte-dtf8rd"}">basic components failed WCAG 2.1 level A compliance.</span><br><br>
							Furthermore, upon a third-party compliance audit of the Trulioo platform, we found that
							<span class="${escape(null_to_empty(label), true) + " svelte-dtf8rd"}">our platform was non-compliant with WCAG 2.1 level AA success criteria.</span></div></div> <ul class="p-4 sm:p-8 bg-surface-+1 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 justify-between p-16 text-2xl sm:text-4xl font-bold border border-border-subdued" data-svelte-h="svelte-e6rbrd"><li class="flex flex-col text-center gap-2"><p>56%</p> <p class="text-xl text-text-subdued font-normal">Components with insufficient color contrast</p></li> <li class="flex flex-col text-center gap-2"><p>81%</p> <p class="text-xl text-text-subdued font-normal">Components with insufficient markup</p></li> <li class="flex flex-col text-center gap-2"><p>40%</p> <p class="text-xl text-text-subdued font-normal">Components with insufficient interactive states</p></li></ul>`;
            }
          })} <div class="bg-border-subdued w-full h-px gap-2"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "opportunity" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-1v1s5v"><h2 class="h1">03<br>Strategic Planning</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${escape(null_to_empty(div), true) + " svelte-dtf8rd"}"><h3 class="${escape(null_to_empty(h3), true) + " svelte-dtf8rd"}">Defining our north star</h3> <div class="flex flex-col gap-4"><p class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">Before any work was done on either the development or design-side, I collaborated
								with stakeholders to determine key priorities as well as how we would measure the
								success of the project.
								<br><br>
								We came away from these discussions with two key insights:</p> <div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"><p class="${escape(null_to_empty(label), true) + " svelte-dtf8rd"}">Emphasis on user impact and high usage criteria</p> <p class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">Prioritization for accessibility categories will be based on perceived user impact
									in addition to the amount of times users may use or interact with categories
									daily.</p></div> <div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"><p class="${escape(null_to_empty(label), true) + " svelte-dtf8rd"}">WCAG2.1 level AA compliance</p> <p class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">Success for this project will be measured by component compliance with the WCAG2.1
									level AA guidelines.</p></div></div></div>`;
            }
          })}  ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${escape(null_to_empty(div), true) + " svelte-dtf8rd"}"><h3 class="${escape(null_to_empty(h3), true) + " svelte-dtf8rd"}">Creating a game plan</h3> <div class="flex flex-col gap-4"><p class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">Once the categories were broken down by priority, I was able to divide the
								improvement areas in two sprints.<br><br>
								This allowed me to focus my attention on fewer categories at one time, improving quality
								of work in addition to gaining the ability to utilize any insights gained during sprint
								one on sprint two!</p> <div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"><p class="${escape(null_to_empty(label), true) + " svelte-dtf8rd"}">Big wins with immediate user impact</p> <p class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">These include color contrast, interactive states, and target area.</p></div> <div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"><p class="${escape(null_to_empty(label), true) + " svelte-dtf8rd"}">Screen reader and keyboard functionalities</p> <p class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">These include keyboard traversal, focus order, and component markup.</p></div></div></div>`;
            }
          })} <div class="bg-border-subdued w-full h-px gap-2"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "win" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-yylvla"><h2 class="h1">04<br>Big wins with immediate user impact</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${escape(null_to_empty(div), true) + " svelte-dtf8rd"}"><h3 class="${escape(null_to_empty(h3), true) + " svelte-dtf8rd"}">Color contrast</h3> <div class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">Components have been updated to WCAG 2.1 level AA color contrast compliance in two
							steps. <br><br>First, I implemented a new color system that incorporated semantic
							naming conventions. Each color was tested for accessibility compliance within its
							specific use case. <br><br>Next, I attached the new color system to every
							component, ensuring that all components complied with color contrast accessibility.</div></div> <div class="${escape(null_to_empty(imgPad), true) + " svelte-dtf8rd"}"><p data-svelte-h="svelte-12hxvbb">Implementation of color system</p> <img src="/accessibility/color-sys.webp" alt="Implementation of color system" class="rounded-lg w-full"></div> <div class="${escape(null_to_empty(videoWrapper), true) + " svelte-dtf8rd"}"><p data-svelte-h="svelte-192ndep">Contrast compliant components</p> <img src="/accessibility/contrast-compliant.png" alt="Contrast compliant components" class="rounded-lg w-full px-8"></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${escape(null_to_empty(div), true) + " svelte-dtf8rd"}"><h3 class="${escape(null_to_empty(h3), true) + " svelte-dtf8rd"}">Interactive states</h3> <div class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">Existing interactive states for all interactive components have been expanded to
							include, but not limited to, focus, hover, active and error states.<br><br>
							A notable change was the overhaul of our focus indicator to a two-color focus indicator.</div></div> <div class="${escape(null_to_empty(videoWrapper), true) + " svelte-dtf8rd"}"><p data-svelte-h="svelte-uhh5ti">Focus state addition and modification</p> <img src="/accessibility/focus-state.png" alt="Focus state addition and modification" class="rounded-lg w-full px-8"></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${escape(null_to_empty(div), true) + " svelte-dtf8rd"}"><h3 class="${escape(null_to_empty(h3), true) + " svelte-dtf8rd"}">Target area</h3> <div class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">I created in-depth documentation on how to incorporate proper target area size to
							adhere to WCAG 2.1 level AA compliance.</div></div> <div class="${escape(null_to_empty(videoWrapper), true) + " svelte-dtf8rd"}"><p data-svelte-h="svelte-1xizlym">Button target area</p> <img src="/accessibility/target-area.png" alt="Button target area" class="rounded-lg w-full px-8"></div>`;
            }
          })} <div class="bg-border-subdued w-full h-px gap-2"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "wcag" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-f5n6mq"><h2 class="h1">05<br>Screen reader and keyboard functionalities</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${escape(null_to_empty(div), true) + " svelte-dtf8rd"}"><h3 class="${escape(null_to_empty(h3), true) + " svelte-dtf8rd"}">Keyboard traversal</h3> <div class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">Component documentation now includes guidelines on all available keyboard traversal
							options within a given component. Users can now navigate through components regardless
							of disability or circumstance.</div></div> <div class="${escape(null_to_empty(videoWrapper), true) + " svelte-dtf8rd"}"><p data-svelte-h="svelte-15db0w7">Modal keyboard traversal guidelines</p> <img src="/accessibility/keyboard-traversal.png" alt="Modal keyboard traversal guidelines" class="${escape(null_to_empty(video), true) + " svelte-dtf8rd"}"></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${escape(null_to_empty(div), true) + " svelte-dtf8rd"}"><h3 class="${escape(null_to_empty(h3), true) + " svelte-dtf8rd"}">Focus order</h3> <div class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">Component documentation now includes guidelines on initial focus and focus order
							between elements.</div></div> <div class="${escape(null_to_empty(videoWrapper), true) + " svelte-dtf8rd"}"><p data-svelte-h="svelte-2vtqbx">Modal focus order</p> <img src="/accessibility/focus-order.webp" alt="Modal focus order" class="rounded-lg w-full"></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${escape(null_to_empty(div), true) + " svelte-dtf8rd"}"><h3 class="${escape(null_to_empty(h3), true) + " svelte-dtf8rd"}">Component markup</h3> <div class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">Component documentation now includes guidelines on all required markup and ARIA tags.
							Components are now accessible via screen readers and give additional context of
							content they are reading.</div></div> <div class="${escape(null_to_empty(videoWrapper), true) + " svelte-dtf8rd"}"><p data-svelte-h="svelte-phtqpn">Dropdown markup</p> <img src="/accessibility/markup.png" alt="Dropdown markup" class="rounded-lg w-full"></div>`;
            }
          })} <div class="bg-border-subdued w-full h-px"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "impact" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-1iysnt1"><h2 class="h1">06<br>Impact and what&#39;s next</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${escape(null_to_empty(div), true) + " svelte-dtf8rd"}"><h3 class="${escape(null_to_empty(h3), true) + " svelte-dtf8rd"}">Project impact</h3> <div class="flex flex-col gap-4"><p class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">My contributions to improving the accessibility of our design system has led to <span class="${escape(null_to_empty(label), true) + " svelte-dtf8rd"}">80% improvement in WCAG2.1 level AA and AAA compliance.</span> This has led to a more inclusive user experience and positively impacted our brand&#39;s
								reputation for being committed to accessibility and usability.</p></div></div>`;
            }
          })} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${escape(null_to_empty(div), true) + " svelte-dtf8rd"}"><h3 class="${escape(null_to_empty(h3), true) + " svelte-dtf8rd"}">Next steps...</h3> <div class="flex flex-col gap-4"><p class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">Here are a few things to look forward to in future steps:</p> <div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"><p class="${escape(null_to_empty(label), true) + " svelte-dtf8rd"}">Platform level accessible design</p> <p class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">While the initial implementation of accessible design was targeted on the
									component level, future steps will target implementation on a product and platform
									level. This requires a lot of cross-functional team collaboration and is the next
									step on the horizon.</p></div> <div class="flex flex-col gap-px px-4 py-2 rounded-lg border border-border-subdued bg-surface-0"><p class="${escape(null_to_empty(label), true) + " svelte-dtf8rd"}">Accessibility testing processes</p> <p class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">Currently, there are no provisions on accessibility testing within both designer
									and developer processes. A future project could be see the implementation of tools
									like <a href="https://storybook.js.org/addons/@storybook/addon-a11y" class="text-action-interactive-default underline text-blue-50 hover:text-action-interactive-hover" target="_blank" data-svelte-h="svelte-v4fpdt">storybook-addon-a11y</a> within Storybook on the developer side or improved checks for accessibility on
									the designer side.</p></div></div></div>`;
            }
          })} <div class="bg-border-subdued w-full h-px gap-2"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "retro" }, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-b5zbbj"><h2 class="h1">07<br>Retrospection</h2></div> ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${escape(null_to_empty(div), true) + " svelte-dtf8rd"}"><h3 class="${escape(null_to_empty(h3), true) + " svelte-dtf8rd"}">What I learned</h3> <div class="flex flex-col gap-4"><p class="${escape(null_to_empty(body), true) + " svelte-dtf8rd"}">During this project, I&#39;ve had the invaluable opportunity to expand my skill set and
								deepen my understanding of various aspects of accessible design. Accessibility
								shouldn&#39;t be an afterthought when designing products, it should be a <span class="${escape(null_to_empty(label), true) + " svelte-dtf8rd"}">core foundation that is taken in consideration from the start</span>. I&#39;m excited to take these principles into every project I work on from now on!</p></div></div>`;
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
      )}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></section></div> <div class="hidden sm:block" data-svelte-h="svelte-p7rs17"><section class="sticky top-0 flex flex-col items-end justify-end h-screen pt-6 pb-6 sm:pt-8 sm:pb-16"></section></div>`;
    }
  })}`;
});
export {
  Page as default
};
