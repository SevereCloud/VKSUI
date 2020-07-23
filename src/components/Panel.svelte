<script lang="ts">
  import Touch from './Touch.svelte'

  export let centered = false;
  export let theme = "gray";
</script>

<style>
  .Panel {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .Panel::after {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    content: "";
  }

  .centered .Panel__in {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .Panel__in {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
    z-index: 2;
    padding-bottom: var(--safe-area-inset-bottom);
  }

  /* .Epic .Panel__in {
    padding-bottom: var(--tabbar_height);
    padding-bottom: calc(var(--safe-area-inset-bottom) + var(--tabbar_height));
  } */

  .Panel__in-before {
    height: 1px;
    margin-bottom: -1px;
  }

  .Panel__in-after {
    height: 1px;
    margin-top: -1px;
  }

  .Panel.gray .Panel__in,
  .Panel.gray::after {
    background-color: var(--background_page);
  }

  .Panel.white .Panel__in,
  .Panel.white::after {
    background-color: var(--background_content);
  }
</style>

<div
  class="Panel"
  class:centered
  class:gray={theme === 'gray'}
  class:white={theme === 'white'}>
  <div class="Panel__in">
    <div class="Panel__in-before" />
    <slot />
    <div class="Panel__in-after" />
  </div>
</div>
