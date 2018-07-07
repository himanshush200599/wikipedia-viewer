import React, { Component } from 'react';

import './App.css';
import Output from './output'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      titles:[],
      detail:[],
      links:[],
      inputValue:''

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      inputValue:e.target.value
    })

  }
  handleSubmit(e){
    e.preventDefault();
    let queryStr = this.state.inputValue;
    let url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${queryStr}`;
    console.log(queryStr)

    fetch(url)
    .then( res =>res.json())
    .then((data) => {
      this.setState({
          titles: data[1],
          descriptions:data[2],
          links: data[3]
      })
    })
    }



  render(){
    return(
      <div className='container'>
        <div className='heading text-center'>
          <h1>Wikipedia Viewer</h1>
          </div>
        <div>
          <form className='form-group'>
            <input value={this.state.inputValue} onChange={this.handleChange} type='text' className='form-control searchBox' placeholder='Enter keywords to search for topic' />

            </form>
          <div className="text-center">
     <form onSubmit={this.handleSubmit}>
          <button type='submit'  className='btn btn-primary btn-lg text-center'>Submit</button>
       </form>
          </div>
          </div>
          {
            this.state.titles.map((title, i) =>
              <Output
                key={i}
                title={title}
                description={this.state.descriptions[i]}
                link={this.state.links[i]}
              />
            )
          }
      </div>

    )
  }
}

export default App;
