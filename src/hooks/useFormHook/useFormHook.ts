import { useIsToastOpenContextUpdater } from '@/src/contexts/IsToastOpenContext/IsToastOpenContextProvider'
import { useToastContextUpdater } from '@/src/contexts/ToastContext/ToastContextProvider'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

type UseFormHook = {
  onSucceeded: (url: string) => void
  onFailed: () => void
}
export const useFormHook = (): UseFormHook => {
  const setIsToastOpen = useIsToastOpenContextUpdater()
  const setToast = useToastContextUpdater()
  const router = useRouter()

  const onSucceeded = useCallback(
    (url: string) => {
      setToast('success')
      setIsToastOpen(true)
      router.push(url)
    },
    [setIsToastOpen, setToast, router],
  )

  const onFailed = useCallback(() => {
    setToast('error')
    setIsToastOpen(true)
  }, [setIsToastOpen, setToast])

  return {
    onSucceeded,
    onFailed,
  }
}
