import React from 'react';

import Header from './components/header';
import Headline from './components/headline';

import './App.scss';

const tempArr = [{
  fName: 'Burhan',
  lName: 'Mullamitha',
  email: 'burhan@gmail.com',
  age: 22,
  onlineStatus: true
}]

class App extends React.Component {
    
    render() {
        return (
            <div className="App">
              <Header />
              <section className="main">
                <Headline header="Post" desc="Click the button to render posts" tempArr={tempArr} />
              </section>
            </div>
          );
    }
}


export default App;
