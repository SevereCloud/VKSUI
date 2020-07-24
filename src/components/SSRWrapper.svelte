<script lang="ts">
    import { setContext } from 'svelte';
    import { SSRContextKey , SSRBuildContext} from '../lib/ssr'

    export let userAgent:string;
    
    setContext(SSRContextKey, SSRBuildContext({userAgent}))    
</script>

<slot />
