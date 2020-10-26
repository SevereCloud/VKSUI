import { getContext } from 'svelte';
import { writable, Writable } from 'svelte/store';
import { SizeType, AdaptivityContextKey, AdaptivityContextInterface } from '../lib/adaptivity';

export default function useAdaptivity(): Writable<AdaptivityContextInterface> {
  const adaptivityContext = getContext(AdaptivityContextKey) as Writable<AdaptivityContextInterface>;

  return adaptivityContext || writable({
    sizeX: SizeType.COMPACT,
    sizeY: SizeType.REGULAR,
  });
}
