//don't forget the commas between functions 

var Counter = React.createClass({
	getInitialState: function(){
		return {clickCount: 0}
	},
	handleClick: function(){
		this.setState(function(state){
			return {clickCount: state.clickCount + 1}
		})
	},


	render:function(){
		return (
			//in order to show more than 1 element, they must be wrapped in a div
			<div>
			<h1>Hello Counter - DDD</h1>
			<button onClick={this.handleClick}> Click me!</button>
			<p> Number of clicks: {this.state.clickCount} </p>
			</div>
		);
	}
});

ReactDOM.render(<Counter />, document.getElementById('root'));