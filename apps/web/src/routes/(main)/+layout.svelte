<script lang="ts">
  import Header from '$lib/sections/home/Header.svelte';
  import Footer from '$lib/sections/home/Footer.svelte';

  let { children } = $props();
</script>

<div
  style="min-width: 950px; display: flex; flex-direction: column; min-height: 100vh;"
>
  <Header />
  <main style="flex-grow: 1;">
    {@render children()}
  </main>
  <Footer />
</div>
