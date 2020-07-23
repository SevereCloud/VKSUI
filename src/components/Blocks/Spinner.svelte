<style>
  :root {
    --duration: 0.7s;
  }

  .Spinner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Spinner--ios {
    color: var(--activity_indicator_tint);
  }

  .Spinner--android {
    color: var(--accent);
  }

  .PanelHeader :global(.Spinner) {
    color: currentColor;
  }

  .Spinner__self {
    animation: rotator var(--duration) linear infinite;
    transform-origin: center;
  }

  .Spinner__self :global(svg) {
    transform: scale(1);
  }

  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>

<!-- svelte-ignore css-unused-selector -->
<!-- svelte-ignore css-unused-selector -->
<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';

  export let size: 'small' | 'regular' | 'large' | 'medium' = 'regular';

  const platform = usePlatform();
</script>

<!-- TODO: spinnerIcon -->
<div
  {...$$restProps}
  class="{classNames(getClassName('Spinner', platform), $$props.class)}"
>
  {#if size === 'large'}
    44
  {:else if size === 'medium'}32{:else if size === 'small'}16{:else}24{/if}
</div>
