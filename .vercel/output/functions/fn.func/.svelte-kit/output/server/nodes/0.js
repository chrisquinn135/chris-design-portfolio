import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.3b3104d3.js","_app/immutable/chunks/scheduler.282fc400.js","_app/immutable/chunks/index.8e29cf64.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/store.ecad3869.js","_app/immutable/chunks/singletons.f1b69020.js","_app/immutable/chunks/index.e36700f7.js","_app/immutable/chunks/stores.f4cd409e.js"];
export const stylesheets = ["_app/immutable/assets/0.681e9fdb.css"];
export const fonts = [];
