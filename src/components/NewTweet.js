import React, { Component } from 'react'

class NewTweet extends Component {
	state = {
		text: ''
	}

	handleChange = (e) => {
		e.preventDefault()
		const message = e.target.value
		this.setState({
			text: message
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log("*** submit!")
	}

	render() {
		return (
			<div className='new-tweet'>
				<h3 align='center'>New Tweet</h3>
				<form className='new-tweet' onSubmit={this.handleSubmit}>
					<input
						className='textarea'
						placeholder='please type your message here...'
						value={this.state.text}
						onChange={this.handleChange}
						maxLength='200'
					/>
					<button className='btn'>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default NewTweet