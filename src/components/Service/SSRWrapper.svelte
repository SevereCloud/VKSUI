<script lang="ts">
  import { setContext, beforeUpdate } from 'svelte';
  import { SSRContextKey, SSRBuildContext } from '../../lib/ssr';

  export let userAgent: string;

  beforeUpdate(() => {
    setContext(SSRContextKey, SSRBuildContext({ userAgent }));
  });

  setContext(SSRContextKey, SSRBuildContext({ userAgent }));
</script>

{#key userAgent}
<slot />
{/key}