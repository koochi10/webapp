import React, { Component } from 'react';
import '../Css/Github.css';
import logo from '../Imgs/logo0.svg'
import logo1 from '../Imgs/logo1.svg'

class Logo extends Component {
	render() {
		let img = (this.props.url) ? 
			<img src={logo1} className="Git-logo" alt="logo"/> : 
			<img src={logo} className="Git-logo" alt="logo"/>
		return (
			<a href="http://www.github.com/koochi10">
				{img}
			</a>
		);
	}
}

class Wrapper extends Component {
	//handle hover events here
	constructor() {
		super();
		this.state = {
			hovered: false
		};
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}
	handleMouseOver() {
		this.setState({
			url: true
		});
	}
	handleMouseOut() {
		this.setState({
			url: false
		});
	}
	render() {
		return(
			<span onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
				<Logo url={this.state.url}/>
			</span>
		);
	}
}

export default Wrapper;