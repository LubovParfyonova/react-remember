import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputName: ''
        }
    }
    showInputName = (event) => {

        this.setState({
            inputName: event.target.value
        });
        console.log(`Здравствуйте, ${this.state.inputName}`);
         
    }
    showGreeting = () =>{
        return `Здравствуйте, ${this.state.inputName}`  
            
    }

    render() {
        return (
            
            <form>
                <input type='text' value={this.state.inputName} onChange={this.showInputName} >
                </input>
                <button type='submit' onChange={this.showGreeting}>Отправить</button>
            </form>  
            

        )
    }
}
export default Form