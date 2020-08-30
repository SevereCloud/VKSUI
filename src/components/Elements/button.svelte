<script>
  export let this_ = undefined;
</script>

<button bind:this="{this_}" {...$$restProps} on:click on:dragstart>
  <slot />
</button>
