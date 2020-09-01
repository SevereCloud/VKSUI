<style>
  .PromoBanner {
    width: 100%;
    box-sizing: border-box;
    outline: 1px solid var(--separator_alpha);
    color: var(--text_primary);
    background: var(--background_content);
    padding-bottom: 11px;
    position: relative;
  }

  .PromoBanner__head {
    padding: 11px 11px 0 11px;
    height: 27px;
  }

  .PromoBanner__age {
    border: 1px solid var(--separator_alpha);
    padding: 0 4px;
    line-height: 18px;
    font-size: 12px;
    color: var(--text_secondary);
  }

  .PromoBanner__label {
    font-size: 12px;
    line-height: 18px;
    color: var(--text_secondary);
  }

  .PromoBanner__age + .PromoBanner__label {
    padding-left: 10px;
  }

  .PromoBanner__close {
    position: absolute;
    top: 0;
    right: 0;
    width: 48px;
    height: 48px;
    color: var(--placeholder_icon_foreground_primary);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .PromoBanner__close:active {
    opacity: 0.7;
  }

  .PromoBanner__pixels {
    display: none;
  }
</style>

<script context="module" lang="ts">
  export type StatsType = 'playbackStarted' | 'click';

  export type BannerData = {
    title?: string;
    url_types?: string; // eslint-disable-line camelcase
    bannerID?: string;
    imageWidth?: number;
    imageHeight?: number;
    imageLink?: string;
    trackingLink?: string;
    type?: string;
    iconWidth?: number;
    domain?: string;
    ctaText?: string;
    advertisingLabel?: string;
    iconLink?: string;
    statistics?: Array<{ type: StatsType; url: string }>;
    openInBrowser?: boolean;
    iconHeight?: number;
    directLink?: boolean;
    navigationType?: string;
    description?: string;
    ageRestrictions?: string;
    /** @deprecated */
    ageRestriction?: number;
  };
</script>

<script lang="ts">
  import classNames from '../../lib/classNames';
  import Icon24Dismiss from '@sveltevk/icons/dist/24/dismiss';
  import Button from '../Blocks/Button.svelte';
  import SimpleCell from '../Blocks/SimpleCell.svelte';
  import Avatar from '../Blocks/Avatar.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  /** Данные рекламного баннера, полученные из VKWebAppGetAds */
  export let bannerData: BannerData;

  /** Флаг скрытия кнопки закрытия рекламы */
  export let isCloseButtonHidden: boolean = false;

  export let currentPixel: string = '';

  const ageRestrictions =
    bannerData.ageRestrictions != null
      ? parseInt(bannerData.ageRestrictions)
      : bannerData.ageRestriction;
</script>

<div class="{classNames('PromoBanner', $$props.class)}">
  <div class="PromoBanner__head">
    {#if ageRestrictions != null}
      <span class="PromoBanner__age">{ageRestrictions}+</span>
    {/if}
    <span class="PromoBanner__label">
      {bannerData.advertisingLabel || 'Advertisement'}
    </span>

    {#if isCloseButtonHidden}
      <div class="PromoBanner__close" on:click="{() => dispatch('close')}">
        <Icon24Dismiss />
      </div>
    {/if}
  </div>
  <SimpleCell
    href="{bannerData.trackingLink}"
    on:click
    rel="nofollow noopener noreferrer"
    target="_blank"
    description="{bannerData.domain}"
  >
    <div slot="before">
      <Avatar
        mode="image"
        size="{48}"
        src="{bannerData.iconLink}"
        alt="{bannerData.title}"
      />
    </div>
    <div slot="after">
      <Button mode="outline">{bannerData.ctaText}</Button>
    </div>
    {bannerData.title}
  </SimpleCell>

  {#if currentPixel.length > 0}
    <div class="PromoBanner__pixels">
      <img src="{currentPixel}" alt="" />
    </div>
  {/if}
</div>
