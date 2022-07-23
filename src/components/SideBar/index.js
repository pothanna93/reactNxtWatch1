import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {SideBarContainer, UnOrderLists, ListItem} from './styledComponents'

import './index.css'

const SideBar = () => (
  <SideBarContainer>
    <UnOrderLists>
      <Link to="/" className="link-element">
        <AiFillHome color="#ff0000" />
        <ListItem>Home</ListItem>
      </Link>
      <Link to="/trending" className="link-element">
        <HiFire color="#ff0000" />
        <ListItem>Trending</ListItem>
      </Link>
      <Link to="/gaming" className="link-element">
        <SiYoutubegaming color="#ff0000" />
        <ListItem>Gaming</ListItem>
      </Link>
      <Link to="/saved-videos" className="link-element">
        <BiListPlus color="#ff0000" />
        <ListItem>Saved Videos</ListItem>
      </Link>
    </UnOrderLists>
  </SideBarContainer>
)
export default SideBar
