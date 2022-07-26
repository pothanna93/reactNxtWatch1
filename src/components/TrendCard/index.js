import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

import {
  TrendItem,
  TrendImg,
  TrendInfo,
  TrendProfileImg,
  TrendInfoTextContainer,
  TrendTitle,
  TrendName,
  TrendViewsCountContainer,
  ImgDiv,
} from './styledComponents'

const TrendCard = props => {
  const {trendingVideoDetails} = props
  const {
    publishedAt,
    thumbnailUrl,
    viewCount,
    channel,
    title,
    id,
  } = trendingVideoDetails
  const {name, profileImageUrl} = channel
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`} className="link">
            <TrendItem>
              <ImgDiv>
                <TrendImg src={thumbnailUrl} alt={title} />
              </ImgDiv>
              <TrendInfo>
                <TrendProfileImg src={profileImageUrl} alt={name} />
                <TrendInfoTextContainer>
                  <TrendTitle TrTitle={isDarkTheme}>{title}</TrendTitle>
                  <TrendName>{name}</TrendName>
                  <TrendViewsCountContainer>
                    <TrendName>{viewCount} Views</TrendName>
                    <TrendName>. {publishedAt}</TrendName>
                  </TrendViewsCountContainer>
                </TrendInfoTextContainer>
              </TrendInfo>
            </TrendItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendCard
