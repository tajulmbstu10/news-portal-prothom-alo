import newsListStyles2 from "./NewsList2.module.scss"
import HeadLine from '../../atoms/HeadLine'
import data from '../../../database/data.json'

const items = data

const NewsList2 = () => {
  return (
    <>
      {items.selected.items.sort((a, b) => parseFloat(a.sort) - parseFloat(b.sort)).slice(1,2).map((newsItem, index) => (
        <div className={newsListStyles2.bigStoryCards} key={index+1}>
          <a href={'/newsdetails/selected/'+ newsItem.id}>
            <img src={newsItem.thumb} type="image/webp" max-width="580px" max-height="240px" width="100%" height="100%" className="qt-image image gm-added gm-loaded gm-observing gm-observing-cb" alt="আকাশের তারা সাধারণ ক্যামেরায় তোলা ছবিতে দেখা যায় না কেন?" loading="lazy" />
            <div className={newsListStyles2.storyData}>
              <div className={newsListStyles2.headlineTitle}>
                <HeadLine newsTitle={newsItem.headline} countNumber={index+1}/>
              </div>
            </div>
            </a>
        </div> 
      ))}
    </>
  )
}

export default NewsList2
