import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import HeroContent from '../components/HeroContent/HeroContent'
import Content from '../components/Content/Content'
import Catalog from '../components/Category/Category'


export default function Home() {
  return (
    <>
      <Head>
        <title>Adit Hernowo</title>
        <meta name="description" content="Website Adit Hernowo" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>

      <div className='hero-image'>
        <Navbar />
        <HeroContent />
      </div>
      <Content />
      <Catalog />

      <hr className="mt-5" />
      <footer className="text-center">
        <div className="text-center p-3" style={{ color: "grey" }}>
          Copyright © 2020 Adit Hernowo
        </div>
      </footer>
    </>
  )
}
