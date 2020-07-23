<script lang="ts">
  import usePlatform from "../../hooks/usePlatform";
  import classNames from "../../lib/classNames";
  import getClassName from "../../lib/getClassName";
  import { ANDROID } from "../../lib/platform";

  export let weight: "regular" | "medium" | "semibold" | "bold";
  export let level: "1" | "2" | "3" | "4";
  export let caps: boolean = false;

  const platform = usePlatform();

  let captionWeight = weight;

  if (platform === ANDROID && weight === "semibold") {
    captionWeight = "medium";
  }
</script>

<style>
  .Caption--caps {
    text-transform: uppercase;
  }

  .Caption--l-1 {
    font-size: 13px;
    line-height: 16px;
  }

  .Caption--l-2 {
    font-size: 12px;
    line-height: 14px;
  }

  .Caption--l-3 {
    font-size: 11px;
    line-height: 14px;
  }

  .Caption--l-4 {
    font-size: 9px;
    line-height: 12px;
  }

  .Caption--w-regular {
    font-weight: 400;
  }

  .Caption--w-medium {
    font-weight: 500;
  }

  .Caption--w-semibold {
    font-weight: 600;
  }

  .Caption--w-bold {
    font-weight: 700;
  }
</style>

<div
  {...$$restProps}
  class={classNames(getClassName('Caption', platform), `Caption--w-${captionWeight}`, `Caption--l-${level}`, { 'Caption--caps': caps }, $$props.class)}>
  <slot />
</div>
