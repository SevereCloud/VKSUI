<style>
  .InfoRow {
    user-select: text;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    line-height: 20px;
  }

  /* margin у .Subhead перекрывает margin-bottom */
  /* :global(.InfoRow__header) {
    margin-bottom: 2px;
    color: var(--text_secondary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } */
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';
  import Subhead from '../Typography/Subhead.svelte';

  export let header: string = '';

  const platform = usePlatform();

</script>

<!-- 
@component
Информационный блок. Используется для отрисовки некликабельных блоков с неизменяемым контентом (то есть без инпутов, слайдеров и т.п.)
Если таких блоков несколько и они объединены по смыслу, то рекомендуется оборачивать список в `Group` с указанием `header`.
-->

<div
  {...$$restProps}
  class="{classNames(getClassName('InfoRow', platform), $$props.class)}"
>
  {#if ($$slots.header) || header}
    <Subhead class="InfoRow__header" weight="regular">
      <slot name="header">{header}</slot>
    </Subhead>
  {/if}
  <slot />
</div>
