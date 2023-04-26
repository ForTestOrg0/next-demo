export function objectToSearchParams(paramsObj: Record<string, string> | undefined | null) {
  if(!paramsObj) {
    return ''
  }
  const searchParams = new URLSearchParams(paramsObj);
  return searchParams.toString();
}