import { useState } from 'react'
import { OnSearchMountainList } from '@/src/components/mountain/mountain-list-form/MountainListForm'

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

  const onSearch: OnSearchMountainList = (values) => {
    setKeyword(values.keyword)
    setChanged(true)
  }

  const onSearched = () => setChanged(false)

  const shouldSearch = () => called && !loading && changed
  return { shouldSearch, keyword, onSearch, onSearched, changed }
}
