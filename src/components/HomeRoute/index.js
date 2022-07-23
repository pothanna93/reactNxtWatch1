import {Component} from 'react'

import Cookies from 'js-cookie'
import {BiSearch} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import HomePage from '../HomePage'
import PopupPage from '../PopupPage'
import SideBar from '../SideBar'
import NotFound from '../NotFound'
import ContactPage from '../ContactPage'
import TrendingRoute from '../TrendingRoute'

import './index.css'

import {
  HomeContainer,
  PopupAndItemsContainer,
  PopupContainer,
  AddressAndHomeTrendingContainer,
} from './styledComponents'

class HomeRoute extends Component {
  renderLoadingView = () => (
    <div className="videos-loader-view" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderHomeVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <HomeContainer homeBg={isDarkTheme}>
            <PopupAndItemsContainer>
              <PopupContainer>
                <PopupPage />
                <HomePage />
              </PopupContainer>
            </PopupAndItemsContainer>
            <AddressAndHomeTrendingContainer>
              <SideBar />
              <ContactPage />
            </AddressAndHomeTrendingContainer>
          </HomeContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        {this.renderHomeVideos()}
      </>
    )
  }
}
export default HomeRoute
