import Layout from '../components/Layout'
import { Dataget } from '../context/DataContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Dataget><Layout><Component {...pageProps} /></Layout></Dataget>
}

export default MyApp
