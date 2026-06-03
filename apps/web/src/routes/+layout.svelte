<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import posthog from 'posthog-js';
  import { PUBLIC_POSTHOG_HOST, PUBLIC_POSTHOG_KEY } from '$env/static/public';
  import satoshiFont from '$lib/assets/fonts/Satoshi-Regular.woff2';
  import satoshiFontBold from '$lib/assets/fonts/Satoshi-Bold.woff2';
  import satoshiFontMedium from '$lib/assets/fonts/Satoshi-Medium.woff2';
  import satoshiFontBlack from '$lib/assets/fonts/Satoshi-Black.woff2';
  import jetbrainsMono from '$lib/assets/fonts/JetBrainsMono-Regular.ttf';

  let { children } = $props();

  onMount(() => {
    if (PUBLIC_POSTHOG_KEY && PUBLIC_POSTHOG_HOST) {
      posthog.init(PUBLIC_POSTHOG_KEY, {
        api_host: PUBLIC_POSTHOG_HOST,
        defaults: '2025-05-24'
      });
    }
  });
</script>

<svelte:head>
  <title>ScottyLabs</title>
  <meta name="description" content="The landing page for Scottylabs" />
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  <link
    rel="preload"
    href={satoshiFont}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href={satoshiFontBold}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href={satoshiFontMedium}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href={satoshiFontBlack}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href={jetbrainsMono}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
</svelte:head>

{@render children()}
