

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8a685344.js","_app/immutable/chunks/scheduler.282fc400.js","_app/immutable/chunks/index.f4a076f2.js","_app/immutable/chunks/stores.1f77299f.js","_app/immutable/chunks/singletons.96ce6a00.js"];
export const stylesheets = [];
export const fonts = [];
