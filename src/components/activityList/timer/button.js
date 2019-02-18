import React from 'react';

class Button extends React.Component {
    clicked = () => {
        if (this.props.delId)
            this.props.onClick(this.props.delId)
        else
            this.props.onClick();
    }
    
    render (){
        if (this.props.option)
        {
            return (
                <div>
                    <button onClick = {this.clicked}>
                        {this.props.yes}
                    </button>
                </div>
            );
        }
        else
        {
            return(
                <div>
                    <button onClick = {this.clicked}>
                        {this.props.no}
                    </button>
                </div>
            );
        }
    }
}
export default Button;