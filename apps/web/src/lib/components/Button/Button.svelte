<script lang="ts">
  import css from './index.module.css';

  export let label: string;
  export let variant: 'primary' | 'outlined';
  export let className: string = '';
</script>

<button class={`${css.button} ${css['button--animated']} ${css[variant]} ${className}`.trim()}>
  {label}
</button>
