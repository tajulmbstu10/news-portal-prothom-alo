import { useState } from "react";
import tabStyles from "./Tabs.module.scss"

function Tabs (props) {
  const [selected, setSelected] = useState(0)

  const handleChange = (index) => {
    setSelected(index)
  }
  return (
    <div className={tabStyles.tab}>
      <ul className={tabStyles.ulList}>
        {props.children.map((elem, index) => {
          let style = index === selected ? "selected" : "";
          return (
            <li
              key={index+1}
              className={style}
              onClick={() => handleChange(index)}
            >
              <h3 className={tabStyles.tabName}>{elem.props.title}</h3>
            </li>
          );
        })}
      </ul>
      <div className="tab">{props.children[selected]}</div>
    </div>
  );
}

export default Tabs;
