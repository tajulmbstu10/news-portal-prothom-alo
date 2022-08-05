import hamburgerMenuStyles from "./HamburgerMenu.module.scss"
import Link from "next/link"

const HamburgerMenu = ({ isClosed, onLink, navItems }) => {
  return (
    <div
      onClick={onLink}
      className={`${hamburgerMenuStyles.menu} ${
        isClosed && hamburgerMenuStyles.menu__hidden
      }`}
    >
      <div>
        <ul>
        {navItems.map((item,index)=>
          <li onClick={onLink} key={index+1}>
            <Link href={item.link}>{item.navHeadLine}</Link>
          </li>
        )
      }
          {/* <li onClick={onLink}>
            <Link href="/">Home</Link>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default HamburgerMenu
