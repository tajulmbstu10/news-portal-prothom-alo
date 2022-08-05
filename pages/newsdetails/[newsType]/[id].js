import data from '../../../database/data.json'
import newsDetailsStyles from '../../../styles/Newsdetails.module.scss'

const NewsDetails = ({ filterData }) => {
  return (
    <div className='container'>
      <div className={newsDetailsStyles.newsDetailsContentWrapper}>
        <div>
          <h2 className={newsDetailsStyles.subHeadLine}>{filterData?.subheadline ? filterData.subheadline : ''}</h2>
        </div>
        <div>
          <h1 className={newsDetailsStyles.headLine}>{filterData?.headline ? filterData?.headline : ''}</h1>
        </div>
        <div>
        <img
            src={filterData['cover-photo'] ? filterData['cover-photo'] : filterData['thumb']}
            type="image/webp"
            alt="Cover picture of story"
            width={'100%'}
            height={'100%'}
            className={newsDetailsStyles.coverPhoto}
          />
        </div>
        
        <div className={newsDetailsStyles.descriptions} dangerouslySetInnerHTML={{ __html: filterData.descriptions }}></div>
      </div>
    </div>
  )
}

export default NewsDetails

NewsDetails.getInitialProps = async ({ query }) => {
  const { id } = query
  const { newsType } = query
  const items = data
  const selectedCatagory = items[newsType]
  const filterData = selectedCatagory.items.find(news => Number(news.id) === Number(id))
  return { filterData }
}