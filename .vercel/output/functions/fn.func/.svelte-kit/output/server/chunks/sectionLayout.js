import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
const SectionLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<section class="flex flex-col gap-8 sm:gap-16"${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</section>`;
});
export {
  SectionLayout as S
};
