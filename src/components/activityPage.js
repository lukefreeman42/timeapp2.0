import React from 'react';
import ActivityForm from './activityForm';
import ActivityList from './activityList/activityList';
import Button from './activityList/timer/button';

class ActivityPage extends React.Component{
    state =
    {
        list:[]
    };

    flipAdmin = () => {
        if (window.confirm('Are you sure you want to edit these?'))
        {
            this.killCom();
            this.props.flipAdmin();
        }
    }

    killCom = (id) =>
    {
        const newList = this.state.list.map(elem => {
            if (elem.id !== id)
                elem.on = false;
            else
                elem.on = true;
            return elem;
        });
        this.setState({list : newList});
    }

    delAct = (id) =>
    {
        const newList = this.state.list.filter(elem =>{
            if (elem.id !== id)
                return elem;
        });
        this.setState({list : newList});
    }

    addAct = (elem) =>
    {
        const newList = this.state.list.concat(elem);
        this.setState({list: newList});
    }

    render(){
        if (this.props.admin)
        {
            return(
                <div>
                    <ActivityForm onSubmit = {this.addAct}/>
                    <ActivityList list = {this.state.list}
                                  admin = {this.props.admin}
                                  killCom = {this.killCom}
                                  delAct = {this.delAct}
                    />
                    <Button       onClick = {this.props.flipAdmin}
                                  option = {this.props.admin}
                                  yes = "save" 
                    />
                </div>
            );
        }
        else
        {
            return(
                <div>
                    <ActivityList list = {this.state.list}
                                  admin = {this.props.admin}
                                  killCom = {this.killCom}
                                  delAct = {this.delAct}
                    />
                    <Button       onClick = {this.flipAdmin}
                                  option = {this.props.admin}
                                  no = "edit"
                    />
                </div>
            );
        }
    }
}

export default ActivityPage