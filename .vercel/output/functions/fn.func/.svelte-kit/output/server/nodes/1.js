

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.11ea5e44.js","_app/immutable/chunks/scheduler.282fc400.js","_app/immutable/chunks/index.8e29cf64.js","_app/immutable/chunks/stores.364abe43.js","_app/immutable/chunks/singletons.50e0f76a.js"];
export const stylesheets = [];
export const fonts = [];
