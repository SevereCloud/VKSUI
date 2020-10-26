import { canUseDOM } from './dom';

export enum Platform {
  ANDROID = 'android',
  IOS = 'ios',
  VKCOM = 'vkcom'
}

export const ANDROID: Platform = Platform.ANDROID;
export const IOS: Platform = Platform.IOS;
export const VKCOM: Platform = Platform.VKCOM;

export function platform(useragent?: string): Platform {
  const ua = useragent || (canUseDOM && navigator.userAgent) || '';

  return /iphone|ipad|ipod/i.test(ua) ? IOS : ANDROID;
}
