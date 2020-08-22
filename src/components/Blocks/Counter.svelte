<style>
  .Counter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Counter__in {
    text-align: center;
    box-sizing: border-box;
  }

  .Counter--primary {
    background: var(--counter_primary_background);
    color: var(--counter_primary_text);
  }

  .Counter--secondary {
    background: var(--counter_secondary_background);
    color: var(--counter_secondary_text);
  }

  .Counter--prominent {
    background: var(--counter_prominent_background);
    color: var(--counter_prominent_text);
  }

  .Counter--s-m {
    height: 24px;
    border-radius: 12px;
  }

  .Counter--s-m .Counter__in {
    min-width: 24px;
    padding: 2px 5px;
    font-size: 15px;
    line-height: 20px;
  }

  .Counter--s-s {
    height: 18px;
    border-radius: 9px;
  }

  .Counter--s-s .Counter__in {
    min-width: 18px;
    padding: 1px 5px;
    font-size: 12px;
    line-height: 16px;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';

  export let mode: 'secondary' | 'primary' | 'prominent' = 'secondary';
  export let size: 's' | 'm' = 'm';

  const platform = usePlatform();
</script>

<!-- 
@component
Компонент для отрисовки счетчика в ячейках и кнопках.
Принимает в качестве слота число или строку с отформатированным числом по разрядам.
-->

<div
  {...$$restProps}
  class="{classNames(getClassName('Counter', platform), $$props.class, `Counter--${mode}`, `Counter--s-${size}`)}"
>
  <div class="Counter__in">
    <slot />
  </div>
</div>
