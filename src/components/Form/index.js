import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputName: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
    }
    getInputName = (event) => {

        this.setState({
            inputName: event.target.value
        });
        this.showGreeting();
    }
    showGreeting = () =>{
       
        return `Здравствуйте, ${this.state.inputName}` 

       
    }

    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Введите Ваше имя' value={this.state.inputName} onChange={this.getInputName} >
                </input>
                <button type='submit' onClick={this.getInputName}>Отправить</button>
            </form>  
        )
    }
}
export default Form