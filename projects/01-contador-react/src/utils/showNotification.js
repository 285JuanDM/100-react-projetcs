import { enqueueSnackbar } from 'notistack'

export function showNotification ({ message }) {
  enqueueSnackbar(
    message,
    {
      variant: 'info',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      }
    }
  )
}
