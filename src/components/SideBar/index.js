import {Component} from 'react'

import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
import {
  SideBarContainer,
  UnOrderLists,
  ListItem,
  ContactPageContainer,
  ContactPageHeading,
  IconsItemsContainer,
  ImageLogo,
  ContactPageDescription,
  NavLink,
  ItemText,
} from './styledComponents'

import './index.css'

class SideBar extends Component {
  renderContactPage = () => (
    <ThemeContext.Consumer>
      {value => {
        const {activeTabItem, activeTab, isDarkTheme} = value
        const onClickHomeTabItem = () => {
          activeTabItem('HOME')
        }
        const onClickTrendingTabItem = () => {
          activeTabItem('TRENDING')
        }

        const onClickGamingTabItem = () => {
          activeTabItem('GAMING')
        }

        const onClickSavedVideosTabItem = () => {
          activeTabItem('SAVED VIDEOS')
        }

        const bgColor = isDarkTheme ? '#ffffff' : '#000000'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <SideBarContainer sideBarBg={isDarkTheme}>
            <UnOrderLists>
              <ListItem
                isActive={activeTab === 'HOME' ? '#f1f5f9' : 'transparent'}
                isActiveColor={bgColor}
                onClick={onClickHomeTabItem}
              >
                <NavLink
                  to="/"
                  color={activeTab === 'HOME' ? '#ff0000' : {bgColor}}
                >
                  <AiFillHome />
                  <ItemText
                    color={activeTab === 'HOME' ? '#ff0000' : {textColor}}
                  >
                    Home
                  </ItemText>
                </NavLink>
              </ListItem>
              <ListItem
                isActive={activeTab === 'TRENDING' ? '#f1f5f9' : 'transparent'}
                isActiveColor={bgColor}
                onClick={onClickTrendingTabItem}
              >
                <NavLink
                  to="/trending"
                  color={activeTab === 'TRENDING' ? '#ff0000' : {textColor}}
                >
                  <HiFire />
                  <ItemText
                    color={activeTab === 'TRENDING' ? '#ff0000' : {bgColor}}
                  >
                    Trending
                  </ItemText>
                </NavLink>
              </ListItem>
              <ListItem
                isActive={activeTab === 'GAMING' ? '#f1f5f9' : 'transparent'}
                onClick={onClickGamingTabItem}
              >
                <NavLink
                  to="/gaming"
                  color={activeTab === 'GAMING' ? '#ff0000' : {textColor}}
                >
                  <SiYoutubegaming />
                  <ItemText
                    color={activeTab === 'GAMING' ? '#ff0000' : {bgColor}}
                  >
                    Gaming
                  </ItemText>
                </NavLink>
              </ListItem>
              <ListItem
                isActive={
                  activeTab === 'SAVED VIDEOS' ? '#f1f5f9' : 'transparent'
                }
                onClick={onClickSavedVideosTabItem}
              >
                <NavLink
                  to="/saved-videos"
                  color={activeTab === 'SAVED VIDEOS' ? '#ff0000' : {textColor}}
                >
                  <BiListPlus />
                  <ItemText
                    color={activeTab === 'SAVED VIDEOS' ? '#ff0000' : {bgColor}}
                  >
                    Saved videos
                  </ItemText>
                </NavLink>
              </ListItem>
            </UnOrderLists>
            <ContactPageContainer>
              <ContactPageHeading fontColor={isDarkTheme}>
                CONTACT US
              </ContactPageHeading>
              <IconsItemsContainer>
                <ImageLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ImageLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ImageLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </IconsItemsContainer>
              <ContactPageDescription fontColor={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </ContactPageDescription>
            </ContactPageContainer>
          </SideBarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return <>{this.renderContactPage()}</>
  }
}

export default SideBar
