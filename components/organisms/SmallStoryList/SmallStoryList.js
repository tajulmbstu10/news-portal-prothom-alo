import smallStoryListStyles from "./SmallStoryList.module.scss"
import SmallStoryCard from '../../molecules/CardItems/SmallStoryCard'
import data from '../../../database/data.json'

const items = data

const SmallStoryList = () => {
  return (
    <>
      {items.selected.items.sort((a, b) => parseFloat(a.sort) - parseFloat(b.sort)).slice(3).map((newsItem, index) => (
        <div className={smallStoryListStyles.smallStoryWrapper} key={index+1}>
          <SmallStoryCard href={'/newsdetails/selected/'+ newsItem.id} newsItem={newsItem} index={index} countNumber={index+4}/>
        </div>
      ))}
    </>
  )
}

export default SmallStoryList
