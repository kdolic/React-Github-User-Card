import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';


class App extends Component {
  state = {
    user: [],
    userName: '',
    followers: [],
  }

  componentDidMount() {
    console.log("App: Component Did Mount");
      axios.get('https://api.github.com/users/kdolic')
      .then((res) => {
        console.log(res.data)
        this.setState({
          user: res.data
        })
      })
      .catch((err) => {
        console.log('ERROR', err)
      })

      axios.get('https://api.github.com/users/kdolic/followers')
      .then((res) => {
        const resData = res.data.map(item=> item.login)
        console.log(resData)
        this.setState({
          followers: resData
        })
      })
      .catch((err) => {
        console.log('ERROR', err)
      })
  }

  handleChange = event => {
    this.setState({
      userName: event.target.value
    })
  }

  handleClick = event => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then((res) => {
      console.log(res.data)
      this.setState({
        user: res.data
      })
      axios.get(`https://api.github.com/users/${this.state.userName}/followers`)
      .then((res) => {
        console.log(res.data)
        const resData = res.data.map(item=> item.login)
        this.setState({
          followers: resData
        })
      })
    })
    .catch((err) => {
      console.log('ERROR', err)
    })
  }


render() {
  return (
    <div className="App">
     <h1>GitHub User Card App</h1>
     <form className='form_container'>
       <input onChange={this.handleChange} type='text' placeholder='Enter GitHub Username...' />
       <button onClick={this.handleClick}>Search GitHub User</button>
     </form>
     <UserCard {...this.state.user} followers={this.state.followers}  />
    </div>
  );
}
}

export default App;
