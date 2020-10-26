<script lang="ts">
  import { setContext, onDestroy, beforeUpdate, onMount } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { writable } from 'svelte/store';
  import type {
    AdaptivityContextInterface,
  } from '../../lib/adaptivity';  
  import {
    AdaptivityContextKey,
    calculateAdaptivity,
    SizeType,
    ViewWidth,
  } from '../../lib/adaptivity';

  export let contentWindow: Window = window;
  export let sizeX: SizeType = undefined;
  export let sizeY: SizeType = undefined;
  export let viewWidth: ViewWidth = undefined;

  let currentProps: Writable<AdaptivityContextInterface> = writable(
    calculateAdaptivity(contentWindow.innerWidth, { sizeX, sizeY, viewWidth }),
  );

  setContext(AdaptivityContextKey, currentProps);

  const onResize = () => {
    const calculated = calculateAdaptivity(contentWindow.innerWidth, {
      sizeX,
      sizeY,
      viewWidth,
    });

    if (
      $currentProps.viewWidth !== calculated.viewWidth ||
      $currentProps.sizeX !== calculated.sizeX ||
      $currentProps.sizeY !== calculated.sizeY
    ) {
      currentProps.set(calculated);
    }
  };

  beforeUpdate(() => {
    onResize();
  });

  onMount(() => {
    contentWindow.addEventListener('resize', onResize, false);
  });

  onDestroy(() => {
    contentWindow.removeEventListener('resize', onResize, false);
  });
</script>

<slot />
