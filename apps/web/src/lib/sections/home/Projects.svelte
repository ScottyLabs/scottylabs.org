<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { fade } from 'svelte/transition';
  import css from './Projects.module.css';
  import buttonCSS from '$lib/components/Button/index.module.css';
  import { getAllImageLinksInAssetDirectory } from '$lib/utils/files';
  import ContributorRow from './ContributorRow.svelte';
  import externalLinkIcon from '$lib/assets/icons/go-to-icon.svg';
  import goToIcon from '$lib/assets/icons/go-to-icon.svg';

  const featuredProjects = [
    {
      name: 'CMU Courses',
      assetFolder: 'cmu-courses',
      description: `CMU Courses is a course browser built by and for CMU students.
          Bringing together course information, schedules and FCE data, it makes
          it possible for CMU students to plan their semesters and browse for
          courses.`,
      link: 'https://www.cmucourses.com/'
    },
    {
      name: 'CMU Eats',
      assetFolder: 'cmu-eats',
      description:
        'CMUEats is your one-stop-shop for finding out what campus dining locations are open right now.',
      link: 'https://cmueats.com/'
    },
    {
      name: 'CMU Maps',
      assetFolder: 'cmu-maps',
      description: 'Providing indoor maps and navigation for the CMU campus.',
      link: 'https://cmumaps.com/'
    }
  ];

  const designIcons = getAllImageLinksInAssetDirectory('design-app-icons');
  const codeIcons = getAllImageLinksInAssetDirectory('code-app-icons');

  let selectedProjectIndex = 0;
  let bottomBorderCoords: [number, number] = [0, 0];
  let containerRef: HTMLDivElement | null = null;
  let tabRefs: HTMLButtonElement[] = [];

  const updateBottomBorder = (index: number) => {
    const tabRef = tabRefs[index];
    if (!tabRef || !containerRef) return;
    const offsetPx = containerRef.getBoundingClientRect().left;
    bottomBorderCoords = [
      tabRef.getBoundingClientRect().left - offsetPx,
      tabRef.getBoundingClientRect().right - offsetPx
    ];
  };

  const selectProject = (index: number) => {
    selectedProjectIndex = index;
    updateBottomBorder(index);
  };

  onMount(() => {
    const onResize = () => updateBottomBorder(selectedProjectIndex);
    window.addEventListener('resize', onResize);
    tick().then(() => updateBottomBorder(selectedProjectIndex));
    return () => window.removeEventListener('resize', onResize);
  });
</script>

<section class="centered-section">
  <div class={css['title-section']}>
    <h1 class={css['title-section__header']}>
      From
      <span class={css['title-section__header__design-text']}>
        Design
        <div class={css.decoration}>
          <div class={css['decoration__line']} />
          <div class={css['decoration__line']} />
          <div class={css['decoration__line']} />
          <div class={css['decoration__line']} />
          <div class={css['decoration__square']} />
          <div class={css['decoration__square']} />
          <div class={css['decoration__square']} />
          <div class={css['decoration__square']} />
        </div>
      </span>
      to
      <span class={css['title-section__header__code-block']}>&lt;</span>
      Development
      <span class={css['title-section__header__code-block']}>/&gt;</span>
      <div>
        {#each designIcons.slice(0, 4) as icon}
          <img
            class={`${css['tool-logo-slot']} ${icon.includes('/ai') ? css['tool-logo-slot--ai-san'] : ''}`.trim()}
            src={icon}
            alt=""
          />
        {/each}
        {#each codeIcons.slice(0, 4) as icon}
          <img class={css['tool-logo-slot']} src={icon} alt="" />
        {/each}
      </div>
    </h1>
    <p class={css['title-section__desc']}>
      We bring to life a variety of tech services geared towards improving the
      CMU campus experience and inspiring the community!
    </p>
  </div>

  <div
    class={css['project-tabs-container']}
    style={`--border-left-px: ${bottomBorderCoords[0]}px; --border-right-px: ${bottomBorderCoords[1]}px;`}
    bind:this={containerRef}
  >
    <ul class={css['project-tabs']} role="tablist">
      {#each featuredProjects as project, i (project.assetFolder)}
        <button
          class={css.tab}
          role="tab"
          aria-selected={i === selectedProjectIndex ? 'true' : 'false'}
          on:click={() => selectProject(i)}
          bind:this={(el) => (tabRefs[i] = el)}
        >
          <img
            class={css['tab__image']}
            src={`/projects/${project.assetFolder}/icon.png`}
            alt=""
            on:load={() => {
              if (i === selectedProjectIndex) {
                updateBottomBorder(i);
              }
            }}
          />
          <div class={css['tab__name']}>{project.name}</div>
        </button>
      {/each}
      <a href="/projects">
        <button class={css.tab}>
          <img class={css['tab__image']} src={goToIcon} alt="" style="height: 1em" />
          <div class={css['tab__name']}>See more</div>
        </button>
      </a>
    </ul>
  </div>

  <div class={css['panel-container']}>
    {#key selectedProjectIndex}
      <div class={css.panel} in:fade={{ duration: 250 }} out:fade={{ duration: 150 }}>
        <img
          class={css['panel__img']}
          src={`/projects/${featuredProjects[selectedProjectIndex].assetFolder}/main.png`}
          alt=""
        />
        <div class={css['panel__details']}>
          <span class={css['panel__details__description']}>
            {featuredProjects[selectedProjectIndex].description}
          </span>
          <div class={css['panel__details__footer']}>
            <a href={`projects#${featuredProjects[selectedProjectIndex].name}`}>
              <button class={buttonCSS['button--animated']}>More details</button>
            </a>
            <a href={featuredProjects[selectedProjectIndex].link} target="_blank">
              <img src={externalLinkIcon} alt="" />
              Visit
            </a>
          </div>
        </div>
      </div>
    {/key}
  </div>

  <ContributorRow />
</section>
