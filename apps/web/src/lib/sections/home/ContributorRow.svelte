<script lang="ts">
  import { onMount } from 'svelte';
  import css from './Projects.module.css';
  import spinnerIcon from '$lib/assets/icons/spinner.svg';
  import Contributor from './Contributor.svelte';
  import { fetchLatestActivity } from '$lib/utils/api';
  import type { LatestActivity } from '$lib/utils/api';

  let data: LatestActivity[] | null = null;
  let isLoading = true;
  let hasError = false;

  onMount(async () => {
    try {
      const response = await fetchLatestActivity();
      if (response.status === 200) {
        data = response.body;
      } else {
        hasError = true;
      }
    } catch (error) {
      console.error(error);
      hasError = true;
    } finally {
      isLoading = false;
    }
  });
</script>

{#if !hasError && (isLoading || (data && data.length > 0))}
  <div class={css['contributor-row-container']}>
    <span class={css['contributor-pill-container__text']}>Recent contributors:</span>
    {#if data}
      {#each data.slice(0, 5) as contribution, i (i)}
        <Contributor {contribution} />
      {/each}
    {:else if isLoading}
      {#each Array.from({ length: 5 }) as _, i (i)}
        <div class={css['contributor-pill-wrapper']}>
          <div class={`${css['contributor-pill']} ${css['contributor-pill--inactive']}`.trim()}>
            <img
              src={spinnerIcon}
              alt=""
              class={css['contributor-pill__loading-icon']}
            />
            Loading...
          </div>
        </div>
      {/each}
    {/if}
  </div>
{/if}
