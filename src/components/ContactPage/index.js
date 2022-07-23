import ThemeContext from '../../context/ThemeContext'
import {
  ContactPageContainer,
  ContactPageHeading,
  IconsItemsContainer,
  ImageLogo,
  ContactPageDescription,
} from './styledComponents'

const ContactPage = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <ContactPageContainer>
          <ContactPageHeading fontColor={isDarkTheme}>
            Contact Us
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
            Enjoy! Now To see Your
          </ContactPageDescription>
        </ContactPageContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default ContactPage
