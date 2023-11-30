<!-- Gist.svelte -->
<script>
  export let gistUrl = ""

  import { onMount } from 'svelte'

  let frame;
  onMount(() => {
    frame.srcdoc = `<script src='${gistUrl}.js'><${""}/script>`;
  });
</script>
<style>
  iframe {
    border: 0;
    width: 100%;
    height: 100%;
  }
</style>
<iframe src="about:blank" bind:this={frame} title="Gist"></iframe>