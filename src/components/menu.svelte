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
    src={!inverse ? (isHovered ? '/menu-icon-hover.png' : '/menu-icon.png' ) : (isHovered ? '/xmark-hover.png' : '/xmark.png')}
	on:mouseover={handleMouseOver}
    on:mouseout={handleMouseOut}
	alt="Image Swap"
    class='h-11 cursor-pointer	'
/>
