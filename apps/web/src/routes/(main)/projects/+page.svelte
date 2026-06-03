<script lang="ts">
  import { Header } from '$lib/sections/projects/Header.svelte';
  import ProjectPanel from '$lib/sections/projects/ProjectPanel.svelte';
  import {
    BocchiIcon,
    CSSIcon,
    JavascriptIcon,
    MongoDBIcon,
    NextJSIcon,
    ReactIcon,
    TailwindIcon,
    TypescriptIcon,
    ViteIcon,
    PostgresIcon
  } from '$lib/sections/projects/icons';
  import { getAllImageLinksInAssetDirectory } from '$lib/utils/files';
</script>

<Header />
<ProjectPanel
  repoIds={[461300766]}
  description="Bringing together course information, schedules and FCE data, it makes it possible for CMU students to plan their semesters and browse for courses."
  imageURLs={getAllImageLinksInAssetDirectory('cmu-courses')}
  technologiesUsed={[
    JavascriptIcon,
    TypescriptIcon,
    ReactIcon,
    NextJSIcon,
    TailwindIcon,
    MongoDBIcon
  ]}
  name="CMU Courses"
  url="https://cmucourses.com/"
/>
<ProjectPanel
  repoIds={[461295694, 28149130]}
  description="CMUEats is your one-stop-shop for finding out what campus dining locations are open right now."
  imageURLs={getAllImageLinksInAssetDirectory('cmu-eats')}
  technologiesUsed={[TypescriptIcon, ReactIcon, CSSIcon, ViteIcon, BocchiIcon]}
  name="CMU Eats"
  url="https://cmueats.com/"
/>
<ProjectPanel
  repoIds={[
    907552548, 314884445, 412883321, 910847128, 941314467, 983636067,
    1005207710, 1008068854, 511749350, 606940704, 801739296, 819120359,
    847150918
  ]}
  description="CMUMaps combines indoor and outdoor maps and navigation so that you will never get lost again on campus."
  imageURLs={getAllImageLinksInAssetDirectory('cmu-maps')}
  technologiesUsed={[TypescriptIcon, ReactIcon, ViteIcon, TailwindIcon, PostgresIcon]}
  name="CMU Maps"
  url="https://cmumaps.com/"
/>
<ProjectPanel
  repoIds={[561467360, 308943713, 295896072]}
  description="Lost and found is the official lost and found service for the Cohon University Center!  We help reunite lost items with their owners."
  imageURLs={getAllImageLinksInAssetDirectory('lost-and-found')}
  technologiesUsed={[TypescriptIcon, ReactIcon, NextJSIcon, TailwindIcon, PostgresIcon]}
  name="Lost and Found"
  url="https://lostandfound.andrew.cmu.edu"
/>
<div style="height: 150px;"></div>
