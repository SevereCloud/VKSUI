<style>
  .CardGrid {
    margin-top: -8px;
  }

  .CardGrid::after {
    clear: both;
    content: '';
    display: block;
    width: 100%;
  }

  .CardGrid :global(.Card) {
    float: left;
    margin-top: 8px;
  }

  .CardGrid :global(.Card--sz-l) {
    width: 100%;
  }

  .CardGrid :global(.Card--sz-m) {
    width: calc((100% - 8px) / 2);
  }

  .CardGrid :global(.Card--sz-m + .Card--sz-m) {
    margin-left: 8px;
  }

  .CardGrid :global(.Card--sz-s) {
    width: calc((100% - 2 * 8px) / 3);
  }

  .CardGrid :global(.Card--sz-s + .Card--sz-s) {
    margin-left: 8px;
  }

  /**
 * iOS
 */

  .CardGrid--ios {
    padding-left: 12px;
    padding-right: 12px;
  }

  /**
 * Android
 */

  .CardGrid--android {
    padding-left: 16px;
    padding-right: 16px;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';

  const platform = usePlatform();
</script>

<!-- 
@component
Сетка для `Card`.
-->

<div
  {...$$restProps}
  class="{classNames(getClassName('CardGrid', platform), $$props.class)}"
>
  <slot />
</div>
