import Header from '../Header'
import SideBar from '../SideBar'
import {
  NotFoundContainer,
  Heading,
  Description,
  NotFoundImg,
  NotFoundDiv,
  NotSideBarContainer,
} from './styledComponents'

import ThemeContext from '../../Context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const BgImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundDiv PageBgColor={isDarkTheme}>
            <NotSideBarContainer>
              <SideBar />
            </NotSideBarContainer>

            <NotFoundContainer itemsBgColor={isDarkTheme}>
              <NotFoundImg src={BgImg} alt="not found" />
              <Heading>Page Not Found</Heading>
              <Description>
                we are sorry, the page you requested could not be found.
              </Description>
            </NotFoundContainer>
          </NotFoundDiv>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
