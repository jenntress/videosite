import React, {Component} from 'react';
import $ from 'jquery';
import {NavBar} from '../../components';

class NavBarContainer extends Component {
	state = {
		isAuthed: undefined
	}

	componentDidMount = () => (
		this.props.user ? this.setState({isAuthed: this.props.user.isAuthed}) : null
	)

	handleSubmit = this.handleSubmit.bind(this);

	handleSubmit(event){
		$.ajax({
			url: '/api/logout',
			method: 'GET'
		}).done((response) => window.location="/home");
	}


	render(){
		return(
			<div>
				<NavBar
				isAuthed={this.props.isAuthed}
				handleSubmit={this.handleSubmit}
				/>
			</div>
		)
	}
}

export default NavBarContainer;
