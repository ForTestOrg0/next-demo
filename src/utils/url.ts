import { RequestHeaders } from '@/types/page'
import { docCookies } from './cookies'
import { CURRENT_CHAIN_COOKIE_KEY } from '@/config/constants'

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
export function getSubdomainFromHeaders(headers: RequestHeaders, forceNetwork?: string): string {
  const hostname = headers.host || ''
  if (!hostname && !headers.cookie) return ''

  if (forceNetwork) return forceNetwork

  const chainOnCookies = docCookies.getItem(headers.cookie || '', CURRENT_CHAIN_COOKIE_KEY)
  const isTestWebsite =
    hostname.indexOf('pages.dev') > -1 ||
    hostname.indexOf('pages.dev') > -1 ||
    hostname.indexOf('localhost') > -1 ||
    hostname.indexOf('127.0.0.1') > -1 ||
    hostname.indexOf('0.0.0.0') > -1 ||
    hostname.indexOf('netlify.app') > -1 ||
    hostname.split('.').length === 1

  if (isTestWebsite && chainOnCookies) return chainOnCookies
  if (isTestWebsite) return 'localhost'

  return hostname
}
