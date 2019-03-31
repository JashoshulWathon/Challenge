import React, { Component } from 'react'
import Axios from 'axios';

export default class App extends Component {

  state = {
    name: [],
    isEdit: false,
    clickName: null
  }

  componentDidMount() {
    Axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const name = res.data;
        // console.log(name);
        this.setState({ name });
      })
  }

  editInput = (clickId) => {
    // console.log(clickId);
    this.setState({ isEdit: !this.state.isEdit, clickName: clickId });
  }

  saveInput = () => {
    const { name } = this.state;
    // console.log("name", ...name)
    this.setState({ name, isEdit: false });
  }
  
  handleChange = (idVal, e) => {
    // this.setState({ name: obj });
    console.log(e.target.value);
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handlefocus = (event) => {
    event.target.select();
  }

  render() {
    const { name } = this.state;
    // console.log(name);
    return (
      <div>
        {name.map((user) => (
          <div key={user.id}>
            {this.state.isEdit && this.state.clickName === user.id ?
              <input name={user.id} style={{ display: 'inline', marginRight: 10 }} 
                onFocus={this.handlefocus} autoFocus 
                onChange={(e) => this.handleChange(user.id, e)} 
                type="text" value={user.name} 
              /> :
              <h1 style={{ display: 'inline', marginRight: 10 }}>{user.name}</h1>
            }
            {this.state.isEdit && this.state.clickName === user.id ?
              <button onClick={() => this.saveInput()}>Save</button> :
              <button onClick={() => this.editInput(user.id)}>Edit</button>
            }
            <br />
            <br />
          </div>
        ))}
      </div>
    )
  }
}
