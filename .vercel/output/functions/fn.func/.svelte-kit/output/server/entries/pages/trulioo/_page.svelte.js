import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/card.js";
import { F as Footer } from "../../../chunks/footer.js";
import { S as SectionLayout } from "../../../chunks/sectionLayout.js";
import { P as PageLayout } from "../../../chunks/pageLayout.js";
let label = "text-text-default font-bold text-base";
let body = "text-text-subdued text-base font-light";
let videoWrapper = "p-2 sm:p-8 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-text-subdued gap-8 font-light border border-border-subdued";
let video = "w-full shadow-[0_20px_40px_-12px_rgba(50,50,93,0.25)] rounded-lg";
let img = "p-2 sm:p-8 bg-surface-+1 rounded-lg flex flex-col justify-center items-center text-center text-text-subdued gap-8 font-light border border-border-subdued";
let div = "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1c09blb_START -->${$$result.title = `<title>Christopher Su — Trulioo</title>`, ""}<!-- HEAD_svelte-1c09blb_END -->`, ""}  ${validate_component(PageLayout, "PageLayout").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="hidden sm:block"></div> <section class="flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16" id="top"><div class="flex flex-col gap-4" data-svelte-h="svelte-1vm07pb"><div class="flex flex-col gap-2"><div class="bg-text-default w-full h-0.5"></div></div> <p class="text-text-subdued text-base sm:text-xl font-medium">TRULIOO — LINK LEADS MANAGER</p> <h1 class="h1">Designing the link managment system to improve lead conversion</h1></div> <img src="/lead/hero.png" alt="modal design rational"> ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "brief" }, {}, {
        default: () => {
          return `<div${add_attribute("class", div, 0)}><div class="flex flex-col gap-8 sm:gap-16"><div><p${add_attribute("class", label, 0)}>Timeline</p> <p${add_attribute("class", body, 0)}>2 months, shipped and launched</p></div> <div><p${add_attribute("class", label, 0)}>Team</p> <div${add_attribute("class", body, 0)}><p data-svelte-h="svelte-7yjnq7">1 Product Manager</p> <p data-svelte-h="svelte-1u0sjfg">1 Designer</p> <p data-svelte-h="svelte-1d47pc7">2 Developers</p></div></div></div> <div><p${add_attribute("class", label, 0)}>Summary</p> <p${add_attribute("class", body, 0)}>The Trulioo platform is utilized for creating workflows and overseeing consumer leads
						generated through these workflows.
						<br><br>
						I designed a new linking flow that allows customers to link individual leads together in
						their client manager. By linking two leads together, they will appear on each other’s lead
						view and provide more context and details for lead conversion.
						<br><br>
						Please reach out for the extended case study.</p></div></div> <div class="bg-border-subdued w-full h-px gap-2"></div> <h2 class="h1 sm:text-center " data-svelte-h="svelte-qmpp20">Highlights at a glance</h2> <div class="flex flex-col gap-4"><div${add_attribute("class", videoWrapper, 0)}>A high-level overview of all leads linked with the current lead view.
					<img src="/lead/home.png" alt="modal design rational"${add_attribute("class", video, 0)}></div></div> <div class="flex flex-col gap-8"><div${add_attribute("class", img, 0)}>Customers have the choice to either link an existing lead or create a new lead and link
					it.
					<video src="/lead/exist.mp4" type="video/mp4"${add_attribute("class", video, 0)} autoplay playsinline muted loop></video> <video src="/lead/new-lead.mp4" type="video/mp4"${add_attribute("class", video, 0)} autoplay playsinline muted loop></video></div></div> <div class="flex flex-col gap-8"><div${add_attribute("class", videoWrapper, 0)}>Manage links by changing relationships, removing links or navigating to linked lead views.
					<video src="/lead/editting.mp4" type="video/mp4"${add_attribute("class", video, 0)} autoplay playsinline muted loop></video></div></div> <div class="bg-border-subdued w-full h-px gap-2"></div>`;
        }
      })}  ${validate_component(SectionLayout, "SectionLayout").$$render($$result, { id: "retrospection" }, {}, {
        default: () => {
          return `<h2 class="h1" data-svelte-h="svelte-160fts0">Reflections:</h2> <div class="grid grid-cols-1 sm:grid-cols-2 gap-16"><div class="flex flex-row gap-4"><div class="w-0.5 bg-border-subdued h-full"></div> <div${add_attribute("class", body, 0)}><p${add_attribute("class", label, 0)}>Feature design experience</p> <p data-svelte-h="svelte-1txjvn7">Working on this project gave me concerte experience in feature design and working with
							shifting priorities and timelines. I was able to build great relations with both
							developers and the project manager and we were able to ship a great product together in the
							end.</p></div></div> <div class="flex flex-row gap-4"><div class="w-0.5 bg-border-subdued h-full"></div> <div${add_attribute("class", body, 0)}><p${add_attribute("class", label, 0)}>Working with the design system</p> <p data-svelte-h="svelte-1kj81au">In previous projects, I worked primarily on design system-scoped projects. During this
							project, I was able to work first-hand with the design system I was building. This
							allowed to me to gain valuable insights into design system&#39;s components and
							interactions, fostering a deeper understanding of its overall architecture and
							usability.</p></div></div></div> <div class="bg-border-subdued w-full h-px gap-2"></div>`;
        }
      })} <div class="flex flex-col gap-8"><h2 class="text-2xl sm:text-4xl font-bold" data-svelte-h="svelte-1qlqdgb">Next projects:</h2> <div class="flex flex-col sm:flex-row gap-16 sm:gap-0">${validate_component(Card, "Card").$$render(
        $$result,
        {
          title: "ASSET MANAGER — CUSTOM FIGMA PLUGIN",
          desc: "Creating a Custom Tool for Consistent Assets Across the Platform",
          slug: "/assetsq.png",
          url: "/assetmanager",
          key: ["Figma Plugin APIs", "Product design"]
        },
        {},
        {}
      )} ${validate_component(Card, "Card").$$render(
        $$result,
        {
          title: "ACCESSIBILITY IN THE DESIGN SYSTEM",
          desc: "Redesigning Components to Incorporate Accessible Design",
          slug: "/accsq.png",
          url: "/accessibility",
          key: ["Design systems", "Accessibility"]
        },
        {},
        {}
      )}</div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</section> <div class="hidden sm:block" data-svelte-h="svelte-p7rs17"><section class="sticky top-0 flex flex-col items-end justify-end h-screen pt-6 pb-6 sm:pt-8 sm:pb-16"></section></div>`;
    }
  })}`;
});
export {
  Page as default
};
