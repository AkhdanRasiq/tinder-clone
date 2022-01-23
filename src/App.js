import './assets/scss/styles.scss'

import Header from './components/Header/Header'
import TinderCardsView from './components/TinderCards/TinderCards'
import SwipeButtons from './components/SwipeButtons/SwipeButtons'

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCardsView />
      <SwipeButtons />
    </div>
  );
}

export default App;
