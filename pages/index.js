import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello ! I'm Sabine.</p>
        <p>
          I am currently learning Next.js through their blog-like {' '}
          <a href="https://nextjs.org/learn">tutorial</a>.

        <p className="title">
            Go to <Link href="/posts/first-post"><a>posts</a></Link>
          </p>
        </p>
      </section>
    </Layout>
  )
}