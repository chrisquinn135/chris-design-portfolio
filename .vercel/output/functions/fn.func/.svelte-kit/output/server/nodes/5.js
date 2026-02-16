

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/assetmanager/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.e14978a6.js","_app/immutable/chunks/scheduler.282fc400.js","_app/immutable/chunks/index.8e29cf64.js","_app/immutable/chunks/card.e8969923.js","_app/immutable/chunks/store.570b9412.js","_app/immutable/chunks/singletons.ffd6f847.js","_app/immutable/chunks/footer.6ea96f53.js","_app/immutable/chunks/sectionLayout.db13a19b.js","_app/immutable/chunks/containerLayout.5800bdfe.js","_app/immutable/chunks/pageLayout.9633f996.js"];
export const stylesheets = ["_app/immutable/assets/card.2894b3d7.css","_app/immutable/assets/footer.0d58ed7b.css","_app/immutable/assets/pageLayout.06f1c003.css"];
export const fonts = [];
