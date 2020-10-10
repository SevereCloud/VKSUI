<style>
  :global(.FormLayout) {
    position: relative;
  }

  .FormLayout__submit {
    position: absolute;
    visibility: hidden;
    pointer-events: none;
    left: 0;
    top: 0;
    padding: 0;
    width: 0;
    height: 0;
    appearance: none;
    border: none;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';
  import Form from '../Elements/form.svelte';

  export let Component = Form;

  const platform = usePlatform();
</script>

<!-- 
@component
Компонент для создания `form`. Содержит скрытый `<input type="submit" />`, обеспечивающий отправку формы
по enter.
-->

<!-- TODO: По-умолчанию в `onSubmit` происходит `e.preventDefault()`, чтобы избежать перезагрузки страницы -->

<svelte:component
  this="{Component}"
  {...$$restProps}
  on:submit
  class="{classNames(getClassName('FormLayout', platform), $$props.class)}"
>
  <div class="FormLayout__container">
    <slot />
  </div>
  {#if Component === Form}
    <input type="submit" class="FormLayout__submit" value="" />
  {/if}
</svelte:component>
