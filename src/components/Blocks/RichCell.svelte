<style>
  :global(.RichCell) {
    display: flex;
    min-height: 64px;
    padding: 8px 0;
    box-sizing: border-box;
    white-space: nowrap;
    text-decoration: none;
    color: var(--text_primary);
  }

  :global(.RichCell--mult) {
    white-space: normal;
  }

  :global(.RichCell--mult) .RichCell__children,
  :global(.RichCell--mult) .RichCell__caption,
  :global(.RichCell--mult) .RichCell__text {
    text-overflow: initial;
  }

  /* FIXME: update for fragment */
  :global(.RichCell) > :global(*) :global(.Avatar) {
    padding-right: 12px;
    flex-shrink: 0;
  }

  .RichCell__in {
    flex-grow: 1;
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .RichCell__top > :global(:first-child:not(.RichCell__content)) {
    display: none;
    pointer-events: none;
  }

  /* FIXME: update for fragment */
  .RichCell__top > :global(*) :global(.Icon--28:first-child ~ *) {
    margin-right: 32px;
  }

  .RichCell__content {
    display: flex;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
  }

  .RichCell__after {
    flex-shrink: 0;
    padding-left: 4px;
    white-space: nowrap;
  }

  .RichCell__after :global(.Icon--28) {
    position: absolute;
    right: 0;
    color: var(--accent);
  }

  /* FIXME: update for fragment */
  :global(.RichCell)
    > :global(*) :global(.Avatar--sz-72
    + .RichCell__in)
    :global(.RichCell__after
    .Icon--28) {
    top: 22px;
  }

  /* FIXME: update for fragment */
  :global(.RichCell)
    > :global(*) :global(.Avatar--sz-48 + .RichCell__in)
    :global(.RichCell__after
    .Icon--28) {
    top: 10px;
  }

  .RichCell__children {
    flex-grow: 1;
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .RichCell__text {
    font-size: 15px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .RichCell__caption {
    font-size: 13px;
    line-height: 16px;
    color: var(--text_secondary);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .RichCell__bottom :global(.UsersStack) {
    padding: 8px 0 0;
  }

  .RichCell__actions {
    display: flex;
    margin-top: 8px;
  }

  .RichCell__actions :global(.Button:not(:last-child)) {
    margin-right: 8px;
  }

  /**
 * iOS
 */

  :global(.RichCell--ios) {
    padding-right: 12px;
    padding-left: 12px;
  }

  /**
 * Android
 */

  :global(.RichCell--android) {
    padding-right: 16px;
    padding-left: 16px;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';
  import Tappable from '../Service/Tappable.svelte';
  import div from '../Elements/div.svelte';
  import a from '../Elements/a.svelte';

  /**
   * Контейнер для текста под `children`.
   */
  export let text: any = undefined;

  /**
   * Контейнер для текста под `text`.
   */
  export let caption: any = undefined;

  /**
   * Контейнер для контента под `caption`. Например `<UsersStack size="s" />`
   */
  export let bottom: any = undefined;

  /**
   * Кнопка или набор кнопок `<Button size="m" />`. Располагается под `bottom`.
   */
  // export let actions: any = undefined;

  /**
   * `<Avatar size={48|72} />`
   */
  // export let before: any = undefined;

  /**
   * Иконка 28 или текст
   */
  export let after: any = undefined;
  // export let disabled: boolean = false;
  export let multiline: boolean = false;

  const platform = usePlatform();
  const isAfterPrimitive =
    typeof after === 'string' || typeof after === 'number';

  $: $$restProps.class = classNames(
    $$props.class,
    getClassName('RichCell', $platform),
    {
      'RichCell--mult': multiline,
    },
  );
</script>

<Tappable {...$$restProps} on:click Component="{$$restProps.href ? a : div}">
  <slot name="before" />
  <div class="RichCell__in">
    <div class="RichCell__top">
      <!-- Этот after будет скрыт из верстки. Он нужен для CSS -->
      {#if isAfterPrimitive}
        <span>{after}</span>
      {:else}
        <slot name="after">{after ?? ''}</slot>
      {/if}
      <div class="RichCell__content">
        <div class="RichCell__children">
          <slot />
        </div>
        {#if ($$slots.after) || after}
          <div class="RichCell__after">
            <slot name="after">{after}</slot>
          </div>
        {/if}
      </div>
      {#if ($$slots.text) || text}
        <div class="RichCell__text">
          <slot name="text">{text}</slot>
        </div>
      {/if}
      {#if ($$slots.caption) || caption}
        <div class="RichCell__caption">
          <slot name="caption">{caption}</slot>
        </div>
      {/if}
      {#if ($$slots.bottom) || bottom || ($$slots.actions)}
        <div class="RichCell__bottom">
          <slot name="bottom">{bottom ?? ''}</slot>
          {#if $$slots.actions}
            <div class="RichCell__actions">
              <slot name="actions" />
            </div>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</Tappable>
