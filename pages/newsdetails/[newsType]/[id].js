import Head from "next/head"
import data from '../../../database/data.json'
import newsDetailsStyles from '../../../styles/Newsdetails.module.scss'
import Image from 'next/image'

const NewsDetails = ({ filterData }) => {
  return (
    <>
      <Head>
        <title>প্রথম আলো | বাংলা নিউজ পেপার</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="author" content="Vinci Taylaran" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="frontend mentor, HTML, SASS, SCSS, TypeScript, NextJS, React.js, React"
        />
      </Head>
      <main>
        <div className='container'>
          <div className={newsDetailsStyles.newsDetailsContentWrapper}>
            <div>
              <h2 className={newsDetailsStyles.subHeadLine}>{filterData?.subheadline ? filterData.subheadline : ''}</h2>
            </div>
            <div>
              <h1 className={newsDetailsStyles.headLine}>{filterData?.headline ? filterData?.headline : ''}</h1>
            </div>
            <div className={newsDetailsStyles.coverPhoto}>
              {
                filterData['cover-photo'] ?
                  <Image
                    layout='responsive'
                    src={filterData['cover-photo']}
                    alt="Picture of the author"
                    width={100}
                    height={55}
                  />
                  : (filterData.hasOwnProperty('cover-photo') &&
                    <Image
                      layout='responsive'
                      src={filterData['thumb']}
                      alt="Picture of the author"
                      width={100}
                      height={55}
                    />
                  )
              }

            </div>

            <div className={newsDetailsStyles.descriptions} dangerouslySetInnerHTML={{ __html: filterData.descriptions }}></div>
          </div>
        </div>
      </main>
    </>

  )
}

export default NewsDetails

NewsDetails.getInitialProps = async ({ query }) => {
  const { id } = query
  const { newsType } = query
  const items = data
  const selectedCatagory = items[newsType]
  const filterData = selectedCatagory.items.find(news => Number(news.id) === Number(id))
  // console.log(filterData)
  return { filterData }
}