

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7e452034.js","_app/immutable/chunks/scheduler.282fc400.js","_app/immutable/chunks/index.8e29cf64.js","_app/immutable/chunks/stores.d84aeced.js","_app/immutable/chunks/singletons.ffd6f847.js"];
export const stylesheets = [];
export const fonts = [];
