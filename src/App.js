import './assets/scss/styles.scss'

import Header from './components/Header/Header'
import TinderCardsView from './components/TinderCards/TinderCards'
import SwipeButtons from './components/SwipeButtons/SwipeButtons'

function App() {
  return (
    <div className="app">
      <meta meta name="viewport" content="width=device-width, user-scalable=no" />
      <Header />
      <TinderCardsView />
      <SwipeButtons />
    </div>
  );
}

export default App;
