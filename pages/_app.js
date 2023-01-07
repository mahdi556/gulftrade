import Layout from '../components/Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap.bundle.js')
  },[]);
  return (<><Layout><Component {...pageProps} /></Layout></>)

}
