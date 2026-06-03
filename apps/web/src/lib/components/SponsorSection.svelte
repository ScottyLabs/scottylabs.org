<script lang="ts">
  import css from './SponsorSection.module.css';
  import { sponsors } from '$lib/sections/sponsors/sponsors';
  import appLovin from '$lib/assets/sponsors-page/sponsors/applovin-axon.png';

  const premierSponsors = sponsors.filter((s) => s.type === 'premier');
  const partnerSponsors = sponsors.filter((s) => s.type === 'partner');
  const lowestSponsors = sponsors.filter((s) => s.type === 'lowest');
</script>

<div class={css['main-container']}>
  <h2 class={css.header}>Thank you to our 2025 Sponsors!</h2>
  <div class={css['title-sponsor-container']}>
    <h2>TITLE SPONSOR</h2>
    <a href="https://www.applovin.com/en" target="_blank">
      <img src={appLovin} alt="AppLovin" />
    </a>
  </div>

  <div class={`${css['sponsors-container']} ${css['sponsors-container--premier']}`.trim()}>
    {#each premierSponsors as sponsor (sponsor.websiteUrl)}
      <div class={css['sponsors-container--premier__inner-container']}>
        <a href={sponsor.websiteUrl} target="_blank" class={css.sponsor}>
          {#if sponsor.imageUrl}
            <img src={sponsor.imageUrl} alt="" />
          {/if}
        </a>
      </div>
    {/each}
  </div>
  <div class={`${css['sponsors-container']} ${css['sponsors-container--partner']}`.trim()}>
    {#each partnerSponsors as sponsor (sponsor.websiteUrl)}
      <a href={sponsor.websiteUrl} target="_blank" class={css.sponsor}>
        {#if sponsor.imageUrl}
          <img src={sponsor.imageUrl} alt="" />
        {/if}
      </a>
    {/each}
  </div>
  <div class={`${css['sponsors-container']} ${css['sponsors-container--smaller']}`.trim()}>
    {#each lowestSponsors as sponsor (sponsor.websiteUrl)}
      <a href={sponsor.websiteUrl} target="_blank" class={css.sponsor}>
        {#if sponsor.imageUrl}
          <img src={sponsor.imageUrl} alt="" />
        {/if}
      </a>
    {/each}
  </div>
</div>
