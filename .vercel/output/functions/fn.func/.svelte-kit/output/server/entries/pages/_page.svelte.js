import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { C as Card } from "../../chunks/card.js";
import { F as Footer } from "../../chunks/footer.js";
import { P as PageLayout } from "../../chunks/pageLayout.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bounce.svelte-gdlg43{animation:svelte-gdlg43-bounce 2s ease infinite}@keyframes svelte-gdlg43-bounce{0%,20%,50%,80%,100%{transform:translateX(0)}40%{transform:translateX(10px)}60%{transform:translateX(5px)}}.rotate.svelte-gdlg43{transform-origin:right top !important;transform:rotate(90deg) translateY(0%) !important}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1u1xt97_START -->${$$result.title = `<title>Christopher Su</title>`, ""}<!-- HEAD_svelte-1u1xt97_END -->`, ""}  ${validate_component(PageLayout, "PageLayout").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="hidden sm:block"></div> <div class="justify-items-center"><section class="max-w-4xl flex flex-col gap-y-8 pt-6 pb-6 sm:pt-8 sm:pb-16" id="top"><div class="flex flex-col gap-y-8 content-end pr-8" data-svelte-h="svelte-1y2qn6m"><div class="text-2xl leading-relaxed sm:text-base md:text-lg text-text-subdued gap-4 flex flex-col font-light"><h1 class="text-3xl sm:text-4xl font-bold text-text-default !leading-normal">Hi, I&#39;m Christopher <span class="font-normal">— a product designer who can code, tackling complex products and solutions through
							systems and tools.</span></h1> <p class="text-text-subdued text-base md:text-lg font-light">Currently working on design systems and internal tooling at
						<a class="text-action-interactive-default underline text-blue-50 hover:text-action-interactive-hover" href="https://www.statefarm.com/" target="_blank">State Farm</a>.</p></div> </div> <div class="flex flex-col gap-y-2 pt-8" data-svelte-h="svelte-1olq8cx"><div class="bg-text-default w-full h-0.5"></div> <h1 class="text-xl font-bold">SELECTED WORK</h1></div> <div class="grid sm:grid-cols-2 gap-y-16" data-sveltekit-preload-data="hover"><div id="sfds">${validate_component(Card, "Card").$$render(
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
      )}</div> <div id="designToken">${validate_component(Card, "Card").$$render(
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
      )}</div> <div id="asset">${validate_component(Card, "Card").$$render(
        $$result,
        {
          title: "ASSET MANAGER — CUSTOM FIGMA PLUGIN",
          desc: "Creating a custom tool for consistent assets across the platform",
          slug: "/assetsq.png",
          url: "/assetmanager",
          key: ["August 2023 - October 2023", "Product design", "Software development"]
        },
        {},
        {}
      )}</div> <div id="fold">${validate_component(Card, "Card").$$render(
        $$result,
        {
          title: "ACCESSIBILITY IN THE DESIGN SYSTEM",
          desc: "Redesigning components to incorporate accessible design",
          slug: "/accsq.png",
          url: "/accessibility",
          key: ["May 2023 - August 2023", "Design systems", "Accessibility"]
        },
        {},
        {}
      )}</div>  </div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</section></div> <div class="hidden sm:block"><section class="sticky top-0 flex flex-col items-end justify-end h-screen pt-6 pb-6 sm:pt-8 sm:pb-16">${`<a href="#fold" class="flex flex-row rotate gap-x-4 content-center svelte-gdlg43" data-svelte-h="svelte-amp9ox"><span class="whitespace-nowrap text-text-subdued">scroll down</span> <img src="/scroll.svg" alt="scroll" class="bounce w-16 svelte-gdlg43"></a>`}</section></div>`;
    }
  })}`;
});
export {
  Page as default
};
