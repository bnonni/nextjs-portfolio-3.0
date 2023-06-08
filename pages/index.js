import Head from 'next/head'
import { Sidebar, Introduction, About, Portfolio, Timeline } from "../components"
import { data } from '../data/data'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bryan W. Nonni | Software Engineer | Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div style={{ padding: 0 }} id="colorlib-main">
            <Introduction />
            <About />
            <Portfolio data={data.Projects} />
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  )
}
