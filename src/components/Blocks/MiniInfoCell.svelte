<style>
  .MiniInfoCell {
    display: flex;
    color: var(--text_subhead);
  }

  .MiniInfoCell__icon {
    color: var(--icon_outline_secondary);
  }

  :global(.MiniInfoCell__content) {
    flex: 1;
    min-width: 0;
    margin-left: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .MiniInfoCell--mult :global(.MiniInfoCell__content) {
    white-space: initial;
    display: -webkit-box;
    max-height: 60px;
    -webkit-line-clamp: 3;
    /* Workaround for autoprefixer bug with this property. Maybe this was fixed in 9.8.5 */
    /* autoprefixer: ignore next */
    -webkit-box-orient: vertical;
  }

  .MiniInfoCell__after {
    margin-left: 12px;
    margin-top: -2px;
    margin-bottom: -2px;
  }

  .MiniInfoCell__after :global(.UsersStack) {
    padding: 0;
  }

  .MiniInfoCell--md-add,
  .MiniInfoCell--md-add .MiniInfoCell__icon {
    color: var(--accent);
  }

  .MiniInfoCell--md-more,
  .MiniInfoCell--md-more .MiniInfoCell__icon {
    color: var(--link_alternate);
  }

  /* iOS */

  .MiniInfoCell--ios {
    padding: 6px 12px;
  }

  /* Android */

  .MiniInfoCell--android {
    padding: 6px 16px;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';
  import Text from '../Typography/Text.svelte';

  export let mode: 'base' | 'add' | 'more' = 'base';
  export let multiline: boolean = false;

  const platform = usePlatform();

  const SLOTS = $$props.$$slots;
</script>

<div
  {...$$restProps}
  class="{classNames(getClassName('MiniInfoCell', platform), { [`MiniInfoCell--md-${mode}`]: mode !== 'base', 'MiniInfoCell--mult': multiline }, $$props.class)}"
>
  <div class="MiniInfoCell__icon">
    <slot name="before" />
  </div>
  <Text
    class="MiniInfoCell__content"
    weight="{mode === 'more' ? 'medium' : 'regular'}"
  >
    <slot />
  </Text>

  {#if SLOTS && SLOTS.after}
    <div class="MiniInfoCell__after">
      <slot name="after" />
    </div>
  {/if}
</div>
