

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.48b0b6cf.js","_app/immutable/chunks/scheduler.282fc400.js","_app/immutable/chunks/index.8e29cf64.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/store.570b9412.js","_app/immutable/chunks/singletons.ffd6f847.js","_app/immutable/chunks/index.e36700f7.js","_app/immutable/chunks/stores.d84aeced.js"];
export const stylesheets = ["_app/immutable/assets/0.681e9fdb.css"];
export const fonts = [];
