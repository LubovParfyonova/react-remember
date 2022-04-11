import React from 'react';
import './LampComponent.css'


class LampComponent extends React.Component{
    constructor(props){
        super (props)
        this.state = {
            enabled: true
        }
    }

    toggle = () => {
        this.setState({
            enabled: !this.state.enabled 
        })
    }

    render () {
        return (
            <>
                <div className={this.state.enabled ? 'circle-on' : 'circle-off'}>
                </div>
                <button onClick={this.toggle}>
                    Toggle
                </button>
            </>
        )
    }
}
export default LampComponent