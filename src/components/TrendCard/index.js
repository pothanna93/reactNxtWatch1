import {
  TrendItem,
  TrendImg,
  TrendInfo,
  TrendProfileImg,
  TrendInfoTextContainer,
  TrendTitle,
  TrendName,
  TrendViewsCountContainer,
} from './styledComponents'

const TrendCard = props => {
  const {trendingVideoDetails} = props
  const {
    publishedAt,
    thumbnailUrl,
    viewCount,
    channel,
    title,
  } = trendingVideoDetails
  const {name, profileImageUrl} = channel
  return (
    <TrendItem>
      <TrendImg src={thumbnailUrl} alt={title} />
      <TrendInfo>
        <TrendProfileImg src={profileImageUrl} alt={name} />
        <TrendInfoTextContainer>
          <TrendTitle>{title}</TrendTitle>
          <TrendName>{name}</TrendName>
          <TrendViewsCountContainer>
            <TrendName>{viewCount} Views</TrendName>
            <TrendName>. {publishedAt}</TrendName>
          </TrendViewsCountContainer>
        </TrendInfoTextContainer>
      </TrendInfo>
    </TrendItem>
  )
}

export default TrendCard
