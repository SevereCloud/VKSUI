import { OS, platform } from './platform';

export interface SSRContextInterface {
  platform: OS;
  userAgent?: string;
}

export const SSRContextKey = 'SSRContext';

export interface SSRBuildContextProps {
  userAgent?: string;
}

export const SSRBuildContext = (
  props: SSRBuildContextProps,
): SSRContextInterface => {
  const { userAgent } = props;

  const contextValue = {
    platform: platform(userAgent),
    userAgent,
  };

  return contextValue;
};
