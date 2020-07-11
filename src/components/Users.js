import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Users extends Component {
    state = {
        users: [],
        formInputs: {
            name: '',
            birth_date: '',
            image: '',
            feed_type: '',
            diaper_change: '',
            sleep_time: '',
            other: ''
        }
       
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () =>{
        fetch('http://localhost:3000/users')
            .then(data => data.json())
            .then((json) => {
                this.setState({users:json})
                console.log(json[1].tracks[0].feed_type)
            })
        .catch(error => console.error(error))
    }
    handleChange = (event) => {
        const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
        this.setState(updateInput)
      }
      
      handleSubmit = (event) =>{
        event.preventDefault()
        fetch('http://localhost:3000/users', {
          body: JSON.stringify(this.state.formInputs),
          method: 'POST',
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
       }
     })
       .then(createdUser => {
         return createdUser.json()
       })
    
       .then(jsonedUser => {
         // reset the form
         // add notice to notices
         this.setState({
           formInputs: {
            name: '',
            birth_date: '',
            image: '',
            feed_type: '',
            diaper_change: '',
            sleep_time: '',
            other: ''
           },
           users: [jsonedUser, ...this.state.users]
         })
       })
       .catch(error => console.log(error))
    }
    
    render() {
        return (
<div>
                
                    {this.state.users.map((user, id) => (
                        <div class="card mb-3" max-width= "300px" key={id}>
                            <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src={`${user.image}`} />
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">{user.name}</h1>
                                <h1 class="card-title">{user.birth_date}</h1>
                                <a href="#">Edit</a>
                                <div>
                                <a href="#">Delete</a>
                                </div>
                          </div>
                        </div>
                        </div>
                          
                         
                            {user.tracks.map((track, i) => (
                            <div key={i}>
                              <h3> {track.feed_type}</h3>
                              <h3>The baby had a {track.diaper_change} diaper</h3>
                              <h3>The baby slept from {track.sleep_time}</h3>
                              <h3> {track.other}</h3>
                              <hr />
                            </div>
                          ))}
                                      <form onSubmit={this.handleSubmit}>
                                      <div class="form-group">
    <label for="image">Upload Image</label>
    <input type="file" class="form-control-file" id="image"/>
  </div>
  <div class="form-group">
  <label htmlFor='name'>Baby Name</label>
  <input type='text' class="form-control" value={this.state.formInputs.name} onChange={this.handleChange} id='feed_type'/>
  </div>
  <div class="form-group">
  <label htmlFor='birth date'>Birth Date</label>
  <input type='text' class="form-control" value={this.state.formInputs.birth_date} onChange={this.handleChange} id='feed_type'/>
  </div>
                                      <div class="form-group">
  <label htmlFor='feed type'>Feeding</label>
  <input type='text' class="form-control" value={this.state.formInputs.feed_type} onChange={this.handleChange} id='feed_type'/>
  </div>
  <div class="form-group">
  <label htmlFor='diaper change'>Diaper Change</label>
  <input type='text' class="form-control" value={this.state.formInputs.diaper_change} onChange={this.handleChange} id='diaper_change'/>
  </div>
  <div class="form-group">
  <label htmlFor='sleep time'>Sleep time</label>
  <input type='text' class="form-control" value={this.state.formInputs.sleep_time} onChange={this.handleChange} id='sleep_time'/>
  </div>
  <div class="form-group">
  <label htmlFor='other'>Other</label>
  <input type='text' class="form-control" value={this.state.formInputs.other} onChange={this.handleChange} id='other'/>
  </div>
  <input type="submit" class="btn btn-primary"/>
</form>
                          
                        </div>
                      ))}
                   
      
            
            

            

</div>

        );
    }
}

export default Users;