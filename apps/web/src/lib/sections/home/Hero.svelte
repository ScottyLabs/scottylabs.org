<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import css from './Hero.module.css';
  import heroBg from '$lib/assets/hero-bg.svg';
</script>

<svelte:head>
  <link rel="preload" href={heroBg} as="image" />
</svelte:head>

<section class={css['hero-container']}>
  <div class="centered-section centered-section--relative">
    <div class={css['hero-section']}>
      <div class={css['title-container']}>
        <span class={css.title}>
          ScottyLabs
          <div class={css.decoration}>
            <div class={css['decoration__line']}></div>
            <div class={css['decoration__line']}></div>
            <div class={css['decoration__line']}></div>
            <div class={css['decoration__line']}></div>
            <div class={css['decoration__tooltip']}>
              font-family: Satoshi; <br />
              font-size: 3.75rem;
              <br />
              font-weight: 700;
              <div class={css['decoration__tooltip__arrow']} />
            </div>
          </div>
        </span>
      </div>
      <div class={css.subtitle}>The best place to build software @ CMU</div>
      <div class={css['marketing-text']}>
        We’re a student-run organization dedicated to building tech that
        enhances campus life—empowering the Carnegie Mellon University community
        to create, collaborate, and solve real-world problems through apps and
        events.
      </div>

      <div class={css['action-buttons']}>
        <a href="/projects" data-sveltekit-preload-data="hover">
          <Button label="View Projects" variant="primary" />
        </a>
        <a href="https://tartanconnect.cmu.edu/scottylabs/club_signup" target="_blank">
          <Button label="Join Us" variant="outlined" />
        </a>
      </div>
    </div>
    <div class={css['hero-background']}>
      <img src={heroBg} alt="" fetchpriority="high" />
    </div>
  </div>
  <div class={css['events-container']}>
    <div class="centered-section">
      <div class={css.events}>
        {#each [
          {
            text: 'Check out CollegeCart from the Labrador committee!',
            url: 'https://collegecart.org/'
          }
        ] as event (event.url)}
          <a href={event.url} target="_blank">
            <button class={css['events__button']}>{event.text}</button>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>
