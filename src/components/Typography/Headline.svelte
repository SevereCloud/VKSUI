<script lang="ts">
  import usePlatform from "../../hooks/usePlatform";
  import classNames from "../../lib/classNames";
  import getClassName from "../../lib/getClassName";
  import { ANDROID } from "../../lib/platform";

  export let weight: "regular" | "medium" | "semibold";

  const platform = usePlatform();

  let headlineWeight = weight;

  if (platform === ANDROID && weight === "semibold") {
    headlineWeight = "medium";
  }
</script>

<style>
  .Headline {
    margin: 0;
    font-size: 16px;
    line-height: 20px;
  }

  .Headline--w-regular {
    font-weight: 400;
  }

  .Headline--w-medium {
    font-weight: 500;
  }

  .Headline--w-semibold {
    font-weight: 600;
  }
</style>

{#if platform === ANDROID}
  <h3
    {...$$restProps}
    class={classNames(getClassName('Headline', platform), `Headline--w-${headlineWeight}`, $$props.class)}>
    <slot />
  </h3>
{:else}
  <h4
    {...$$restProps}
    class={classNames(getClassName('Headline', platform), `Headline--w-${headlineWeight}`, $$props.class)}>
    <slot />
  </h4>
{/if}
