<style>
  .SimpleCell {
    display: flex;
    align-items: center;
    min-height: 48px;
    white-space: nowrap;
    text-decoration: none;
    color: var(--text_primary);
  }

  .SimpleCell--sizeX-compact {
    border-radius: 0;
  }

  .SimpleCell--mult {
    white-space: normal;
  }

  .SimpleCell--mult .SimpleCell__description,
  .SimpleCell--mult .SimpleCell__children {
    text-overflow: initial;
  }

  .SimpleCell :global(.Avatar),
  .SimpleCell :global(.Icon) {
    flex-shrink: 0;
  }

  .SimpleCell :global(.Icon) {
    color: var(--accent);
  }

  .SimpleCell__main {
    max-width: 100%;
    flex-grow: 1;
    min-width: 0;
    flex-shrink: initial;
    overflow: hidden;
  }

  .SimpleCell :global(.Icon),
  .SimpleCell :global(.Avatar) {
    padding-right: 12px;
  }

  .SimpleCell :global(.Icon--28) {
    padding-right: 16px;
  }

  .SimpleCell :global(.Icon),
  .SimpleCell :global(.Avatar--sz-32),
  .SimpleCell :global(.Avatar--sz-28) {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .SimpleCell :global(.Avatar--sz-40) {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .SimpleCell :global(.Avatar--sz-48),
  .SimpleCell :global(.Avatar--sz-72) {
    padding-top: 6px;
    padding-bottom: 6px;
  }

  .SimpleCell__description {
    color: var(--text_secondary);
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 13px;
    line-height: 16px;
    margin-top: 3px;
  }

  .SimpleCell :global(.Avatar--sz-32 ~ .SimpleCell__main .SimpleCell__description),
  .SimpleCell :global(.Avatar--sz-28 ~ .SimpleCell__main .SimpleCell__description) {
    margin-top: 2px;
  }

  .SimpleCell__children {
    color: var(--text_primary);
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .SimpleCell__indicator {
    color: var(--text_secondary);
    min-width: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-left: 4px;
  }

  .SimpleCell__after {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    color: var(--accent);
  }

  .SimpleCell__after :global(.Icon) {
    padding-left: 8px;
  }

  .SimpleCell__after :global(.Icon:last-child) {
    padding-right: 2px;
  }

  .SimpleCell :global(.Switch) {
    padding-left: 10px;
  }

  .SimpleCell__after :global(.IconButton) :global(.Icon--28),
  .SimpleCell__after :global(.IconButton) :global(.Icon--28 ~ *) {
    margin-right: -8px;
  }

  .SimpleCell__after :global(.IconButton) :global(.Icon--24),
  .SimpleCell__after :global(.IconButton) :global(.Icon--24 ~ *) {
    margin-right: -10px;
  }

  .SimpleCell__after :global(.IconButton) :global(.Icon--16),
  .SimpleCell__after :global(.IconButton) :global(.Icon--16 ~ *) {
    margin-right: -14px;
  }

  .SimpleCell__after :global(.IconButton) :global(.Icon--w-8),
  .SimpleCell__after :global(.IconButton) :global(.Icon--w-8 ~ *) {
    margin-right: -12px;
  }

  /**
 * iOS
 */

  .SimpleCell--ios {
    font-size: 17px;
    line-height: 22px;
    padding-left: 12px;
    padding-right: 12px;
  }

  .SimpleCell--ios .SimpleCell__main,
  .SimpleCell--ios .SimpleCell__indicator {
    padding-top: 9px;
    padding-bottom: 11px;
  }

  .SimpleCell--ios :global(.Avatar:not(.Avatar--sz-32) ~ .SimpleCell__main),
  .SimpleCell--ios :global(.Avatar:not(.Avatar--sz-32) ~ .SimpleCell__indicator) {
    font-size: 16px;
    line-height: 20px;
  }

  .SimpleCell--ios :global(.Icon--28),
  .SimpleCell--ios :global(.Avatar--sz-32),
  .SimpleCell--ios :global(.Avatar--sz-28) {
    padding-left: 4px;
  }

  .SimpleCell--ios .SimpleCell__after :global(.Icon--chevron_24) {
    color: var(--icon_tertiary);
    padding-right: 4px;
    padding-left: 12px;
  }

  .SimpleCell--ios .SimpleCell__after :global(.IconButton .Icon--16),
  .SimpleCell--ios .SimpleCell__after :global(.IconButton .Icon--16 ~ *) {
    margin-right: -12px;
  }

  /**
 * Android
 */

  .SimpleCell--android {
    font-size: 16px;
    line-height: 20px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .SimpleCell--android .SimpleCell__main,
  .SimpleCell--android .SimpleCell__indicator {
    padding-top: 11px;
    padding-bottom: 10px;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';
  import { IOS } from '../../lib/platform';
  import { SizeType } from '../Service/AdaptivityContext';

  export let indicator: any = undefined;
  export let description: string = '';
  export let sizeX: SizeType = SizeType.REGULAR;
  /**
   * Убирает анимацию нажатия
   */
  //  disabled?: boolean;

  /**
   * В iOS добавляет chevron справа. Передавать `true`, если предполагается переход при клике по ячейке.
   */
  export let expandable: boolean = false;
  export let multiline: boolean = false;

  const platform = usePlatform();

  const SLOTS = $$props.$$slots;
</script>

<!-- TODO: Tappable -->
<div
  {...$$restProps}
  class="{classNames(getClassName('SimpleCell', platform), `SimpleCell--sizeX-${sizeX}`, { 'SimpleCell--exp': expandable, 'SimpleCell--mult': multiline }, $$props.class)}"
>
  <slot name="before" />
  <div class="SimpleCell__main">
    <div class="SimpleCell__children">
      <slot />
    </div>
    {#if (SLOTS && SLOTS.description) || description}
      <div class="SimpleCell__description">
        <slot name="description">{description}</slot>
      </div>
    {/if}
  </div>
  <!-- TODO: что насчет null? -->
  {#if (SLOTS && SLOTS.indicator) || typeof indicator !== 'undefined'}
    <div class="SimpleCell__indicator">
      <slot name="indicator">{indicator}</slot>
    </div>
  {/if}
  {#if (SLOTS && SLOTS.after) || (expandable && platform === IOS)}
    <div class="SimpleCell__after">
      <slot name="after" />
      <!-- TODO: иконка для iOS -->
    </div>
  {/if}
</div>
