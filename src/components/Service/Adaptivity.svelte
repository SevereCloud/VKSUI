
<script lang="ts">
  import { setContext, onDestroy, beforeUpdate, onMount } from 'svelte';
  import { AdaptivityContextInterface, AdaptivityContextKey, calculateAdaptivity, SizeType, ViewWidth } from '../../lib/adaptivity';

  let updateAdaptivity = 0;
  
  export let windows: Window = window;
  export let sizeX: SizeType = undefined;
  export let sizeY: SizeType = undefined;
  export let viewWidth: ViewWidth = undefined;

  let currentProps: AdaptivityContextInterface = calculateAdaptivity(
    windows.innerWidth,
    { sizeX, sizeY, viewWidth },
  );

  const onResize = () => {
    const calculated = calculateAdaptivity(windows.innerWidth, {
      sizeX,
      sizeY,
      viewWidth,
    });

    if (
      currentProps.viewWidth !== calculated.viewWidth ||
      currentProps.sizeX !== calculated.sizeX ||
      currentProps.sizeY !== calculated.sizeY
    ) {
      currentProps = calculated;
      setContext(AdaptivityContextKey, currentProps);
      updateAdaptivity++;
    }
  }

  beforeUpdate(() => {
    onResize();
  });

  onMount(() => {
    windows.addEventListener('resize', onResize, false);
  });

  onDestroy(()=>{
    windows.removeEventListener('resize', onResize, false)
  })
</script>

{#key updateAdaptivity}
<slot />
{/key}