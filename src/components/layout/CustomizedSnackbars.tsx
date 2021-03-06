import * as React from 'react'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import {
  useIsToastOpenContextUpdater,
  useIsToastOpenContextState,
} from '@/src/contexts/IsToastOpenContext/IsToastOpenContextProvider'
import { useToastContextState } from '@/src/contexts/ToastContext/ToastContextProvider'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export default function CustomizedSnackbars() {
  const toast = useToastContextState()
  const isToastOpen = useIsToastOpenContextState()
  const setIsToastOpen = useIsToastOpenContextUpdater()

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setIsToastOpen(false)
  }

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={isToastOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={toast} sx={{ width: '100%' }}>
          {toast === 'success' && 'success'}
          {toast === 'error' && 'failed'}
          {toast === 'warning' && 'warning'}
          {toast === 'info' && 'info'}
        </Alert>
      </Snackbar>
    </Stack>
  )
}
