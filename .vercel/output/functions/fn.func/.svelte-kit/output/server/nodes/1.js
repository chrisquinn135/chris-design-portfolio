

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ee36e940.js","_app/immutable/chunks/scheduler.282fc400.js","_app/immutable/chunks/index.f4a076f2.js","_app/immutable/chunks/stores.c0360526.js","_app/immutable/chunks/singletons.40b56e01.js"];
export const stylesheets = [];
export const fonts = [];
