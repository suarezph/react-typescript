import React from 'react'
import CssBaseLine from '@material-ui/core/CssBaseline'
import FullPageSpinner from '../components/spinner'

const Private = React.lazy(
  () => import(/* webpackPrefetch: true */ './private'),
)

const Public = React.lazy(() => import('./public'))

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      <CssBaseLine />
      <Public />
    </React.Suspense>
  )
}

export default App
