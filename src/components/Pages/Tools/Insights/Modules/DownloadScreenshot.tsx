import React, { useCallback, useState } from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { Button, Text } from '@/ui'
import { getScreenshot } from '@/utils/api'
import { unwrap } from '@/utils/api'

interface Props extends BareProps {
  host: string
  url: string
  width: number
  height: number
  timeout: number
}

export const DownloadScreenshot: React.FC<Props> = ({ children, timeout, host, url, width, height, className }) => {
  const [screenshotURL, setScreenshotURL] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const generate = useCallback(() => {
    setIsLoading(true)
    async function action() {
      const data = await getScreenshot(host, {
        url,
        width,
        height,
        timeout,
      })
      const screenshot = unwrap(data)
      setIsLoading(false)
      setScreenshotURL(screenshot?.url || '')
    }
    action()
  }, [host, url, width, height, timeout])
  return (
    <div className={clsx('flex', className)}>
      <Button onClick={generate}>Generate</Button>
      <Text>{isLoading ? 'Generating...' : screenshotURL}</Text>
    </div>
  )
}
