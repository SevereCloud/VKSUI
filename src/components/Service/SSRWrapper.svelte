<script lang="ts">
  import { setContext } from 'svelte';
  import { platform as getPlatform } from '../../lib/platform';
  import { writable } from 'svelte/store';
  import { ContextKey } from '../../lib/config';

  export let userAgent: string;

  let wPlatform = writable(getPlatform(userAgent))
  setContext(ContextKey.platform, wPlatform)

  $: wPlatform.set(getPlatform(userAgent))
</script>

<slot />
