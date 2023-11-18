<script>
	import { fade } from 'svelte/transition';
</script>

<a
	href='#top' class='fixed bottom-0 right-0 z-20 mx-6 mb-24 sm:mb-0 sm:mx-8 lg:mx-16 mt-6 mb-6 sm:mt-8 sm:mb-16 z-50'
    in:fade={{delay:250, duration: 250}}
    out:fade={{duration:250}}
    src='/icon-arrow.png'
> 
    <img href='#top' class='w-8 pointer' src='/icon-arrow.png' alt='click scroll to top'/>
</a>
