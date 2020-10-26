import { getContext } from 'svelte';
import type { Writable } from 'svelte/store';
import type { AnyFunction } from '../types';
import { ContextKey } from './config';

export const canUseDOM: boolean = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const canUseEventListeners: boolean =
  canUseDOM && !!window.addEventListener;

export function onDOMLoaded(callback: AnyFunction) {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      callback();
    });
  }
}
