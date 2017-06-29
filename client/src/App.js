
import React, { Component} from 'react';
import NavBar from './containers/NavBar/NavBarContainer';
import Footer from './components/Footer/Footer';


class App extends Component {



  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}



export default App;
