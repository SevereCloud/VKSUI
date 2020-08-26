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
  import { onMount } from 'svelte';
  import Touch from './components/Service/Touch.svelte';
  import type { TouchEvent } from './components/Service/Touch.svelte';

  let container: HTMLElement;

  let shiftX = 0;
  let shiftY = 0;

  let startX = 0;
  let startY = 0;
  let limitX = 0;
  let limitY = 0;

  onMount(() => {
    limitX = container.offsetLeft;
    limitY = container.offsetTop;
  });

  const onMove = (e: TouchEvent) => {
    let newShiftX = startX + e.shiftX;
    let newShiftY = startY + e.shiftY;

    shiftX =
      newShiftX > limitX ? limitX : newShiftX < -limitX ? -limitX : newShiftX;
    shiftY =
      newShiftY > limitY ? limitY : newShiftY < -limitY ? -limitY : newShiftY;
  };

  const onEnd = (e: TouchEvent) => {
    startX += e.shiftX;
    startY += e.shiftY;
  };

  $: limitExceeded = Math.abs(shiftX) >= limitX || Math.abs(shiftY) >= limitY;
</script>

<div class="container" class:limitExceeded>
  <Touch
    bind:container
    onEnd="{onEnd}"
    onMove="{onMove}"
    class="circle"
    style="{`transform: translate(${shiftX}px, ${shiftY}px)`}"
  />
</div>
