import { useRouter } from 'next/router'

const rootUrl = 'https://develop.subscan-ui-next-bbg.pages.dev'

export const useShareUrl = () => {
  const { asPath } = useRouter()

  return `${rootUrl}${asPath.replace(/\?.+/, '')}`
}
