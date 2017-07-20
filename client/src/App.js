
import React, { Component} from 'react';
import NavBar from './containers/NavBar/NavBarContainer';
import Footer from './components/Footer/Footer';
import './sharedStyles/styles.css';
import $ from 'jquery';

class App extends Component {
  state = {
    user: undefined,
    isAuthed: undefined,
    role: undefined
  }

componentDidMount = () => this.getUser();

getUser(){
  $.ajax({
    url:`/api/get_user`, //forwared ticks when you're trying to interpret a parameter
    method: 'GET',
  }).done((response) => {
    console.log("HERE IS THE CURRENT USER", response)
    this.setState({
      user: response.user,
      isAuthed: response.isAuthed,
      role: (response.isAuthed === true) ? response.user.local.role : null
    })
  })
}

  render() {
    return (
      <div>
        <div>
          {<NavBar {...this.state}/>}
        </div>
        <div>
          {React.cloneElement (this.props.children, { ...this.state })}
        </div>
        <Footer />
      </div>
    )
  }
}



export default App;
