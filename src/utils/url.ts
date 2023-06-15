/**
 * Converts an object to a URLSearchParams string.
 *
 * @param {Record<string, string> | null | undefined} params - The object to convert.
 * @return {string} The converted URLSearchParams string.
 */
export function objectToSearchParams(params: Record<string, string> | null | undefined): string {
  if (!params) return ''
  const searchParams = new URLSearchParams(params)
  return searchParams.toString()
}

/**
 * Returns the subdomain of a given hostname.
 *
 * @param {string} hostname - The hostname to extract the subdomain from.
 * @return {string} The subdomain of the hostname, or 'localhost' if the hostname is localhost, 127.0.0.1 or 0.0.0.0, or if the hostname doesn't have any subdomain.
 */
export function getSubdomain(hostname: string): string {
  if (!hostname) return ''

  if (hostname.indexOf('localhost') > -1 || hostname.indexOf('127.0.0.1') > -1 || hostname.indexOf('0.0.0.0') > -1) return 'localhost'

  const strs = hostname.split('.')
  if (strs.length === 1) return 'localhost'

  return strs[0]
}
