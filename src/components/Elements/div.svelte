<script>
  export let this_ = undefined;
</script>

<div bind:this="{this_}" {...$$restProps} on:click on:dragstart>
  <slot />
</div>
