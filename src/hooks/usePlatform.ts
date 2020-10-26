import { getContext } from 'svelte';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { Platform, platform } from '../lib/platform';
import { ContextKey } from '../lib/config';

export default function usePlatform(): Writable<Platform> {
  const wPlatform = getContext(ContextKey.platform) as Writable<Platform>

  return wPlatform || writable(platform());
}
