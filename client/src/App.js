
import React, { Component} from 'react';



class App extends Component {



  render() {
    return (
      <div>
        {this.props.children :
        <h1>...Loading</h1>}
      </div>
    )
  }
}



export default App;
