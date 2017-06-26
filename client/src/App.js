
import React, { Component} from 'react';
import NavigationBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


class App extends Component {



  render() {
    return (
      <div>
        <NavigationBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}



export default App;
