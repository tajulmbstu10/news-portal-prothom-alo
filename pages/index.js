import Head from "next/head"
import indexStyles from "../styles/Home.module.scss"
import NewsList from "../components/organisms/NewsList"
import NewsList2 from "../components/organisms/NewsList2"
import NewsList3 from "../components/organisms/NewsList3"
import SmallStoryList from "../components/organisms/SmallStoryList"
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
        <section className={indexStyles.fourCollection12Stories}>
          <div className={indexStyles.container}>
            <div><NewsList /></div>
            <div>
              <h4 className={indexStyles.newsName}>{items.selected.name}</h4>
              <div className={indexStyles.middle}>
                <div>
                  <NewsList2 />
                  <NewsList3 />
                </div>
                <div className={indexStyles.shortStoryColWrapper}>
                <div className={indexStyles.adSlot300x250}>AD-300x250</div>
                <SmallStoryList />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={indexStyles.adSlotFullWidthx300}>AD-100%x250</section>
      </main>

    </div>
  )
}
