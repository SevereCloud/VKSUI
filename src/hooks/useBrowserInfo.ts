import { getContext } from 'svelte';
import { SSRContextKey, SSRContextInterface } from '../lib/ssr';
import { canUseDOM } from '../lib/dom';
import { BrowserInfo, computeBrowserInfo } from '../lib/browser';

export default function useBrowserInfo(): BrowserInfo {
  const ssrContext = getContext(SSRContextKey) as SSRContextInterface;

  let userAgent = canUseDOM && navigator.userAgent ? navigator.userAgent : '';
  if (ssrContext && ssrContext.platform) {
    userAgent = ssrContext.userAgent;
  }

  return computeBrowserInfo(userAgent);
}
