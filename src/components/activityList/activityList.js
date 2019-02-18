import React from 'react';
import Timer from './timer/timer'
import Button from './timer/button'

class ActivityList extends React.Component {
    render(){
        return (
            <div>
                <h3> Activities </h3>
                    {this.props.list.map((elem, key) => {
                        return (<Activity key = {key}
                                          elem = {elem}
                                          admin = {this.props.admin}
                                          killCom = {this.props.killCom}
                                          delAct = {this.props.delAct}
                                />
                            );
                    })}
            </div>
        );
    }
}

class Activity extends React.Component {
    render (){
        if (this.props.admin)
        {
            return (
              <div>
                  <label> {this.props.elem.activity} </label>
                  <Button option = {true}
                          yes = "delete"
                          onClick = {this.props.delAct}
                          delId = {this.props.elem.id}
                   />
                   <Timer
                          elem = {this.props.elem}
                          admin = {this.props.admin}
                          killCom = {this.props.killCom}
                   />
              </div>
            )
        }
        else
        {
            return (
                <div>
                    <label> {this.props.elem.activity} </label>
                     <Timer
                            elem = {this.props.elem}
                            admin = {this.props.admin}
                            killCom = {this.props.killCom}
                     />
                </div>
              ) 
        }
    }
}

export default ActivityList;