type ParamsObject = {
  [K: string]: string | number | (string | number)[];
};

export function createURLSearchParams(params: ParamsObject): URLSearchParams {
  const searchParams = new URLSearchParams();

  for (const [param, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      searchParams.append(param, value.join(','));
    } else {
      searchParams.append(param, String(value));
    }
  }

  return searchParams;
}
