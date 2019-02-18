import React from 'react';
import ReactDOM from 'react-dom';
import ActivityPage from './components/activityPage'

class App extends React.Component{
    state = {
        admin: true
    }
    flipAdmin = () =>
    {
        this.setState({
            admin : !this.state.admin
        });
    }
    render (){
        return (
            <div>
                <ActivityPage admin = {this.state.admin}
                              flipAdmin = {this.flipAdmin}
                />
            </div>
        );
    }
}
ReactDOM.render ( <App/>, document.querySelector('#root'));