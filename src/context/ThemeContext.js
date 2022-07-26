import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  addToSaveVideos: () => {},
  activeTabItem: () => {},
  activeTab: '',
  onChangeTheme: () => {},
  removeSaveVideos: () => {},
})
export default ThemeContext
