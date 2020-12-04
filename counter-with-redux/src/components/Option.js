import React,{Component} from 'react';
import {setDiff} from '../actions';

class Option extends component{
    constructor(props){
        super(props);

        this.onChange=this.onChange.bind(this);
    }

    onChange(event){
        this.props.store.dispatch(setDiff(parseInt(event.target.value)))
    }

    render(){
        return(
            <div>
                <input value={this.props.store.setState().counter.diff} onChange={this.onChange}/>
            </div>
        )
    }
}

export default Option;