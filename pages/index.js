import Head from 'next/head'
import Person from './person'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Form</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Person />
    </div>
  )
}
