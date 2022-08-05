import newsListStyles from "./NewsList.module.scss"
import NumberStoryCard from '../../molecules/CardItems/NumberStoryCard'
import data from '../../../database/data.json'
import Tabs from "../../molecules/Tabs";
import Panel from "../../atoms/Panel";

const items = data

const NewsList = () => {
  return (
    <>
    <Tabs>
      <Panel title={items.latest.name}>
        {items.latest.items.sort((a, b) => parseFloat(a.sort) - parseFloat(b.sort)).map((newsItem, index) => (
          <div key={index+1}>
            <NumberStoryCard href={'/newsdetails/latest/'+ newsItem.id} newsItem={newsItem} index={index}/>
          </div>
        ))}
      </Panel>
      <Panel title={items.mostread.name}>
        {items.mostread.items.sort((a, b) => parseFloat(a.sort) - parseFloat(b.sort)).map((newsItem, index) => (
          <div key={index+1}>
            <NumberStoryCard href={'/newsdetails/mostread/'+ newsItem.id} newsItem={newsItem} index={index}/>
          </div>
        ))}
      </Panel>
      <Panel title={items.discussed.name}>
        {items.discussed.items.sort((a, b) => parseFloat(a.sort) - parseFloat(b.sort)).map((newsItem, index) => (
          <div key={index+1}>
            <NumberStoryCard href={'/newsdetails/discussed/'+ newsItem.id} newsItem={newsItem} index={index} key={index+1}/>
          </div>
        ))}
      </Panel>
      
    </Tabs>
    </>
  )
}

export default NewsList
