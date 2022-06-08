import { useCallback, useState } from 'react'
import {
  OnSearchMountainList,
  OnSubmitProps,
} from '@/src/components/mountain/mountain-list-form/MountainListForm'

type UseListMountainsHookReturnValues = {
  shouldSearch: () => boolean
  keyword: string
  onSearch: OnSearchMountainList
  onSearched: () => void
  changed: boolean
}
type UseListMountainsHookProps = {
  called: boolean
  loading: boolean
}
export const useListMountainsHook = ({
  called,
  loading,
}: UseListMountainsHookProps): UseListMountainsHookReturnValues => {
  const [keyword, setKeyword] = useState<string>('')
  const [changed, setChanged] = useState<boolean>(false)

  const onSearch = useCallback(
    (values: OnSubmitProps) => {
      setKeyword(values.keyword)
      setChanged(true)
    },
    [setKeyword, setChanged],
  )
  const onSearched = useCallback(() => {
    setChanged(false)
  }, [])

  const shouldSearch = useCallback(() => called && !loading && changed, [called, loading, changed])
  return { shouldSearch, keyword, onSearch, onSearched, changed }
}
