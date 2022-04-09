import { useCallback, useState } from 'react';

const sizes = [16, 24, 32, 48, 64];

export function useFlagSize() {
  const [flagSizeIdx, setSizeIdx] = useState(4);

  const increase = useCallback(() => {
    setSizeIdx((prevSize) => Math.min(sizes.length - 1, prevSize + 1));
  }, []);

  const decrease = useCallback(() => {
    setSizeIdx((prevSize) => Math.max(0, prevSize - 1));
  }, []);

  return {
    flagSize: sizes[flagSizeIdx],
    increase,
    decrease,
  };
}
