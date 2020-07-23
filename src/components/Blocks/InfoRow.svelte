<style>
  .InfoRow {
    user-select: text;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    line-height: 20px;
  }

  .InfoRow__header {
    margin-bottom: 2px;
    color: var(--text_secondary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';
  import Subhead from '../Typography/Subhead.svelte';

  const platform = usePlatform();

  const SLOTS = $$props.$$slots;
</script>

<div
  {...$$restProps}
  class="{classNames(getClassName('InfoRow', platform), $$props.class)}"
>
  {#if SLOTS && SLOTS.header}
    <Subhead class="InfoRow__header" weight="regular">
      <slot name="header" />
    </Subhead>
  {/if}
  <slot />
</div>
