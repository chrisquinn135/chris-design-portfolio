import { c as create_ssr_component } from "./ssr.js";
const NavigationLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<nav class="flex flex-col gap-4 pt-6 pb-6 sm:pt-8 sm:pb-16 sticky top-0 justify-end h-screen"><p class="text-text-default font-bold text-base" data-svelte-h="svelte-1cb510">CONTENTS</p> <ul class="flex flex-col gap-4 text-text-placeholder">${slots.default ? slots.default({}) : ``}</ul></nav>`;
});
const ContainerLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col gap-4 sm:gap-8">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  ContainerLayout as C,
  NavigationLayout as N
};
