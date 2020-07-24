<style>
  .Group {
    color: var(--text_primary);
  }

  .Group > *:not(.Header):first-child {
    margin-top: 12px;
  }

  .Group > .Cell:first-child,
  .Group > .CellButton:first-child,
  .Group > .InfoRow:first-child {
    margin-top: 8px;
  }

  .Group__description {
    font-size: 14px;
    line-height: 16px;
    color: var(--text_secondary);
  }

  .Group__separator {
    margin-top: 12px;
  }

  .Cell + .Group__separator,
  .CellButton + .Group__separator,
  .InfoRow + .Group__separator {
    margin-top: 8px;
  }

  .Group:last-of-type :global(.Group__separator) {
    display: none;
  }

  .Group:last-of-type :global(.Group__separator--force) {
    display: block;
  }

  .Group--ios .Group__description {
    padding: 4px 12px 24px;
  }

  .Group--android .Group__description {
    padding: 4px 16px 24px;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';
  import Separator from './Separator.svelte';

  /**
    show - разделитель всегда показывается,
    hide – разделитель всегда спрятан,
    auto – разделитель рисуется автоматически между соседними группами.
   */
  export let separator: 'show' | 'hide' | 'auto' = 'auto';

  const platform = usePlatform();

  const SLOTS = $$props.$$slots;
</script>

<!-- svelte-ignore css-unused-selector -->
<section
  {...$$restProps}
  class="{classNames(getClassName('Group', platform), $$props.class)}"
>
  <slot name="header" />
  <slot />
  {#if SLOTS && SLOTS.description}
    <div class="Group__description">
      <slot name="description" />
    </div>
  {/if}
  {#if separator !== 'hide'}
    <Separator
      class="{classNames('Group__separator', {
        'Group__separator--force': separator === 'show',
      })}"
    />
  {/if}
</section>
