import React, {Component} from 'react';
class Home extends Component {
    handleClick = ()=> {
    }

    render() {
        return (
            <div className="Home" onClick={this.handleClick}>
                <div className="home-info">
                    <a href="#" style={{fontSize: '80px'}}>0000e</a>
                </div>
            </div>
        );
    }
}

export default Home;
