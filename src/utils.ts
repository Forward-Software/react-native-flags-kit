import { useMemo } from 'react';
import type { ImageStyle, StyleProp } from 'react-native';

import * as flags from './flags';
import type { FlagSize, FlagType } from './types';

const supportedSizes = [16, 24, 32, 48, 64];

export const DEFAULT_FLAG_SIZE = supportedSizes[4];

export function findBestSize(targetSize: number): number {
  if (!targetSize) {
    // Return default size
    return DEFAULT_FLAG_SIZE;
  }

  if (targetSize <= supportedSizes[0]) {
    return supportedSizes[0];
  }

  if (targetSize >= supportedSizes[supportedSizes.length]) {
    return supportedSizes[supportedSizes.length];
  }

  let i = 0;
  let bestSize = DEFAULT_FLAG_SIZE;
  while (
    i < supportedSizes.length &&
    (supportedSizes[i] <= targetSize || supportedSizes[i + 1] >= targetSize)
  ) {
    bestSize =
      Math.abs(supportedSizes[i] - targetSize) < Math.abs(bestSize - targetSize)
        ? supportedSizes[i]
        : bestSize;
    i++;
  }

  return bestSize;
}

export function useFlagImage(code: string, type: FlagType, size: FlagSize) {
  return useMemo(() => {
    const flagSize = findBestSize(size);

    // @ts-ignore
    const flagsBucket = flags[type][`icons${flagSize}`];

    return {
      flag: flagsBucket[code] || flagsBucket.unknown,
      flagSize,
    };
  }, [code, size, type]);
}

export function useFlagStyle(flagSize: number): StyleProp<ImageStyle> {
  return useMemo(() => ({ width: flagSize, height: flagSize }), [flagSize]);
}
