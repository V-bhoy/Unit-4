import React from 'react';
import Amazon from './components/Amazon';
import Apple from './components/Apple';

function App() {
  return (
    <div className="App">
          <Amazon date={"28/10/2020"} type={"Amazon"} device={"Desktop"} logo={"fa fa-amazon"} />
          <Apple date={"17 Sep 2020"} type={"Apple"} device={"MacOS"} logo={"fa fa-apple"} />
    </div>
  );
}

export default App;
