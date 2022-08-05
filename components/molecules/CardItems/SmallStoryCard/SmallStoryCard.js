import smallStoryCardStyles from "./SmallStoryCard.module.scss"
import HeadLine from '../../../atoms/HeadLine'
const SmallStoryCard = ({href, newsItem, countNumber}) => {
  return (
    <a className={smallStoryCardStyles.smallStoryCard} href={href}>
        <HeadLine className={smallStoryCardStyles.headline} newsTitle={newsItem.headline} countNumber={countNumber}/>
        <img
            src={newsItem.thumb}
            type="image/webp"
            alt="Cover picture of story"
            width={'100%'}
            height={'100%'}
        />
    </a>
  )
}

export default SmallStoryCard;