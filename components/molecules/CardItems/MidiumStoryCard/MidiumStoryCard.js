import midiumStoryCardStyles from "./MidiumStoryCard.module.scss"
import HeadLine from '../../../atoms/HeadLine'
const MidiumStoryCard = ({href, newsItem, countNumber}) => {
  return (
    <a className={midiumStoryCardStyles.midiumStoryCard} href={href}>
        <img
            src={newsItem.thumb}
            type="image/webp"
            alt="Cover picture of story"
            width={'100%'}
            height={'100%'}
            // className={midiumStoryCardStyles.coverPhoto}
        />
        <HeadLine newsTitle={newsItem.headline} countNumber={countNumber}/>
    </a>
  )
}

export default MidiumStoryCard;