import { useState } from "react"
import navStyles from "./Nav.module.scss"
import Logo from "../../atoms/Logo"
import Image from "next/image"
import Link from "next/link"
import HamburgerMenu from "../../molecules/Hamburger"

const navItems = [
	{
	  navHeadLine: 'সর্বশেষ',
	  link:'/'
	},
	{
	  navHeadLine: 'বিশেষ সংবাদ',
	  link:'/'
	},
	{
	  navHeadLine: 'রাজনীতি',
	  link:'/'
	},
	{
	  navHeadLine: 'করোনাভাইরাস',
	  link:'/'
	},
	{
	  navHeadLine: 'বাংলাদেশ',
	  link:'/'
	},
  ]


export const Links = ({ style, hideAtMobile = false }) => {
  const mobileBreakpoint = "480px"
  return (
    <div className={navStyles.links} style={{ ...style }}>
      {navItems.map((item,index)=>
          <Link href={item.link} key={index+1}>
            <a>{item.navHeadLine}</a>
          </Link>
        )
      }
      {/* <Link href="/">
        <a>সর্বশেষ</a>
      </Link> */}
      <style jsx>{`
        @media (max-width: ${mobileBreakpoint}) {
          display: ${hideAtMobile && "none"};
        }
      `}</style>
    </div>
  )
}

const Nav = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState({
    isClosed: true,
    path: "/assets/shared/mobile/icon-hamburger.svg",
  })

  const onHamburgerMenu = () => {
    if (hamburgerMenu.isClosed) {
      setHamburgerMenu({
        isClosed: false,
        path: "/assets/shared/mobile/icon-close.svg",
      })
    } else {
      setHamburgerMenu({
        isClosed: true,
        path: "/assets/shared/mobile/icon-hamburger.svg",
      })
    }
  }

  // In order for the Image component to function properly, the assets must be in the public directory.
  // The file path for an Image component must be relative to the public directory. Check NextJS docs.
  return (
    <>
    <div className={navStyles.logoHam}>
      <div className={navStyles.hamburgerIcon}>
          <Image
            onClick={onHamburgerMenu}
            src={hamburgerMenu.path}
            alt="Close hamburger menu"
            width="16"
            height="15"
          />
        </div>
        <div className={navStyles.logo}>
          <Logo />
        </div>
      </div>
      <nav className={navStyles.nav}>
        <Links
          style={{ gap: "10px", gridAutoFlow: "column" }}
          hideAtMobile={true}
        />
      </nav>
      <HamburgerMenu
        isClosed={hamburgerMenu.isClosed}
        onLink={onHamburgerMenu}
        navItems = {navItems}
      />
    </>
  )
}

export default Nav
