import numberStoryCardStyles from "./NumberStoryCard.module.scss"
import HeadLine from '../../../atoms/HeadLine'
import {replaceNumbers} from '../../../../utils/englishToBanglaNumberConverter'
import Link from 'next/link'

const NumberStoryCard = ({...props}) => {
  return (
    <Link href={props.href} passHref>
      <a className={numberStoryCardStyles.numberStoryCard}>
            <h3 className={numberStoryCardStyles.title}>{replaceNumbers(props.index+1)}</h3>
            <HeadLine  className={numberStoryCardStyles.subTitle} newsTitle={props.newsItem.headline}/>
      </a>
    </Link>

  )
}

export default NumberStoryCard;