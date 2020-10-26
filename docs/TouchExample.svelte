<style>
  .container {
    height: 200px;
    border: 8px solid var(--icon_secondary);
    position: relative;
    border-color: var(--icon_secondary);
  }
  .limitExceeded {
    border-color: var(--destructive);
  }

  :global(.circle) {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--accent);
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -20px;
    margin-top: -20px;
  }
</style>

<script lang="ts">
  import { getContext, onMount } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { Touch } from '../src';
  import { ContextKey } from '../src/lib/config';

  let container: HTMLElement;
  let block: HTMLElement;

  let shiftX = 0;
  let shiftY = 0;

  let startX = 0;
  let startY = 0;
  let limitX = 0;
  let limitY = 0;

  const resize = () => {
    limitX = container.offsetLeft;
    limitY = container.offsetTop;
    shiftX = shiftX > limitX ? limitX : shiftX < -limitX ? -limitX : shiftX;
    shiftY = shiftY > limitY ? limitY : shiftY < -limitY ? -limitY : shiftY;
    onEnd();
  };

  const wContentWindow = getContext(ContextKey.contentWindow) as Writable<
    Window
  >;
  const win = $wContentWindow || window;

  win.addEventListener('resize', resize);

  onMount(() => {
    if (document.readyState === 'complete') {
      resize();
    } else {
      window.addEventListener('load', resize);
    }
  });

  const onMove = (e) => {
    let newShiftX = startX + e.detail.shiftX;
    let newShiftY = startY + e.detail.shiftY;

    shiftX =
      newShiftX > limitX ? limitX : newShiftX < -limitX ? -limitX : newShiftX;
    shiftY =
      newShiftY > limitY ? limitY : newShiftY < -limitY ? -limitY : newShiftY;
  };

  const onEnd = () => {
    startX = shiftX;
    startY = shiftY;
  };

  $: limitExceeded = Math.abs(shiftX) >= limitX || Math.abs(shiftY) >= limitY;
</script>

<div bind:this="{block}" class="container" class:limitExceeded>
  <Touch
    bind:container
    on:end="{onEnd}"
    on:move="{onMove}"
    class="circle"
    style={`transform: translate(${shiftX}px, ${shiftY}px)`}
  />
</div>
