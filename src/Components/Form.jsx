import React from "react";

class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
        message: '',
        select: '',
        subscription: false,
        gender: '',
    }
    handelChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    validateName = () => {
        if (this.state.firstName.length < 2){
            alert('Количесвто символов должно быть больше')
        }
    }
    validateEmail = () => {
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)){
            alert('Email введен некорректно')
        }
    }
    handelCheckBoxChange = (event) => {
        this.setState({ [event.target.name]: event.target.checked })
    }    
     render(){
        const { firstName, email, message, select, subscription, gender } = this.state

        return <div>
            <input 
            type="text"
            name="firstName"
            placeholder="firstName"
            value={firstName}
            onChange={this.handelChange}
            />
            <input 
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handelChange}
            />
            <textarea name="message" value={message} onChange={this.handelChange}/>
            <select name="select" value={select} onChange={this.handelChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <label>
                <input 
                    type="checkbox"
                    name="subscription"
                    checked={subscription}
                    onChange={this.handelCheckBoxChange}
                    />
                    Согласен с условиями
            </label>
            <input
                type="radio"
                name="gender"
                value="man"
                onChange={this.handelChange}
                checked={gender === "man"}
            /> Man
            <input
                type="radio"
                name="gender"
                value="women"
                onChange={this.handelChange}
                checked={gender === "women"}
            /> Women
        </div>
    }
}

export { Form };