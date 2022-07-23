import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'

import Header from './components/Header'
import LoginPage from './components/LoginPage'
import NotFound from './components/NotFound'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideos from './components/SavedVideos'
import HomePage from './components/HomePage'

class App extends Component {
  state = {
    isDarkTheme: true,
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/heder" component={Header} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
