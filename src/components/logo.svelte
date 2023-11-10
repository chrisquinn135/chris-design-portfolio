<script>
  export let inverse;

	let isHovered = false;

	function handleMouseOver() {
		isHovered = true;
	}

	function handleMouseOut() {
		isHovered = false;
	}
</script>

<!-- svelte-ignore a11y-img-redundant-alt -->

  <img
	id="menu"
	src={!inverse ? (isHovered ? '/chris-logo-onhover.png' : '/chris-logo.png' ) : (isHovered ? '/inverse-hover.png' : '/inverse.png')}
	on:mouseover={handleMouseOver}
	on:mouseout={handleMouseOut}
	alt="swap"
	class="h-full cursor-pointer"
/>