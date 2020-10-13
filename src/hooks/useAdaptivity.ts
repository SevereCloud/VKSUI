import { getContext } from 'svelte';
import { SizeType, AdaptivityContextKey, AdaptivityContextInterface } from '../lib/adaptivity';

export default function useAdaptivity(): AdaptivityContextInterface {
  const adaptivityContext = getContext(AdaptivityContextKey) as AdaptivityContextInterface;

  return adaptivityContext || {
    sizeX: SizeType.COMPACT,
    sizeY: SizeType.REGULAR,
  };
}
