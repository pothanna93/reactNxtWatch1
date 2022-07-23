import {Component} from 'react'

import {IoMdClose} from 'react-icons/io'
import {
  BannerImageContainer,
  ModalContainer,
  BannerImage,
  GetItNowButton,
  CloseButton,
  PremiumPlan,
} from './styledComponents'

class PopupPage extends Component {
  state = {
    display: 'flex',
  }

  onCloseBanner = () => {
    this.setState({display: 'none'}, this.renderHomeVideos)
  }

  render() {
    const {display} = this.state
    return (
      <BannerImageContainer data-testid="banner" display={display}>
        <ModalContainer>
          <BannerImage
            src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <PremiumPlan>
            Buy Nxt Watch Premium Prepaid Plans With UPI
          </PremiumPlan>
          <GetItNowButton>GET IT NOW</GetItNowButton>
        </ModalContainer>
        <CloseButton
          type="button"
          data-testid="close"
          onClick={this.onCloseBanner}
        >
          <IoMdClose size={20} color="#231f20" />
        </CloseButton>
      </BannerImageContainer>
    )
  }
}

export default PopupPage
