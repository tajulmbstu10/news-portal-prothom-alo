import Image from 'next/image'
import logoStyles from "./Logo.module.scss"

const Logo = () => {
  return (
    <div className={logoStyles.navLogo}>
      <Image
        layout='responsive'
        src={'https://assets.prothomalo.com/prothomalo/assets/palo-bangla-bb996cdb70d2e0ccec8c.svg'}
        alt="প্রথম আলো"
        width={237}
        height={27}
      />
    </div>
  )
}

export default Logo
