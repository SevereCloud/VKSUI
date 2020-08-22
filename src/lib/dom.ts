import type { AnyFunction } from '../types';

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
