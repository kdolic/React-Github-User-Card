import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';


class App extends Component {
  state = {
    user: [],
    userName: ''
  }

  componentDidMount() {
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
  }

  


render() {
  return (
    <div className="App">
     <h1>GitHub User Card App</h1>
     <UserCard user={this.state.user} />
    </div>
  );
}
}

export default App;
