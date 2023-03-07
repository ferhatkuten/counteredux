import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { wrapper } from '@/store/store'

export default function App({ Component, ...rest }) {
  const {store, props} = wrapper.useWrappedStore(rest)
  const {pageProps} = props
  return (
    <Provider store = {store}>
      <Component{...pageProps} />
    </Provider>
  )
}
