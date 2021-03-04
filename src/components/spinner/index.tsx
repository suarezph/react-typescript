import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './styles.module.css'

function FullPageSpinner() {
  return (
    <div className={styles.spinnerCircular}>
      <CircularProgress />
    </div>
  )
}

export default FullPageSpinner
