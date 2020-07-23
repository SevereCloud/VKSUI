<script lang="ts">
  import usePlatform from "../../hooks/usePlatform";
  import classNames from "../../lib/classNames";
  import getClassName from "../../lib/getClassName";
  import { ANDROID } from "../../lib/platform";

  export let weight: "regular" | "medium" | "semibold";

  const platform = usePlatform();

  let textWeight = weight;

  if (platform === ANDROID && weight === "semibold") {
    textWeight = "medium";
  }
</script>

<style>
  .Text {
    font-size: 15px;
    line-height: 20px;
  }

  .Text--w-regular {
    font-weight: 400;
  }

  .Text--w-medium {
    font-weight: 500;
  }

  .Text--w-semibold {
    font-weight: 600;
  }
</style>

<div
  {...$$restProps}
  class={classNames(getClassName('Text', platform), `Text--w-${textWeight}`, $$props.class)}>
  <slot />
</div>
