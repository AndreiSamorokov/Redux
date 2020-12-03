import React, {Component} from 'react'; 

class Option extends Component{
    onChange = (e) =>{
        this.props.onChange(e.target.value)
    }
    render(){
        return(
            <div>
                Your value will be calcuate by this value.
                <input value={this.props.diff} onChange={this.onChange}/>
            </div>
        );
    }
}

export default Option;
