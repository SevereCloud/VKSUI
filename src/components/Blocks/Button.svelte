<style>
  :global(.Button) {
    display: inline-block;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    cursor: default;
    border: 1px solid transparent;
    margin: 0;
    padding: 0;
    user-select: none;
  }

  .Button__in {
    display: flex;
    align-items: center;
  }

  :global(.Button.Tappable--active) {
    opacity: 0.6;
  }

  :global(.Button[disabled]) {
    opacity: 0.4;
  }

  :global(.Button--aln-left) .Button__in {
    justify-content: flex-start;
  }

  :global(.Button--aln-center) .Button__in {
    justify-content: center;
  }

  :global(.Button--aln-right) .Button__in {
    justify-content: flex-end;
  }

  :global(.Button--str) {
    display: block;
    max-width: 100%;
    flex-grow: 1;
  }

  :global(.Button--str:first-child:last-child) {
    width: 100%;
  }

  :global(.Button--stretched) .Button__in {
    justify-content: center;
  }

  .Button__before :global(.Icon--16) {
    margin-right: 6px;
  }

  .Button__before :global(.Icon--24),
  .Button__before :global(.Icon--28) {
    margin-right: 8px;
  }

  :global(.Button:not(.Button--sz-xl)) .Button__after {
    margin-left: 8px;
  }

  :global(.Button::before),
  :global(.Button::after) {
    display: none;
  }

  :global(.Button--lvl-primary) {
    background-color: var(--button_primary_background);
    color: var(--button_primary_foreground);
  }

  :global(.Button--lvl-secondary) {
    background-color: var(--button_secondary_background);
    color: var(--button_secondary_foreground);
  }

  :global(.Button--lvl-tertiary) {
    background-color: var(--button_tertiary_background);
    color: var(--button_tertiary_foreground);
  }

  :global(.Button--lvl-commerce) {
    background-color: var(--button_commerce_background);
    color: var(--button_commerce_foreground);
  }

  :global(.Button--lvl-outline) {
    background-color: transparent;
    border: 1px solid var(--button_outline_border);
    color: var(--button_outline_foreground);
  }

  :global(.Button--lvl-destructive) {
    background-color: var(--destructive);
    color: #fff;
  }

  :global(.Button--lvl-overlay_primary) {
    background-color: var(--media_overlay_button_background);
    color: var(--media_overlay_button_foreground);
  }

  :global(.Button--lvl-overlay_secondary) {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  :global(.Button--lvl-overlay_outline) {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
  }

  :global(.Button--sz-m) {
    padding: 0 16px;
  }

  :global(.Button--sz-m) .Button__before {
    margin-left: -4px;
  }

  :global(.Button--sz-m) .Button__content {
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
    padding: 7px 0;
  }

  :global(.Button--sz-l) {
    padding: 0 16px;
  }

  :global(.Button--sz-l) .Button__before {
    margin-left: -4px;
  }

  :global(.Button--sz-l) .Button__content {
    font-size: 15px;
    font-weight: 500;
    padding: 8px 0;
  }

  :global(.Button--sz-xl) {
    display: block;
    width: 100%;
    padding: 0 16px;
  }

  :global(.Button--sz-xl) .Button__before {
    margin-left: -6px;
    margin-right: 2px;
  }

  :global(.Button--sz-xl) .Button__before ~ .Button__content {
    padding-left: 0;
  }

  :global(.Button--sz-xl) .Button__in {
    justify-content: center;
  }

  :global(.Button--sz-xl) .Button__content {
    font-size: 17px;
    font-weight: 500;
    padding: 11px;
  }

  /*
  iOS
 */
  :global(.Button--ios) {
    border-radius: 10px;
  }

  /*
  Android
 */
  :global(.Button--android) {
    border-radius: 8px;
  }

  /**
 * Counter
 */
  :global(.Button--lvl-primary) :global(.Counter) {
    background-color: var(--button_primary_foreground);
    color: var(--button_primary_background);
  }

  :global(.Button--lvl-secondary) :global(.Counter) {
    background-color: var(--button_secondary_foreground);
    color: var(--background_content);
  }

  :global(.Button--lvl-tertiary) :global(.Counter) {
    background-color: var(--button_tertiary_foreground);
    color: var(--background_content);
  }

  :global(.Button--lvl-outline) :global(.Counter) {
    background-color: var(--button_outline_foreground);
    color: var(--background_content);
  }

  :global(.Button--lvl-commerce) :global(.Counter) {
    background-color: var(--button_commerce_foreground);
    color: var(--button_commerce_background);
  }
</style>

<script lang="ts">
  import Tappable from '../Service/Tappable.svelte';
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';
  import { ANDROID } from '../../lib/platform';

  export let before: any = undefined;
  export let after: any = undefined;

  export let mode:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'outline'
    | 'commerce'
    | 'destructive'
    | 'overlay_primary'
    | 'overlay_secondary'
    | 'overlay_outline' = 'primary';
  export let size: 'm' | 'l' | 'xl' = 'm';
  export let stretched: boolean = false;
  export let align: 'left' | 'center' | 'right' = 'center';

  const platform = usePlatform();

  const SLOTS = $$props.$$slots;
  $: $$restProps.class = classNames(
    getClassName('Button', platform),
    $$props.class,
    `Button--sz-${size}`,
    `Button--lvl-${mode}`,
    `Button--aln-${align || 'center'}`,
    {
      ['Button--str']: stretched,
    },
  );
</script>

<Tappable {...$$restProps} on:click>
  <div class="Button__in">
    {#if (SLOTS && SLOTS.before) || before}
      <div class="Button__before">
        <slot name="before">{before}</slot>
      </div>
    {/if}
    {#if (SLOTS && SLOTS.default)}
      <div class="Button__content">
        <slot />
      </div>
    {/if}
    {#if (SLOTS && SLOTS.after) || after}
      <div class="Button__after">
        <slot name="after">{after}</slot>
      </div>
    {/if}
  </div>
</Tappable>
