import { Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import React from 'react'
import { useRouter } from 'next/router'

type Props = {
  url: string
}
const GoBackButton = ({ url }: Props) => {
  const router = useRouter()

  const handleOnClick = (url: string) => {
    router.push(url)
  }

  return (
    <Button variant='contained' onClick={() => handleOnClick(url)} data-testid={'go-back-button'}>
      <ArrowBackIcon />
    </Button>
  )
}

export default GoBackButton
