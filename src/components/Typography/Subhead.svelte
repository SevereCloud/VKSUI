<script lang="ts">
  import usePlatform from "../../hooks/usePlatform";
  import classNames from "../../lib/classNames";
  import getClassName from "../../lib/getClassName";
  import { ANDROID } from "../../lib/platform";

  export let weight: "regular" | "medium" | "semibold" | "bold";

  const platform = usePlatform();

  let subheadWeight = weight;

  if (platform === ANDROID && weight === "semibold") {
    subheadWeight = "medium";
  }
</script>

<style>
  .Subhead {
    margin: 0;
    font-size: 14px;
    line-height: 18px;
  }

  .Subhead--w-regular {
    font-weight: 400;
  }

  .Subhead--w-medium {
    font-weight: 500;
  }

  .Subhead--w-semibold {
    font-weight: 600;
  }

  .Subhead--w-bold {
    font-weight: 600;
  }
</style>

{#if platform === ANDROID}
  <h4
    {...$$restProps}
    class={classNames(getClassName('Subhead', platform), `Subhead--w-${subheadWeight}`, $$props.class)}>
    <slot />
  </h4>
{:else}
  <h5
    {...$$restProps}
    class={classNames(getClassName('Subhead', platform), `Subhead--w-${subheadWeight}`, $$props.class)}>
    <slot />
  </h5>
{/if}
