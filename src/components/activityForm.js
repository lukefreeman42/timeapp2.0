import React from 'react';

class ActivityForm extends React.Component{
    state = {
        activity: '',
        id:       '',
        hours:    '',
        minutes:  '',
        on:       false
    };

    resetForm = () => {
        this.setState({
            activity: '',
            hours:    '',
            minutes:  ''
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.resetForm();
    }

    onInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name] : value,
            id: this.state.activity + '-' + this.state.hours + ':' + this.state.minutes
        });
    }

    activityForm = () => {
        return(
            <div>
                <form onSubmit = {this.onFormSubmit}>
                    <div>
                        <label> What do you spend time on? </label>
                        <input
                            type = "text"
                            name = "activity"
                            onChange = {this.onInputChange}
                            value = {this.state.activity}
                            required
                        />
                    </div>
                    <div>
                        <label> How much time? </label>
                        <input
                            type = "number"
                            name = "hours"
                            onChange = {this.onInputChange}
                            value = {this.state.hours}
                            required
                        />
                        <label> : </label>
                        <input
                            type = "number"
                            name = "minutes"
                            onChange = {this.onInputChange}
                            value = {this.state.minutes}
                            required
                        />
                        <input type = "submit"
                               value = "Add"
                        />
                    </div>
                </form>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.activityForm()}
            </div>
        );
    }
}

export default ActivityForm;