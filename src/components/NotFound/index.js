import {
  NotFoundContainer,
  Heading,
  Description,
  NotFoundImg,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      const BgImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <NotFoundContainer>
          <NotFoundImg src={BgImg} alt="notfound" />
          <Heading>Page Not Found</Heading>
          <Description>we are sorry the page</Description>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
