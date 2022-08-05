import midiumStoryCardStyles from "./MidiumStoryCard.module.scss"
import HeadLine from '../../../atoms/HeadLine'
import Image from 'next/image'
import Link from 'next/link'

const MidiumStoryCard = ({href, newsItem, countNumber}) => {
  return (
     <Link href={href} passHref>
      <a className={midiumStoryCardStyles.midiumStoryCard}>
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
    </Link>
  )
}

export default MidiumStoryCard;