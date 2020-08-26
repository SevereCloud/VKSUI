<style>
  :global(.SimpleCell) {
    display: flex;
    align-items: center;
    min-height: 48px;
    white-space: nowrap;
    text-decoration: none;
    color: var(--text_primary);
  }

  :global(.SimpleCell--sizeX-compact) {
    border-radius: 0;
  }

  :global(.SimpleCell--mult) {
    white-space: normal;
  }

  :global(.SimpleCell--mult) .SimpleCell__description,
  :global(.SimpleCell--mult) .SimpleCell__children {
    text-overflow: initial;
  }

  :global(.SimpleCell) :global(.Avatar),
  :global(.SimpleCell) :global(.Icon) {
    flex-shrink: 0;
  }

  :global(.SimpleCell) :global(.Icon) {
    color: var(--accent);
  }

  .SimpleCell__main {
    max-width: 100%;
    flex-grow: 1;
    min-width: 0;
    flex-shrink: initial;
    overflow: hidden;
  }

  :global(.SimpleCell) :global(.Icon),
  :global(.SimpleCell) :global(.Avatar) {
    padding-right: 12px;
  }

  :global(.SimpleCell) :global(.Icon--28) {
    padding-right: 16px;
  }

  :global(.SimpleCell) :global(.Icon),
  :global(.SimpleCell) :global(.Avatar--sz-32),
  :global(.SimpleCell) :global(.Avatar--sz-28) {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  :global(.SimpleCell) :global(.Avatar--sz-40) {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  :global(.SimpleCell) :global(.Avatar--sz-48),
  :global(.SimpleCell) :global(.Avatar--sz-72) {
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

  :global(.SimpleCell)
    :global(.Avatar--sz-32 ~ .SimpleCell__main .SimpleCell__description),
  :global(.SimpleCell)
    :global(.Avatar--sz-28 ~ .SimpleCell__main .SimpleCell__description) {
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

  :global(.SimpleCell) :global(.Switch) {
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

  :global(.SimpleCell--ios) {
    font-size: 17px;
    line-height: 22px;
    padding-left: 12px;
    padding-right: 12px;
  }

  :global(.SimpleCell--ios) .SimpleCell__main,
  :global(.SimpleCell--ios) .SimpleCell__indicator {
    padding-top: 9px;
    padding-bottom: 11px;
  }

  :global(.SimpleCell--ios)
    :global(.Avatar:not(.Avatar--sz-32) ~ .SimpleCell__main),
  :global(.SimpleCell--ios)
    :global(.Avatar:not(.Avatar--sz-32) ~ .SimpleCell__indicator) {
    font-size: 16px;
    line-height: 20px;
  }

  :global(.SimpleCell--ios) :global(.Icon--28),
  :global(.SimpleCell--ios) :global(.Avatar--sz-32),
  :global(.SimpleCell--ios) :global(.Avatar--sz-28) {
    padding-left: 4px;
  }

  :global(.SimpleCell--ios) .SimpleCell__after :global(.Icon--chevron_24) {
    color: var(--icon_tertiary);
    padding-right: 4px;
    padding-left: 12px;
  }

  :global(.SimpleCell--ios) .SimpleCell__after :global(.IconButton .Icon--16),
  :global(.SimpleCell--ios)
    .SimpleCell__after
    :global(.IconButton .Icon--16 ~ *) {
    margin-right: -12px;
  }

  /**
 * Android
 */

  :global(.SimpleCell--android) {
    font-size: 16px;
    line-height: 20px;
    padding-left: 16px;
    padding-right: 16px;
  }

  :global(.SimpleCell--android) .SimpleCell__main,
  :global(.SimpleCell--android) .SimpleCell__indicator {
    padding-top: 11px;
    padding-bottom: 10px;
  }
</style>

<script lang="ts">
  import Icon24Chevron from '@sveltevk/icons/dist/24/chevron';

  import Tapptable from '../Service/Tapptable.svelte';
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

<!-- 
@component
SimpleCell — это упрощенная и улучшенная с точки зрения соответствия дизайну версия Cell. Она не может быть
удаляемой, выделяемой или перетаскиваемой. У неё нет размеров. В ней меньше html-элементов.
Всё это влияет на скорость её отрисовки, особенно если идёт речь о сотнях экземпляров.
-->

<Tapptable
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
      {#if expandable && platform === IOS}
        <Icon24Chevron />
      {/if}
    </div>
  {/if}
</Tapptable>
