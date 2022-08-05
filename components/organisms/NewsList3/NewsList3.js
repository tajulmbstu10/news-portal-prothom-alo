import newsListStyles3 from "./NewsList3.module.scss"
import MidiumStoryCard from '../../molecules/CardItems/MidiumStoryCard'
// import HeadLine from '../../../atoms/HeadLine'
import data from '../../../database/data.json'

const items = data

const NewsList3 = () => {
  return (
    <>
    <div className={newsListStyles3.mediumStoryWrapper}>
    {items.selected.items.sort((a, b) => parseFloat(a.sort) - parseFloat(b.sort)).slice(1,3).map((newsItem, index) => (
        <MidiumStoryCard 
            key={index+1}
            href={'/newsdetails/selected/'+ newsItem.id}
            newsItem={newsItem}
            countNumber={index+2}
        />
      ))}
    </div>
      
    </>
  )
}

export default NewsList3
