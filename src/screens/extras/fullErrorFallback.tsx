import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

const FullErrorFallback: React.FC = ({ error }: any): JSX.Element => {
  return (
    <div>
      <p>Uh oh... There&apos;s a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default FullErrorFallback
