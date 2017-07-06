
import React, { Component} from 'react';
import NavBar from './containers/NavBar/NavBarContainer';
import Footer from './components/Footer/Footer';
import './sharedStyles/styles.css';
import $ from 'jquery';

class App extends Component {
  state = {
    user: undefined,
  }

componentDidMount = () => this.getUser();

getUser(){
  $.ajax({
    url:`/api/get_user`,
    method: 'GET',
  }).done((response) => {
    console.log("HERE IS THE CURRENT USER", response)
    this.setState({
      user: response
    })
  })
}

  render() {
    return (
      <div>
        <div>
          {this.state.user ? <NavBar user={(this.state.user) ? this.state.user : null} isAuthed={(this.state.user) ? this.state.user.isAuthed : false}/> : null}
        </div>
        <div>
          {this.state.user ? React.cloneElement (this.props.children,
          { user: this.state.user }) : <h1>...Loading</h1>}
        </div>
        <Footer />
      </div>
    )
  }
}



export default App;
