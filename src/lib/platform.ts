import { canUseDOM } from './dom';

export enum OS {
  ANDROID = 'android',
  IOS = 'ios',
  VKCOM = 'vkcom'
}

export const ANDROID: OS = OS.ANDROID;
export const IOS: OS = OS.IOS;
export const VKCOM: OS = OS.VKCOM;

export function platform(useragent?: string): OS {
  const ua = useragent || (canUseDOM && navigator.userAgent) || '';

  return /iphone|ipad|ipod/i.test(ua) ? IOS : ANDROID;
}
