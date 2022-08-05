import numberStoryCardStyles from "./NumberStoryCard.module.scss"
import HeadLine from '../../../atoms/HeadLine'
import {replaceNumbers} from '../../../../utils/englishToBanglaNumberConverter'
const NumberStoryCard = ({...props}) => {
  return (
    <a className={numberStoryCardStyles.numberStoryCard} href={props.href} key={props.newsItem.id}>
          <h3 className={numberStoryCardStyles.title}>{replaceNumbers(props.index+1)}</h3>
          <HeadLine  className={numberStoryCardStyles.subTitle} newsTitle={props.newsItem.headline}/>
    </a>
  )
}

export default NumberStoryCard;