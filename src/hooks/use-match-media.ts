import { useState, useLayoutEffect } from 'react';

type IMediaQuery = string[];
type IMatchedMedia = boolean[];

export const useMatchMedia = (
  queries: IMediaQuery,
  defaultValues?: IMatchedMedia,
): IMatchedMedia => {
  const initialValues =
    defaultValues && defaultValues.length
      ? defaultValues
      : new Array(queries.length).fill(false);

  if (typeof window === 'undefined') return initialValues;

  const mediaQueryLists = queries.map((q) => window.matchMedia(q));
  const getValue = (): IMatchedMedia => {
    const matchedQueries = mediaQueryLists.map((mql) => mql.matches);

    return matchedQueries;
  };

  const [value, setValue] = useState(getValue);

  useLayoutEffect(() => {
    const handler = () => setValue(getValue);

    mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener('change', handler),
      );
  }, []);

  return value;
};
