import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import Image, { ImageLoaderProps, ImageProps } from 'next/image'

interface Props extends BareProps, ImageProps {}

const normalizeSrc = (src: string) => {
  return src.startsWith('/') ? src.slice(1) : src
}

const cloudflareLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const params = [`width=${width}`]
  if (quality) {
    params.push(`quality=${quality}`)
  }
  const paramsString = params.join(',')
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`
}

const Component: React.FC<Props> = ({ children, className, ...props }) => {
  return <Image className={clsx('flex', className)} loader={cloudflareLoader} {...props} />
}

export default Component
