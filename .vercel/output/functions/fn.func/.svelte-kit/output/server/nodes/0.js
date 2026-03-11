import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.94965059.js","_app/immutable/chunks/scheduler.282fc400.js","_app/immutable/chunks/index.f4a076f2.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/store.28a2ba92.js","_app/immutable/chunks/singletons.27bef062.js","_app/immutable/chunks/index.e36700f7.js","_app/immutable/chunks/stores.98016d70.js"];
export const stylesheets = ["_app/immutable/assets/0.c6d2eb40.css"];
export const fonts = [];
