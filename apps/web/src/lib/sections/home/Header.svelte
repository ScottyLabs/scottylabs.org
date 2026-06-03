<script lang="ts">
  import { page } from '$app/stores';
  import css from './Header.module.css';
  import scottylabsLogo from '$lib/assets/scottylabs-logo.svg';
  import teamIcon from '$lib/assets/icons/team.svg';
  import projectsIcon from '$lib/assets/icons/projects.svg';
  import sponsorsIcon from '$lib/assets/icons/sponsors.svg';

  const navLinks = [
    {
      icon: projectsIcon,
      url: '/projects',
      text: 'Projects'
    },
    {
      icon: teamIcon,
      url: '/team',
      text: 'Team'
    },
    {
      icon: sponsorsIcon,
      url: '/sponsors',
      text: 'Sponsors'
    }
  ];

  $: currentPath = $page.url.pathname;
</script>

<header class={css['main-header-container']}>
  <div class={css['main-header-layout']}>
    <a
      class={css.logo}
      href="/"
      data-sveltekit-preload-data="hover"
    >
      <img class={css['logo__img']} src={scottylabsLogo} alt="ScottyLabs" />
      <div class={css['logo__text']}>ScottyLabs</div>
    </a>
    <nav class={css['main-nav']}>
      {#each navLinks as link (link.url)}
        <a
          class={`${css['nav-button']} ${currentPath === link.url ? css['nav-button--active'] : ''}`.trim()}
          href={link.url}
          data-sveltekit-preload-data="hover"
        >
          <img class={css['nav-button__icon']} src={link.icon} alt="" />
          <div class={css['nav-button__text']}>{link.text}</div>
        </a>
      {/each}
    </nav>
  </div>
</header>
