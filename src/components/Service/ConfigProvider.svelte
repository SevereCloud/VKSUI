<script lang="ts" context="module">
  const mapOldScheme = (scheme: AppearanceSchemeType): AppearanceSchemeType => {
    switch (scheme) {
      case Scheme.DEPRECATED_CLIENT_LIGHT:
        return Scheme.BRIGHT_LIGHT;
      case Scheme.DEPRECATED_CLIENT_DARK:
        return Scheme.SPACE_GRAY;
      default:
        return scheme;
    }
  };

  const setScheme = (
    scheme: AppearanceSchemeType,
    contextDocument?: Document,
  ): void => {
    (contextDocument || document).body.setAttribute('scheme', scheme);
  };
</script>

<script lang="ts">
  import { setContext } from 'svelte';
  import vkBridge, {
    AppearanceSchemeType,
    AppearanceType,
  } from '@vkontakte/vk-bridge';
  import {
    Scheme,
    WebviewType,
    Appearance,
    ContextKey,
  } from '../../lib/config';
  import { OS, platform as getPlatform } from '../../lib/platform';
  import { writable } from 'svelte/store';
  import Adaptivity from './Adaptivity.svelte';
  import type { SizeType, ViewWidth } from '../../lib/adaptivity';

  /**
   * Цветовая схема приложения
   */
  export let scheme: AppearanceSchemeType = Scheme.BRIGHT_LIGHT;
  /**
   * Подсказывает приложению, обёрнутому в `ConfigProvider`, где открыто приложение: внутри webview или в мобильном браузере
   */
  export let isWebView: boolean = vkBridge.isWebView();
  /**
   * Тип вебвью.<br>
   * В случае `WebviewType.VKAPPS` интерфейс будет адаптирован для отображения в вебвью Mini Apps (системные контролы в правой части шапки)
   */
  export let webviewType: WebviewType.INTERNAL | WebviewType.VKAPPS =
    WebviewType.VKAPPS;
  /**
   * Тип приложения
   */
  export let app: string = undefined;
  /**
   * Тип цветовой схемы – `light` или `dark`
   */
  export let appearance: AppearanceType = Appearance.LIGHT;
  /**
   * Включена ли анимация переходов между экранами в `Root` и `View`
   */
  export let transitionMotionEnabled: boolean = true;
  /**
   * Платформа
   */
  export let platform: OS = getPlatform();

  export let contentWindow: Window = window;
  export let sizeX: SizeType = undefined;
  export let sizeY: SizeType = undefined;
  export let viewWidth: ViewWidth = undefined;

  let wScheme = writable(scheme);
  let wIsWebView = writable(isWebView);
  let wWebviewType = writable(webviewType);
  let wApp = writable(app);
  let wAppearance = writable(appearance);
  let wTransitionMotionEnabled = writable(transitionMotionEnabled);
  let wPlatform = writable(platform);
  let wContentWindow = writable(contentWindow);

  setContext(ContextKey.scheme, wScheme);
  setContext(ContextKey.isWebView, wIsWebView);
  setContext(ContextKey.webviewType, wWebviewType);
  setContext(ContextKey.app, wApp);
  setContext(ContextKey.appearance, wAppearance);
  setContext(ContextKey.transitionMotionEnabled, wTransitionMotionEnabled);
  setContext(ContextKey.platform, wPlatform);
  setContext(ContextKey.contentWindow, wContentWindow)

  $: wScheme.set(scheme);
  $: wIsWebView.set(isWebView);
  $: wWebviewType.set(webviewType);
  $: wApp.set(app);
  $: wAppearance.set(appearance);
  $: wTransitionMotionEnabled.set(transitionMotionEnabled);
  $: wPlatform.set(platform);
  $: wContentWindow.set(contentWindow);
  $: {
    setScheme(mapOldScheme(scheme), $$props.document);
  }
</script>

<!-- 
@component
Компонент для прокидывания конфигурации приложению.
-->

<Adaptivity
  {contentWindow}
  {sizeX}
  {sizeY}
  {viewWidth}
>
  <slot />
</Adaptivity>
