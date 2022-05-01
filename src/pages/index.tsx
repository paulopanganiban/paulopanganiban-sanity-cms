import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { About, Footer, Header, Navbar, Skills, Testimonial, Work } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Paulo Panganiban | Home</title>
        <meta name="description" content="Paulo Panganiban's Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="app">
        <Navbar/>
        <Header/>
        <About/>
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </main>
    </div>
  )
}

export default Home
