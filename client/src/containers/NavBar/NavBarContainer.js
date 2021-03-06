import React, {Component} from 'react';
import $ from 'jquery';
import {NavBar} from '../../components';

class NavBarContainer extends Component {

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
				role={this.props.role}
				handleSubmit={this.handleSubmit}
				/>
			</div>
		)
	}
}

export default NavBarContainer;
