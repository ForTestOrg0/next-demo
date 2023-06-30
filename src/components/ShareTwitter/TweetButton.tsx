import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { Link } from '@/ui'

interface Props extends BareProps {
  title: string
  url: string
  tags: string[]
}

export const TWITTER_INTENT_URL = 'https://twitter.com/intent/tweet'
const TWITTER_HANDLE = 'subscan_io'

// `t.co` shortens urls to a max of 23
// https://developer.twitter.com/en/docs/twitter-api/v1/developer-utilities/configuration/api-reference/get-help-configuration
const TWITTER_SHORT_URL_LENGTH = 23
const MAX_TWEET_LENGTH = 280

export const getTwitterHref = ({ url, title, tags }: Props) => {
  const shareUrl = new URL(TWITTER_INTENT_URL)
  const search = new URLSearchParams({
    url,
    text: `${title}`,
    hashtags: tags.join(','),
    via: TWITTER_HANDLE,
  }).toString()

  const urlLengthDiff = url.length - Math.min(url.length, TWITTER_SHORT_URL_LENGTH)

  if (search.length - Math.max(urlLengthDiff, 0) > MAX_TWEET_LENGTH) {
    throw new Error(`Sharing "${title}" results in a tweet that is too long`)
  }

  shareUrl.search = search

  return shareUrl.href
}

const Component: React.FC<Props> = ({ children, className, url, title, tags }) => {
  return (
    <Link external href={getTwitterHref({ url, title, tags })} className={className}>
      tweet
    </Link>
  )
}

export default Component
