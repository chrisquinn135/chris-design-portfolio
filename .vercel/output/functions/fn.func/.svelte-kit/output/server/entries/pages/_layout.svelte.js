import { c as create_ssr_component, a as add_attribute, b as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { d as destination, l as loading } from "../../chunks/store.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inverse } = $$props;
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  return ` <img id="menu"${add_attribute(
    "src",
    !inverse ? "/chris-logo.png" : "/inverse.png",
    0
  )} alt="swap" class="h-full cursor-pointer">`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inverse } = $$props;
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  return ` <img id="menu"${add_attribute(
    "src",
    !inverse ? "/menu-icon.png" : "/xmark.png",
    0
  )} alt="Image Swap" class="h-11 cursor-pointer ">`;
});
const InverseMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inverse } = $$props;
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  return ` <img id="menu"${add_attribute(
    "src",
    !inverse ? "/menu-inverse.png" : "/xmark.png",
    0
  )} alt="Image Swap" class="h-11 cursor-pointer">`;
});
const curtain_svelte_svelte_type_style_lang = "";
const css = {
  code: ".active.svelte-1abfu40{top:0;z-index:999}",
  map: null
};
const Curtain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $destination, $$unsubscribe_destination;
  $$unsubscribe_destination = subscribe(destination, (value) => $destination = value);
  $$result.css.add(css);
  $$unsubscribe_destination();
  return `<div class="active px-16 py-8 bg-surface-inverse z-10 fixed h-screen w-screen z-99 flex justify-center items-center svelte-1abfu40"><video${add_attribute(
    "src",
    $destination == "/assetmanager" ? "/curtain/blue.mp4" : $destination == "/trulioo" ? "/curtain/green.mp4" : $destination == "/accessibility" ? "/curtain/yellow.mp4" : "/curtain/orange.mp4",
    0
  )} type="video/mp4" class="h-16" autoplay playsinline muted></video> </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loading, $$unsubscribe_loading;
  let $$unsubscribe_destination;
  let $$unsubscribe_page;
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  $$unsubscribe_destination = subscribe(destination, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let isActive = false;
  $$unsubscribe_loading();
  $$unsubscribe_destination();
  $$unsubscribe_page();
  return `  ${$loading ? `${validate_component(Curtain, "Curtain").$$render($$result, {}, {}, {})}` : ``} ${``}  <div class="fixed sm:hidden bottom-0 flex bg-surface-inverse w-full flex flex-row justify-between px-6 py-4 z-50"><button class="h-11" tabindex="0" data-sveltekit-preload-data="hover">${validate_component(Logo, "Logo").$$render($$result, { inverse: true }, {}, {})}</button> <div class="flex flex-row gap-4"><div class="bg-surface-0 w-0.5 h-full text-text-inverse"></div> <button tabindex="0" class="h-11">${validate_component(InverseMenu, "InverseMenu").$$render($$result, { inverse: isActive }, {}, {})}</button></div></div>  <div class="hidden sm:block"><button class="h-11 top-0 left-0 fixed ml-6 sm:ml-8 lg:ml-16 mt-6 sm:mt-8 z-50" tabindex="0" data-sveltekit-preload-data="hover">${validate_component(Logo, "Logo").$$render($$result, { inverse: isActive }, {}, {})}</button> <button tabindex="0" class="h-11 top-0 right-0 fixed mr-6 sm:mr-8 lg:mr-16 mt-6 sm:mt-8 z-50">${validate_component(Menu, "Menu").$$render($$result, { inverse: isActive }, {}, {})}</button></div> ${``} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
