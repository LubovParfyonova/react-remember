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
            enabled: this.enabled ? 'on' : 'off'
        })
    }
    render () {
        return (
            <>
                <div className='circle'>
                </div>
                <button  onClick={this.toggle}>
                    Toggle
                </button>
            </>
        )
    }
}
export default LampComponent