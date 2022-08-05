import newsListStyles2 from "./NewsList2.module.scss"
import HeadLine from '../../atoms/HeadLine'
import data from '../../../database/data.json'
import Image from 'next/image'
import Link from 'next/link'

const items = data

const NewsList2 = () => {
  return (
    <>
      {items.selected.items.sort((a, b) => parseFloat(a.sort) - parseFloat(b.sort)).slice(1, 2).map((newsItem, index) => (
        <div className={newsListStyles2.bigStoryCards} key={index + 1}>
          <Link href={'/newsdetails/selected/' + newsItem.id} passHref>
            <a className={newsListStyles2.bigStoryCard}>
              <div className={newsListStyles2.coverPhoto}>
                <Image
                  layout='responsive'
                  src={newsItem.thumb}
                  alt="Cover picture of story"
                  width="100%"
                  height="58%"
                />
              </div>
              <div className={newsListStyles2.storyData}>
                <div className={newsListStyles2.headlineTitle}>
                  <HeadLine newsTitle={newsItem.headline} countNumber={index + 1} />
                </div>
              </div>
            </a>
          </Link>

        </div>
      ))}
    </>
  )
}

export default NewsList2
