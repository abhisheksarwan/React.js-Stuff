class Article extends React.Component {
    constructor(){
        super();
        this.state = { number : 1 };
        //this.fetchNumber = this.fetchNumber.bind(this); //other way to bind
    }

    fetchNumber(e){
    let randomID = Math.floor(Math.random()*357);
    this.setState({number: randomID});
    }

    render(){
        return (
            <div>
            <h1>Read Article Number : {this.state.number}</h1>
            <button onClick={this.fetchNumber.bind(this)}>Get Article for Today!</button>
            </div>
            );
    }
}