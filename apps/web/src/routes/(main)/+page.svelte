<script lang="ts">
  import Hero from '$lib/sections/home/Hero.svelte';
  import ImageCarousel from '$lib/components/ImageCarousel.svelte';
  import JoinUs from '$lib/sections/home/JoinUs.svelte';
  import Projects from '$lib/sections/home/Projects.svelte';
  import TartanHacks from '$lib/sections/home/TartanHacks.svelte';
  import { getAllImageLinksInAssetDirectory } from '$lib/utils/files';

  const carouselImages = getAllImageLinksInAssetDirectory('carousel-images');
</script>

<Hero />
<ImageCarousel
  heightPx={300}
  speedPxPerSecond={-50}
  imageLinks={carouselImages}
/>
<Projects />
<TartanHacks />
<JoinUs />
