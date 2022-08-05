import headLineStyles from "./HeadLine.module.scss"
import {replaceNumbers} from '../../../utils/englishToBanglaNumberConverter'

const HeadLine = ({newsTitle, countNumber}) => {
  return (
    <h3 className={headLineStyles.headlineTitle}>
        {
            newsTitle?.split('/').length > 1 ? 
            (<span className={headLineStyles.tilteNoLinkParent}>{countNumber && replaceNumbers(Number(countNumber))}<span className={headLineStyles.subTitle}>{newsTitle?.split('/')[0]}</span>{newsTitle?.split('/')[1]}</span> )
            :
            (<span className={headLineStyles.tilteNoLinkParent}>{countNumber && replaceNumbers(Number(countNumber))}{newsTitle}</span>)
        }
    </h3>
  )
}

export default HeadLine;