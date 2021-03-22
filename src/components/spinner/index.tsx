import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './styles.module.css'

const FullPageSpinner: React.FC = (): JSX.Element => {
  return (
    <div className={styles.spinnerCircular}>
      <CircularProgress />
    </div>
  )
}

export default FullPageSpinner
