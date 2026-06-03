<script lang="ts">
  import SponsorsSection from '$lib/components/SponsorSection.svelte';
  import css from '$lib/sections/sponsors/sponsors.module.css';

  const sponsorPacketURL =
    'https://bucket.minio.scottylabs.org/scottylabs.org/ScottyLabs_Sponsorship_Packet.pdf';
</script>

<section class="centered-section">
  <h1 class={css.header}>Sponsors</h1>
  <p class={css.description}>
    Interested in becoming a sponsor? View our
    <a href={sponsorPacketURL} target="_blank"> sponsorship packet </a>
    or contact us at
    <a href="mailto:sponsorship@scottylabs.org">sponsorship@scottylabs.org</a>.
  </p>
  <SponsorsSection />
</section>
