import { w as writable } from "./index.js";
const loading = writable(false);
const destination = writable("/assetmanager");
export {
  destination as d,
  loading as l
};
