import Head from "next/head"
import indexStyles from "../styles/Home.module.scss"
// import NewsList from "../components/organisms/NewsList"
// import NewsList2 from "../components/organisms/NewsList2"
// import NewsList3 from "../components/organisms/NewsList3"
// import SmallStoryList from "../components/organisms/SmallStoryList"
import data from '../database/data.json'

const items = data

export default function Home() {
  return (
    <div id={indexStyles.home}>
      <Head>
        <title>প্রথম আলো | বাংলা নিউজ পেপার</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Vinci Taylaran" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="frontend mentor, HTML, SASS, SCSS, TypeScript, NextJS, React.js, React"
        />
      </Head>
      <main>
        
      </main>

    </div>
  )
}
