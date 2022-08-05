import midiumStoryCardStyles from "./MidiumStoryCard.module.scss"
import HeadLine from '../../../atoms/HeadLine'
import Image from 'next/image'

const MidiumStoryCard = ({href, newsItem, countNumber}) => {
  return (
    <a className={midiumStoryCardStyles.midiumStoryCard} href={href}>
        <div className={midiumStoryCardStyles.coverPhoto}>
          <Image
            layout='responsive'
            src={newsItem.thumb}
            alt="Cover picture of story"
            width="100%"
            height="100%"
          />
        </div>
        <HeadLine newsTitle={newsItem.headline} countNumber={countNumber}/>
    </a>
  )
}

export default MidiumStoryCard;