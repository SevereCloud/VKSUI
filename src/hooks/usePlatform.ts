import { getContext } from 'svelte';
import { OS, platform } from '../lib/platform';
import { SSRContextKey, SSRContextInterface } from '../lib/ssr';

export default function usePlatform(): OS {
  const ssrContext = getContext(SSRContextKey) as SSRContextInterface;

  if (ssrContext && ssrContext.platform) {
    return ssrContext.platform;
  }

  return platform();
}
