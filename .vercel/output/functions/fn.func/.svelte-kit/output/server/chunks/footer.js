import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
const footer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hover.svelte-1uqe0pj{transform:none;transform-origin:50% 50% 0px;opacity:1;transition:transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.2s ease}.hover.svelte-1uqe0pj:hover{transform:translate3d(0px, -4px, 0px)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="flex flex-col gap-8" data-svelte-h="svelte-hzn4fw"><div class="bg-border-subdued w-full h-px gap-2"></div> <div class="flex flex-col gap-4"><p class="text-text-default text-lg font-bold sm:text-2xl">Get in touch below or directly at <span class="text-action-interactive-default">christophersu02@gmail.com</span>!</p> <span class="flex flex-row gap-6"><a href="https://www.linkedin.com/in/chrisquinn135/" target="_blank" class="hover svelte-1uqe0pj"><img${add_attribute("src", "/linkedin.svg", 0)} alt="logo" class="w-8 rounded"></a> <a href="https://github.com/chrisquinn135" target="_blank" class="hover svelte-1uqe0pj"><img${add_attribute("src", "/github.png", 0)} alt="logo" class="w-8"></a> <a href="./christopher-su-resume-2025.pdf" target="_blank" class="hover h-8 bg-surface-0 flex items-center px-4 py-2 rounded-lg border-2 border-text-default hover:bg-surface-+3 shadow-[0_2px_0_0_rgba(0,0,0,1)] svelte-1uqe0pj"><span class="text-sm font-bold text-text-default">Resume</span></a></span></div> <div class="flex flex-col gap-2 text-xs text-text-subdued"><p>© 2026 Christopher Su</p> <p>Designed and developed by Christopher Su</p></div> </div>`;
});
export {
  Footer as F
};
