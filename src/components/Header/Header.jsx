import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/header.css'
function Header() {
  return (
    < >
      <div className='wrapper'>
        <div className='header'>
          <img className='logotime' src="https://s3-alpha-sig.figma.com/img/a39f/6bba/f6b79908f8a5a3f62135201c818f84b0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l9TEtGmhlflo11ep2NtUEVn66mOBrOYIPLb~koU5RtV1mXNVnvh7aEhHTw-iPVVwGjzU-PSOtPjZYroJoudbGBf5SCXPQ6TvNQlsHt-BSZue-e6CgZMNSzJRsTdBn~NATzTVw-2A~Kwk4VPjlfcWOsPoQcaJOVtIbWxGf03Qmr4a9aQjJGBSh2C-f20XnYxCpHeych7Es4FRmn~PstBPcYdN~85PKPMIZ80WaRVnQH5o2RQwleEwBG5JHUorKEFIAm3puFXybaSOGypkMT8neUYKAVkL4JaPBjJoI3hasxhHyO1cUhTCS7J4mkNAYI2jZ7NUhvOUy9iupfVlH6pMdg__" alt="" />
          <div className='headertitle'><Link to='home'><p>Home</p></Link>
            <p>AbouT us</p>
            <Link to="servises"><p>Services</p></Link>
            <p>Invest in cyprus</p>
            <p>migration</p>
            <p>Contuct us</p></div>
          <button className='headerbtn'>Get in touch</button>
        </div>
      </div>
    </>
  )
}

export default Header
