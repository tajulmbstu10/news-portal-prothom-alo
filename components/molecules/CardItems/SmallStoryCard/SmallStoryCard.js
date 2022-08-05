import smallStoryCardStyles from "./SmallStoryCard.module.scss"
import HeadLine from '../../../atoms/HeadLine'
import Image from 'next/image'
import Link from 'next/link'

const SmallStoryCard = ({href, newsItem, countNumber}) => {
  return (
    <Link href={href} passHref>
      <a className={smallStoryCardStyles.smallStoryCard}>
          <HeadLine className={smallStoryCardStyles.headline} newsTitle={newsItem.headline} countNumber={countNumber}/>
        <div className={smallStoryCardStyles.coverPhoto}>
            <Image
              layout='responsive'
              src={newsItem.thumb}
              alt="Cover picture of story"
              width="100%"
              height="100%"
            />
          </div>
      </a>
    </Link>

  )
}

export default SmallStoryCard;