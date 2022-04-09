import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

import type { FlagSize, FlagType } from './types';
import { DEFAULT_FLAG_SIZE, findBestSize, useFlagImage, useFlagStyle } from './utils';

export interface FlagProps {
  code: string;

  size?: FlagSize;

  type?: FlagType;

  style?: StyleProp<ImageStyle>;
}

const Flag: React.FC<FlagProps> = ({
  code,
  size = DEFAULT_FLAG_SIZE,
  style,
  type = 'shiny',
}) => {
  const { flag, flagSize } = useFlagImage(code, type, size);
  const flagStyle = useFlagStyle(flagSize);

  return <Image source={flag} style={[flagStyle, style]} />;
};

export { Flag, findBestSize, FlagSize, FlagType };
