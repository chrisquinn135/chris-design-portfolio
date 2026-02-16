

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tds/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.4645b4d1.js","_app/immutable/chunks/scheduler.282fc400.js","_app/immutable/chunks/index.8e29cf64.js","_app/immutable/chunks/card.e8969923.js","_app/immutable/chunks/store.570b9412.js","_app/immutable/chunks/singletons.ffd6f847.js","_app/immutable/chunks/footer.6ea96f53.js"];
export const stylesheets = ["_app/immutable/assets/4.b89279d6.css","_app/immutable/assets/card.2894b3d7.css","_app/immutable/assets/footer.0d58ed7b.css"];
export const fonts = [];
