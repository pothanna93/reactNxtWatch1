import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {BiSun} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'

import {
  NavContainer,
  ResponsiveContainer,
  LogoImage,
  MobileNavContainer,
  IconsContainer,
  ButtonElement,
  DesktopContainer,
  ProfileImg,
  LogoutButton,
} from './styledComponents'

import './index.css'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickThemeChange = () => {
        toggleTheme()
      }
      const iconColor = isDarkTheme ? 'blackColor' : 'whiteColor'
      const LOGO = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      return (
        <NavContainer backColor={isDarkTheme}>
          <ResponsiveContainer>
            <MobileNavContainer>
              <LogoImage src={LOGO} alt="logo" />
              <IconsContainer>
                <ButtonElement type="button" onClick={onClickThemeChange}>
                  {isDarkTheme ? (
                    <FaMoon className="icons" />
                  ) : (
                    <BiSun className={`icons ${iconColor}`} />
                  )}
                </ButtonElement>
                <GiHamburgerMenu className={`icons ${iconColor}`} />
                <ButtonElement>
                  <FiLogOut className={`icons ${iconColor}`} />
                </ButtonElement>
              </IconsContainer>
            </MobileNavContainer>
            <DesktopContainer>
              <LogoImage src={LOGO} alt="logo" />
              <IconsContainer>
                <ButtonElement onClick={onClickThemeChange} type="button">
                  {isDarkTheme ? (
                    <FaMoon className="icons" />
                  ) : (
                    <BiSun className={`icons ${iconColor}`} />
                  )}
                </ButtonElement>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <LogoutButton type="button" logBtn={isDarkTheme}>
                  Logout
                </LogoutButton>
              </IconsContainer>
            </DesktopContainer>
          </ResponsiveContainer>
        </NavContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default Header
