import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.141d459a.js","_app/immutable/chunks/scheduler.282fc400.js","_app/immutable/chunks/index.f4a076f2.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/store.a6a77e9a.js","_app/immutable/chunks/singletons.96ce6a00.js","_app/immutable/chunks/index.e36700f7.js","_app/immutable/chunks/stores.1f77299f.js"];
export const stylesheets = ["_app/immutable/assets/0.c6d2eb40.css"];
export const fonts = [];
