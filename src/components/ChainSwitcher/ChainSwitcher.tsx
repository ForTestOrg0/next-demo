import React, { useCallback } from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogHeading, DialogTrigger } from '@/ui'
import { CHAINS } from '@/config/chains'
import { docCookies } from '@/utils/cookies'
import { CURRENT_CHAIN_COOKIE_KEY } from '@/config/constants'
import { useRouter } from 'next/router'

interface Props extends BareProps {
  key?: string
}

const Component: React.FC<Props> = ({ children, className }) => {
  const router = useRouter()

  // const [open, setOpen] = useState(false)
  const setChain = useCallback((chainId: string) => {
    docCookies.setItem(CURRENT_CHAIN_COOKIE_KEY, chainId)
  }, [])

  return (
    <Dialog>
      <DialogTrigger>switch chain</DialogTrigger>
      <DialogContent className={clsx('bg-sub-white', className)}>
        <DialogHeading>--- switch chain ---</DialogHeading>
        <DialogDescription>
          <div className="space-x-2 space-y-2">
            {CHAINS.map((chain) => {
              return (
                <Button
                  onClick={() => {
                    setChain(chain.id)
                    router.reload()
                  }}
                  key={chain.id}>
                  {chain.name}
                </Button>
              )
            })}
          </div>
        </DialogDescription>
        <DialogClose>Close</DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export default Component
