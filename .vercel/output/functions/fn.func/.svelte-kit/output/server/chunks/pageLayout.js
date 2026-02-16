import { c as create_ssr_component } from "./ssr.js";
const pageLayout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid.svelte-1pp9hcc{display:flex;gap:32px;@media screen and (min-width: 640px) {\n			display: grid;\n			grid-template-columns: 2fr 6fr; /* 1/4, 5/8, 1/8 proportions */\n			gap: 32px;\n		};@media screen and (min-width: 768px) {\n			display: grid;\n			gap: 32px;\n			grid-template-columns: 1fr 4fr 1fr; /* 1/4, 5/8, 1/8 proportions */\n		}}",
  map: null
};
const PageLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="px-6 pb-20 sm:pb-0 sm:px-8 lg:px-16 grid svelte-1pp9hcc">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  PageLayout as P
};
