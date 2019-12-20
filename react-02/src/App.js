import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.svg';
import communityIcon from './images/logo.svg';
import tictactoeIcon from './images/slip.svg';
import bankIcon from './images/globe.svg';
import linkIcon from './images/linux.svg';

import Icon from './components/Icon';
import Starter from './components/starter/Starter';
// import Game from './components/tictactoe/Game';
// import AccountsApp from './components/accounts/AccountsApp';
// import CitiesApp from './components/cities/CitiesApp';
// import LinkedListApp from './components/linked-list/LinkedListApp';


class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: linkIcon
    }

    this.style = { backgroundColor: '#d4bea7' };
    this.icons = [logo, tictactoeIcon, bankIcon, communityIcon, linkIcon];
  }

  onSelect = (event) => {
  this.setState({
      selected: event.target.name
    });
  }

  

  renderIcons = () => {
    return this.icons.map((icon) => {
      return <Icon key={icon} name={icon} image={icon} style={this.state.selected === icon ? this.style : null} onClick={this.onSelect} />
    })
  }

  showPage = () => {
    if (this.state.selected === logo) return <Starter logo={logo}/>;
    // if (this.state.selected === tictactoeIcon) return <Game />;
    // if (this.state.selected === bankIcon) return <AccountsApp />;
    // if (this.state.selected === communityIcon) return <CitiesApp />;
    // if (this.state.selected === linkIcon) return <LinkedListApp />;

  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          {this.renderIcons()}
        </nav>

        {this.showPage()}
      </div>
    );
  }
}


export default App;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
