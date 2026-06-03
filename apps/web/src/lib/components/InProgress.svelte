<script lang="ts">
  import css from './InProgress.module.css';
  import scotty from '$lib/assets/scotty-in-progress.svg';
</script>

<section class="centered-section">
  <div class={css['in-progress-container']}>
    <img src={scotty} alt="Scotty working" />
    We are still working on this page! Please check back later
  </div>
</section>
