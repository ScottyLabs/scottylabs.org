<script lang="ts">
  import { onMount } from 'svelte';
  import type { SvelteComponent } from 'svelte';
  import css from './ImageCarousel.module.css';

  export let imageLinks: string[];
  export let speedPxPerSecond: number;
  export let heightPx: number;
  export let gapPx: number | undefined = undefined;
  export let periodicTile: typeof SvelteComponent | null = null;

  let carouselRef: HTMLDivElement | null = null;
  let endOfCarouselRef: HTMLDivElement | null = null;
  let imagesVisibleOnScreen = 5;
  let tiles: string[] = [];

  const direction = speedPxPerSecond > 0 ? 'right' : 'left';
  const LOADING_BUFFER_PX = 500;
  const INITIAL_IMAGES_TO_LOAD = 10;

  const shuffleArray = (ar: string[]) => {
    const shuffledAr = [...ar];
    const n = shuffledAr.length;
    for (let i = 0; i < n; i++) {
      const randI = Math.floor(Math.random() * (n - i)) + i;
      [shuffledAr[i], shuffledAr[randI]] = [shuffledAr[randI], shuffledAr[i]];
    }
    return shuffledAr;
  };

  const shuffledImageLinks = shuffleArray(imageLinks);

  onMount(() => {
    const updateCustomTilePositioning = () => {
      imagesVisibleOnScreen = Math.max(2, Math.ceil(window.innerWidth / 300));
    };

    window.addEventListener('resize', updateCustomTilePositioning);
    updateCustomTilePositioning();

    tiles = Array(INITIAL_IMAGES_TO_LOAD)
      .fill(true)
      .map((_, i) => shuffledImageLinks[i % shuffledImageLinks.length]);

    let prevRenderTime = document.timeline.currentTime as number;
    let totalElapsed = 0;
    let running = true;

    const updatePosition = (curRenderTime: number) => {
      if (!running) return;
      totalElapsed += Math.min(500, curRenderTime - prevRenderTime);
      prevRenderTime = curRenderTime;
      const offsetX = (totalElapsed / 1000) * speedPxPerSecond;

      if (carouselRef && endOfCarouselRef) {
        const { left: posX } = endOfCarouselRef.getBoundingClientRect();
        if (
          (direction === 'left' && posX <= window.innerWidth + LOADING_BUFFER_PX) ||
          (direction === 'right' && posX >= -LOADING_BUFFER_PX && totalElapsed >= 1000)
        ) {
          tiles = [
            ...tiles,
            shuffledImageLinks[tiles.length % shuffledImageLinks.length]
          ];
        }
        carouselRef.style.translate = `${offsetX}px`;
      }
      requestAnimationFrame(updatePosition);
    };

    requestAnimationFrame(updatePosition);

    return () => {
      running = false;
      window.removeEventListener('resize', updateCustomTilePositioning);
    };
  });
</script>

<div class={`${css['carousel-container']} ${direction === 'right' ? css['carousel-container--flipped'] : ''}`.trim()}>
  <div
    class={css.carousel}
    bind:this={carouselRef}
    style={`height: ${heightPx}px; gap: ${gapPx ?? 25}px;`}
  >
    {#each tiles as tile, i}
      <img class={css['carousel__image']} src={tile} alt="" />
      {#if periodicTile && (i + 2) % (imagesVisibleOnScreen - 1) === 0}
        <div style="flex-shrink: 0;">
          <svelte:component this={periodicTile} />
        </div>
      {/if}
    {/each}
    <div bind:this={endOfCarouselRef}></div>
  </div>
</div>
