import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {BiSun} from 'react-icons/bi'
import Popup from 'reactjs-popup'
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
  PopupContainer,
  ModalContainer,
  AlignColumn,
  ModalDesc,
  AlignRow,
  CloseButton,
  ConfirmButton,
} from './styledComponents'

import './index.css'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, onChangeTheme} = value

      const onClickThemeChange = () => {
        onChangeTheme()
      }
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const iconColor = isDarkTheme ? 'blackColor' : 'whiteColor'
      const LOGO = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      return (
        <NavContainer backColor={isDarkTheme}>
          <ResponsiveContainer>
            <MobileNavContainer>
              <Link to="/">
                <LogoImage src={LOGO} alt="website logo" />
              </Link>

              <IconsContainer>
                <ButtonElement type="button" onClick={onClickThemeChange}>
                  {isDarkTheme ? (
                    <FaMoon className="icons" />
                  ) : (
                    <BiSun className={`icons ${iconColor}`} />
                  )}
                </ButtonElement>
                <GiHamburgerMenu className={`icons ${iconColor}`} />
                <PopupContainer>
                  <Popup
                    modal
                    trigger={
                      <ButtonElement
                        type="button"
                        data-testid="iconButton"
                        logBtn={isDarkTheme}
                      >
                        <FiLogOut className={`icons ${iconColor}`} />
                      </ButtonElement>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <ModalContainer>
                        <AlignColumn>
                          <ModalDesc>
                            Are you sure, you want to logout
                          </ModalDesc>
                          <AlignRow>
                            <CloseButton
                              type="button"
                              data-testid="closeButton"
                              onClick={() => close()}
                            >
                              Cancel
                            </CloseButton>

                            <ConfirmButton
                              type="button"
                              onClick={onClickLogout}
                            >
                              Confirm
                            </ConfirmButton>
                          </AlignRow>
                        </AlignColumn>
                      </ModalContainer>
                    )}
                  </Popup>
                </PopupContainer>
              </IconsContainer>
            </MobileNavContainer>
            <DesktopContainer>
              <Link to="/">
                <LogoImage src={LOGO} alt="website logo" />
              </Link>

              <IconsContainer>
                <ButtonElement
                  onClick={onClickThemeChange}
                  type="button"
                  data-testid="theme"
                >
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

                <PopupContainer>
                  <Popup
                    modal
                    trigger={
                      <LogoutButton
                        type="button"
                        data-testid="iconButton"
                        logBtn={isDarkTheme}
                      >
                        Logout
                      </LogoutButton>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <ModalContainer>
                        <AlignColumn>
                          <ModalDesc>
                            Are you sure, you want to logout
                          </ModalDesc>
                          <AlignRow>
                            <CloseButton
                              type="button"
                              data-testid="closeButton"
                              onClick={() => close()}
                            >
                              Cancel
                            </CloseButton>

                            <ConfirmButton
                              type="button"
                              onClick={onClickLogout}
                            >
                              Confirm
                            </ConfirmButton>
                          </AlignRow>
                        </AlignColumn>
                      </ModalContainer>
                    )}
                  </Popup>
                </PopupContainer>
              </IconsContainer>
            </DesktopContainer>
          </ResponsiveContainer>
        </NavContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default withRouter(Header)
