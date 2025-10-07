import React from 'react'
import { List } from './list/List';
import './main.scss'
import Banner from './components/banner/Banner';
// import Header from './components/header/Header';
const App = () => {

  return (
    <div>
      <Banner/>
      <List/>
    </div>
  )
}

export default App;