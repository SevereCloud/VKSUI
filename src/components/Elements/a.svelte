<script>
  export let href;
  export let this_ = undefined;
</script>

<a
  bind:this="{this_}"
  href="{href}"
  {...$$restProps}
  on:click
  on:dragstart
  on:mouseover
  on:mouseout
>
  <slot />
</a>
