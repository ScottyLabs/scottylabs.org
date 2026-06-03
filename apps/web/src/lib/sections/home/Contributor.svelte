<script lang="ts">
  import { onMount } from 'svelte';
  import { DateTime } from 'luxon';
  import { FastAverageColor } from 'fast-average-color';
  import css from './Projects.module.css';
  import prIcon from '$lib/assets/icons/pr.svg';
  import commitIcon from '$lib/assets/icons/commit.svg';
  import { getTimeDeltaFromNow } from '$lib/utils/time';
  import type { LatestActivity } from '$lib/utils/api';

  export let contribution: LatestActivity;

  const fac = new FastAverageColor();

  let now = DateTime.now();
  let bgColor = '#FFFFFF';
  let popupOffsetPx = 0;
  let popupRef: HTMLDivElement | null = null;

  const nudgePopupsToBeInViewport = () => {
    if (!popupRef) return;
    popupRef.style.transform = 'translateX(50%)';
    const boundingBox = popupRef.getBoundingClientRect();
    if (boundingBox.left < 0) {
      popupOffsetPx = -boundingBox.left;
    } else if (boundingBox.right > window.innerWidth - 20) {
      popupOffsetPx = -(boundingBox.right - window.innerWidth + 20);
    } else {
      popupOffsetPx = 0;
    }
    popupRef.style.transform = '';
  };

  onMount(() => {
    nudgePopupsToBeInViewport();
    const onResize = () => nudgePopupsToBeInViewport();
    window.addEventListener('resize', onResize);
    fac.getColorAsync(contribution.authorPfpUrl).then((result) => {
      bgColor = result.hex;
    });
    const intervalId = setInterval(() => {
      now = DateTime.now();
    }, 1000);
    return () => {
      window.removeEventListener('resize', onResize);
      clearInterval(intervalId);
    };
  });
</script>

<div class={css['contributor-pill-wrapper']} on:mouseover={nudgePopupsToBeInViewport}>
  <a class={css['contributor-pill']} href={contribution.authorUrl} target="_blank">
    <img src={contribution.authorPfpUrl} alt="" />
    {contribution.authorUsername}
  </a>
  <div
    class={css['contribution-popup']}
    style={`--bg-color: ${bgColor}; --popup-offset-px: ${popupOffsetPx}px;`}
    bind:this={popupRef}
  >
    <a href={contribution.authorUrl} target="_blank">
      <img
        class={css['contribution-popup__pfp']}
        src={contribution.authorPfpUrl}
        alt=""
      />
    </a>
    <div class={css['contribution-popup__description']}>
      <a
        href={contribution.type === 'commit' ? contribution.commitUrl : contribution.prUrl}
        target="_blank"
      >
        <span class={css['contribution-popup__description__title']}>
          {#if contribution.type === 'pull_request'}
            <span>
              <img
                class={css['contribution-popup__description__title__icon']}
                src={prIcon}
                alt=""
              />
              {contribution.prTitle}
              <span class={css['contribution-popup__description__title__pr-number']}>
                #{contribution.prNumber}
              </span>
            </span>
          {:else}
            <span>
              <img
                class={css['contribution-popup__description__title__icon']}
                src={commitIcon}
                alt=""
              />
              {contribution.commitMessage}
            </span>
          {/if}
        </span>
      </a>
      <span class={css['contribution-popup__description__footer']}>
        <a href={contribution.repoUrl} target="_blank">
          <span class={css['footer__repo']}>
            {contribution.repoOrg}/{contribution.repoName}
          </span>
        </a>
        <span class={css['footer__time']}>
          {getTimeDeltaFromNow(DateTime.fromISO(contribution.time, { zone: 'local' }), now)}
        </span>
      </span>
    </div>
  </div>
</div>
