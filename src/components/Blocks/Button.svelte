<style>
  :global(.Button) {
    display: inline-block;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    border: 1px solid transparent;
    margin: 0;
    padding: 0;
    user-select: none;
  }

  .Button__in {
    display: flex;
    align-items: center;
  }

  .Button__before:not(:last-child) {
    margin-left: -4px;
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
    width: 100%;
    flex-grow: 1;
    flex-basis: 0;
  }

  :global(.Button--str) .Button__in {
    justify-content: center;
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

  :global(.Button--sz-s) {
    min-height: 30px;
    padding: 0 16px;
  }

  :global(.Button--sz-s) .Button__before:not(:last-child) {
    margin-right: 6px;
  }

  :global(.Button--sz-s) .Button__after:not(:first-child) {
    margin-left: 6px;
  }

  :global(.Button--sz-s) :global(.Button__content) {
    padding: 4px 0 6px;
  }

  :global(.Button--sz-s) :global(.Button__content--caps) {
    padding: 7px 0;
  }

  :global(.Button--sz-m) {
    padding: 0 16px;
    min-height: 36px;
  }

  :global(.Button--sz-m) .Button__before:not(:last-child) {
    margin-right: 6px;
  }

  :global(.Button--sz-m) .Button__after:not(:first-child) {
    margin-left: 6px;
  }

  :global(.Button--sz-m) :global(.Button__content) {
    padding: 6px 0 8px;
  }

  :global(.Button--sz-l) {
    padding: 0 20px;
    min-height: 44px;
  }

  :global(.Button--sz-l) .Button__before:not(:last-child) {
    margin-right: 8px;
  }

  :global(.Button--sz-l) .Button__after:not(:first-child) {
    margin-left: 8px;
  }

  :global(.Button--sz-l) .Button__in {
    justify-content: center;
  }

  /*
  iOS
 */
  :global(.Button--ios) {
    border-radius: 10px;
  }

  :global(.Button--ios.Button--sz-l) :global(.Button__content) {
    padding: 9px 0 11px;
  }

  /*
  Android
 */
  :global(.Button--android) {
    border-radius: 8px;
  }

  :global(.Button--android.Button--sz-l) :global(.Button__content) {
    padding: 10px 0 12px;
  }

  /*
  VKCOM
*/
  :global(.Button--vkcom) {
    border-radius: 4px;
  }

  /*
  sizeY = Compact
*/
  /* small size */
  :global(.Button--sizeY-compact.Button--sz-s) {
    min-height: 26px;
  }

  :global(.Button--sizeY-compact.Button--sz-s) :global(.Button__content) {
    padding-top: 3px;
    padding-bottom: 5px;
  }

  :global(.Button--sizeY-compact.Button--sz-s) :global(.Button__content--caps) {
    padding: 5px 0;
  }

  /* medium size */
  :global(.Button--sizeY-compact.Button--sz-m) {
    min-height: 32px;
  }

  :global(.Button--sizeY-compact.Button--sz-m) :global(.Button__content) {
    padding-top: 4px;
    padding-bottom: 6px;
  }

  /* large size */
  :global(.Button--sizeY-compact.Button--sz-l) {
    min-height: 40px;
  }

  :global(.Button--sizeY-compact.Button--sz-l) :global(.Button__content) {
    padding-top: 8px;
    padding-bottom: 10px;
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
  import useAdaptivity from '../../hooks/useAdaptivity';
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';
  import button from '../Elements/button.svelte';
  import a from '../Elements/a.svelte';
  import Caption from '../Typography/Caption.svelte';
  import Subhead from '../Typography/Subhead.svelte';
  import Text from '../Typography/Text.svelte';
  import Title from '../Typography/Title.svelte';
  import { Platform } from '../../lib/platform';
  import { SizeType } from '../../lib/adaptivity';

  export let component = button;

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
  export let size: 's' | 'm' | 'l' = 's';
  export let stretched: boolean = false;
  export let align: 'left' | 'center' | 'right' = 'center';

  const adaptivity = useAdaptivity();
  const platform = usePlatform();

  $: $$restProps.class = classNames(
    getClassName('Button', $platform),
    $$props.class,
    `Button--sz-${size}`,
    `Button--lvl-${mode}`,
    `Button--aln-${align || 'center'}`,
    `Button--sizeY-${$adaptivity.sizeY}`,
    {
      ['Button--str']: stretched,
      ['Button--with-icon']: hasIcons,
    },
  );

  $: hasIcons = $$slots.before || before || $$slots.after || after;
</script>

<Tappable
  {...$$restProps}
  on:click
  component="{$$restProps.href ? a : component}"
>
  <div class="Button__in">
    {#if $$slots.before || before}
      <div class="Button__before">
        <slot name="before">{before}</slot>
      </div>
    {/if}
    {#if $$slots.default}
      {#if size === 'l'}
        {#if $adaptivity.sizeY === SizeType.COMPACT}
          <Text weight="medium" class="Button__content">
            <slot />
          </Text>
        {:else}
          <Title
            level="3"
            weight="medium"
            component="div"
            class="Button__content"
          >
            <slot />
          </Title>
        {/if}
      {:else if size === 'm'}
        {#if $adaptivity.sizeY === SizeType.COMPACT}
          <Subhead weight="medium" class="Button__content">
            <slot />
          </Subhead>
        {:else}
          <Text weight="medium" class="Button__content">
            <slot />
          </Text>
        {/if}
      {:else if size === 's'}
        {#if hasIcons}
          <Caption
            caps="{$platform !== Platform.VKCOM}"
            level="{$platform === Platform.VKCOM ? '1' : $adaptivity.sizeY === SizeType.COMPACT ? '3' : '2'}"
            weight="{$platform === Platform.VKCOM || $adaptivity.sizeY === SizeType.COMPACT ? 'medium' : 'semibold'}"
            class="{'Button__content' + ($platform !== Platform.VKCOM ? '--caps' : '')}"
          >
            <slot />
          </Caption>
        {:else if $adaptivity.sizeY === SizeType.COMPACT}
          <Caption weight="medium" level="1" class="Button__content">
            <slot />
          </Caption>
        {:else}
          <Subhead weight="medium" class="Button__content">
            <slot />
          </Subhead>
        {/if}
      {/if}
    {/if}
    {#if $$slots.after || after}
      <div class="Button__after">
        <slot name="after">{after}</slot>
      </div>
    {/if}
  </div>
</Tappable>
