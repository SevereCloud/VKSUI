import { getContext } from 'svelte';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { OS, platform } from '../lib/platform';
import { ContextKey } from '../lib/config';

export default function usePlatform(): Writable<OS> {
  const wPlatform = getContext(ContextKey.platform) as Writable<OS>

  return wPlatform || writable(platform());
}
