import { useEffect, useRef, useState } from 'react';

import type { TimeoutId } from '@/types';

export function useDebouncedValue<V>(value: V, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<V>(value);
  const timeoutIdRef = useRef<TimeoutId>(null);

  useEffect(() => {
    timeoutIdRef.current = setTimeout(() => {
      timeoutIdRef.current = null;
      setDebouncedValue(value);
    }, delay);

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
    };
  }, [value, delay]);

  return debouncedValue;
}
