import { c as create_ssr_component, b as subscribe, a as add_attribute, e as escape, n as null_to_empty, d as each } from "./ssr.js";
import { l as loading, d as destination } from "./store.js";
const card_svelte_svelte_type_style_lang = "";
const css = {
  code: ".text-container.svelte-1eiv3f8.svelte-1eiv3f8{position:relative;display:inline-block;overflow:hidden}.text-container.svelte-1eiv3f8.svelte-1eiv3f8::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:#121212;transition:left 0.2s ease-in-out;z-index:-1}.container.svelte-1eiv3f8:hover .text-container.svelte-1eiv3f8::before{left:0}.container.svelte-1eiv3f8:hover .text-container.svelte-1eiv3f8{color:white;transition:left 0.3s ease-in-out}.container.svelte-1eiv3f8:hover .box.svelte-1eiv3f8{margin:0px}.box.svelte-1eiv3f8.svelte-1eiv3f8{border:10px solid #121212;position:absolute;top:0;right:0;bottom:0;left:0;margin:-10px;z-index:2;transition:0.3s}.test.svelte-1eiv3f8.svelte-1eiv3f8{position:relative;overflow:hidden}.imagecont.svelte-1eiv3f8.svelte-1eiv3f8{max-width:100%;max-height:100%;width:100%;min-height:1px;display:block;transition:0.3s}",
  map: null
};
let h2 = "text-xl sm:text-2xl font-bold";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_loading;
  let $$unsubscribe_destination;
  $$unsubscribe_loading = subscribe(loading, (value) => value);
  $$unsubscribe_destination = subscribe(destination, (value) => value);
  let { title } = $$props;
  let { desc } = $$props;
  let { slug } = $$props;
  let { key } = $$props;
  let { url } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css);
  $$unsubscribe_loading();
  $$unsubscribe_destination();
  return `<button class="cursor-pointer container flex flex-col gap-4 svelte-1eiv3f8"><div class="test svelte-1eiv3f8"><div class="box svelte-1eiv3f8"></div> <img id="asset"${add_attribute("src", slug, 0)} alt="card description" class="imagecont svelte-1eiv3f8"></div> <div class="flex flex-col gap-2 items-start text-left pr-4"><p class="all-small-caps text-text-subdued text-lg font-medium">${escape(title)}</p> <h3 class="${escape(null_to_empty(h2), true) + " svelte-1eiv3f8"}"><span class="text-container svelte-1eiv3f8">${escape(desc)}</span></h3> <div class="text-text-subdued text-sm md:text-sm font-light">${each(key, (name, i) => {
    return `${i < key.length - 1 ? `<span>${escape(name)} • </span>` : `<span>${escape(name)}</span>`}`;
  })}</div></div> </button>`;
});
export {
  Card as C
};
