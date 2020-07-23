<style>
  .Link {
    color: var(--accent);
    text-decoration: none;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';

  export let href = '';

  const platform = usePlatform();
</script>

<a
  href="{href}"
  {...$$restProps}
  class="{classNames(getClassName('Link', platform), $$props.class)}"
>
  <slot />
</a>
