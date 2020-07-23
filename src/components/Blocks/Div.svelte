<style>
  .Div--ios {
    padding: 12px;
  }

  .Div--android {
    padding: 12px 16px;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';

  const platform = usePlatform();
</script>

<div
  {...$$restProps}
  class="{classNames(getClassName('Div', platform), $$props.class)}"
>
  <slot />
</div>
