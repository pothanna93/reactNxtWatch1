import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import HomePage from '../HomePage'
import PopupPage from '../PopupPage'
import SideBar from '../SideBar'

import {
  HomeContainer,
  PopupAndItemsContainer,
  PopupContainer,
  AddressAndHomeTrendingContainer,
  HomeSearchAndItemsContainer,
} from './styledComponents'

class HomeRoute extends Component {
  render() {
    return (
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme} = value

            return (
              <HomeContainer homeBg={isDarkTheme}>
                <PopupAndItemsContainer>
                  <PopupContainer>
                    <PopupPage />
                    <HomeSearchAndItemsContainer homeItemsBg={isDarkTheme}>
                      <HomePage />
                    </HomeSearchAndItemsContainer>
                  </PopupContainer>
                </PopupAndItemsContainer>
                <AddressAndHomeTrendingContainer>
                  <SideBar />
                </AddressAndHomeTrendingContainer>
              </HomeContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
export default HomeRoute
