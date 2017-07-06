import React, {Component} from 'react';
import $ from 'jquery';
import {NavBar} from '../../components';

class NavBarContainer extends Component {
	state = {
		isAuthed: undefined,
		role: undefined
	}

	componentDidMount = () => {
		console.log("This is this.props", this.props)
		this.props.user ? this.setState({isAuthed: this.props.user.isAuthed}) : null
		this.props.user ? this.setState({role: this.props.user.user.local.role}) : null
	}

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
				role={this.state.role}
				handleSubmit={this.handleSubmit}
				/>
			</div>
		)
	}
}

export default NavBarContainer;
