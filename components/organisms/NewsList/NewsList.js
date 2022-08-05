import newsListStyles from "./NewsList.module.scss"
import NumberStoryCard from '../../molecules/CardItems/NumberStoryCard'
import data from '../../../database/data.json'
import Tabs from "./../../atoms/Tabs";
import Panel from "../../atoms/Panel";

const items = data

const NewsList = () => {
  return (
    <>
    <Tabs>
      <Panel title={items.latest.name}>
        {items.latest.items.sort((a, b) => parseFloat(a.sort) - parseFloat(b.sort)).map((newsItem, index) => (
          <>
            <NumberStoryCard href={'/newsdetails/mostread/'+ newsItem.id} newsItem={newsItem} index={index} key={index+1}/>
          </>
        ))}
      </Panel>
      <Panel title={items.mostread.name}>
        {items.mostread.items.sort((a, b) => parseFloat(a.sort) - parseFloat(b.sort)).map((newsItem, index) => (
          <>
            <NumberStoryCard href={'/newsdetails/mostread/'+ newsItem.id} newsItem={newsItem} index={index} key={index+1}/>
          </>
        ))}
      </Panel>
      <Panel title={items.discussed.name}>
        {items.discussed.items.sort((a, b) => parseFloat(a.sort) - parseFloat(b.sort)).map((newsItem, index) => (
          <>
            <NumberStoryCard href={'/newsdetails/mostread/'+ newsItem.id} newsItem={newsItem} index={index} key={index+1}/>
          </>
        ))}
      </Panel>
      
    </Tabs>
    </>
  )
}

export default NewsList
