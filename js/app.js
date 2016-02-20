

var Counter = React.createClass({
	render:function(){
		return (<h2> -hello Counter- </h2>);
	}
});

React.render(<Counter />, document.getElementById('root'));