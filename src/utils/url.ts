export function objectToSearchParams(
  paramsObj: Record<string, string> | undefined | null
) {
  if (!paramsObj) {
    return "";
  }
  const searchParams = new URLSearchParams(paramsObj);
  return searchParams.toString();
}

export function getSubdomain(hostname: string): string {
  if (!hostname) return "";

  if(hostname.indexOf('localhost') > -1 || hostname.indexOf('127.0.0.1') > -1 || hostname.indexOf('0.0.0.0') > -1) return 'localhost';

  const strs = hostname.split(".");
  if (strs.length === 1) return "localhost";

  return strs[0];
}
