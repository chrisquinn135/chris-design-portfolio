

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.23528655.js","_app/immutable/chunks/scheduler.282fc400.js","_app/immutable/chunks/index.8e29cf64.js","_app/immutable/chunks/footer.6ea96f53.js","_app/immutable/chunks/pageLayout.9633f996.js"];
export const stylesheets = ["_app/immutable/assets/3.daa94d34.css","_app/immutable/assets/footer.0d58ed7b.css","_app/immutable/assets/pageLayout.06f1c003.css"];
export const fonts = [];
