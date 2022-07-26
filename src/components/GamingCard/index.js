import {Link} from 'react-router-dom'
import {
  GamingCardItem,
  GameImg,
  GameTitle,
  GameViewCount,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const GamingCard = props => {
  const {gamingVideoDetails} = props
  const {title, viewCount, thumbnailUrl, id} = gamingVideoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GamingCardItem>
            <Link to={`/videos/${id}`} className="link">
              <GameImg src={thumbnailUrl} alt={title} />
              <GameTitle gameTitle={isDarkTheme}>{title}</GameTitle>
              <GameViewCount gameCount={isDarkTheme}>
                {viewCount} Watching WorldWide
              </GameViewCount>
            </Link>
          </GamingCardItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingCard
