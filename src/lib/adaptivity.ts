export const AdaptivityContextKey = 'AdaptivityContext';

export enum SizeType {
  COMPACT = 'compact',
  REGULAR = 'regular',
}

export enum ViewWidth {
  SMALL_MOBILE = 1,
  MOBILE,
  SMALL_TABLET,
  TABLET,
  DESKTOP,
}

export const DESKTOP_SIZE = 1280;
export const TABLET_SIZE = 1024;
export const SMALL_TABLET_SIZE = 768;
export const MOBILE_SIZE = 320;

export interface AdaptivityContextInterface {
  sizeX?: SizeType;
  sizeY?: SizeType;
  viewWidth?: ViewWidth;
}

export const calculateAdaptivity = (
  windowWidth: number,
  props: AdaptivityContextInterface,
) => {
  let viewWidth = ViewWidth.SMALL_MOBILE;
  let sizeY = SizeType.REGULAR;
  let sizeX = SizeType.REGULAR;

  if (windowWidth >= DESKTOP_SIZE) {
    viewWidth = ViewWidth.DESKTOP;
  } else if (windowWidth >= TABLET_SIZE) {
    viewWidth = ViewWidth.TABLET;
  } else if (windowWidth >= SMALL_TABLET_SIZE) {
    viewWidth = ViewWidth.SMALL_TABLET;
  } else if (windowWidth >= MOBILE_SIZE) {
    viewWidth = ViewWidth.MOBILE;
    sizeX = SizeType.COMPACT;
  } else {
    viewWidth = ViewWidth.SMALL_MOBILE;
    sizeX = SizeType.COMPACT;
    sizeY = SizeType.COMPACT;
  }

  props.viewWidth && (viewWidth = props.viewWidth);
  props.sizeX && (sizeX = props.sizeX);
  props.sizeY && (sizeY = props.sizeY);

  return { viewWidth, sizeX, sizeY };
}