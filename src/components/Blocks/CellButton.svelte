<style>
  :global(.CellButton) {
    display: block;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    border: none;
    cursor: default;
    width: 100%;
    background: transparent;
    position: relative;
  }

  :global(.CellButton[disabled]) {
    opacity: 0.4;
  }

  .CellButton__in {
    display: flex;
    align-items: center;
  }

  :global(.CellButton--aln-left) .CellButton__in {
    justify-content: flex-start;
    text-align: left;
  }

  :global(.CellButton--aln-center) .CellButton__in {
    justify-content: center;
    text-align: center;
  }

  :global(.CellButton--aln-right) .CellButton__in {
    justify-content: flex-end;
    text-align: right;
  }

  :global(.CellButton.Tappable--active) {
    z-index: 2;
  }

  :global(.CellButton--lvl-primary) {
    color: var(--accent);
  }

  :global(.CellButton--lvl-danger) {
    color: var(--destructive);
  }

  /*
  iOS
 */
  :global(.CellButton--ios) {
    padding: 0 12px;
  }

  :global(.CellButton) .CellButton__content {
    line-height: 20px;
    font-size: 17px;
    padding: 12px 0;
  }

  :global(.CellButton--ios) .CellButton__before :global(.Icon) {
    margin-right: 16px;
  }

  /*
  Android
 */
  :global(.CellButton--android) {
    padding: 0 16px;
  }

  :global(.CellButton--android) .CellButton__content {
    font-size: 16px;
    line-height: 20px;
    padding: 14px 0;
  }

  :global(.CellButton--android) .CellButton__before :global(.Icon) {
    margin-right: 16px;
  }
</style>

<script lang="ts">
  import Tappable from '../Service/Tappable.svelte';
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';
  import button from '../Elements/button.svelte';
  import a from '../Elements/a.svelte';

  export let Component = button;

  export let before: any = undefined;

  export let mode: 'primary' | 'danger' = 'primary';
  export let stopPropagation: boolean = true;
  export let align: 'left' | 'center' | 'right' = 'left';

  const platform = usePlatform();

  $: $$restProps.class = classNames(
    getClassName('CellButton', platform),
    $$props.class,
    `CellButton--lvl-${mode}`,
    `CellButton--aln-${align}`,
  );
</script>

<Tappable
  {...$$restProps}
  stopPropagation="{stopPropagation}"
  on:click
  Component="{$$restProps.href ? a : Component}"
>
  <div class="CellButton__in">
    {#if ($$slots.before) || before}
      <div class="CellButton__before">
        <slot name="before">{before}</slot>
      </div>
    {/if}
    {#if $$slots.default}
      <div class="CellButton__content">
        <slot />
      </div>
    {/if}
  </div>
</Tappable>
