import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Users extends Component {
    state = {
        users: [],
        edit: false,
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
    handleUpdate = (event, id) =>{
        event.preventDefault()
        fetch(`http://localhost:3000/users/${id}`, {
          body: JSON.stringify(this.state.formInputs),
          method: 'PUT',
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

    deleteUser(id, index) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE"
        }).then(data => {
          this.setState({
            users: [
              ...this.state.users.slice(0, index),
              ...this.state.users.slice(index + 1)
            ]
          });
        });
      }

      editUser = (id) => {
          this.setState ({
              edit: true
          })

          let editingItem = this.state.users.find(user => {
              return user.id === id
          })
          this.setState({
              image: editingItem.image,
             name: editingItem.name,
             birth_date: editingItem.birth_date 
          })
          console.log(editingItem)

      }
    
    render() {
        return (
<div>
                
                    {this.state.users.map((user, i) => (
                        
                        <div class="card mb-3" max-width= "300px" key={i}>
                            <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src={`${user.image}`} />
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                           
                          <form onSubmit={this.handleUpdate}>
                          <div class="form-group">
  <label htmlFor='image'>Image</label>
  <input type='text' class="form-control" value={this.state.formInputs.image} onChange={this.handleChange} id='image'/>
  </div>
  <div class="form-group">
  <label htmlFor='name'>Baby Name</label>
  <input type='text' class="form-control" value={this.state.formInputs.name} onChange={this.handleChange} id='name'/>
  </div>
  <div class="form-group">
  <label htmlFor='birth date'>Birth Date</label>
  <input type='text' class="form-control" value={this.state.formInputs.birth_date} onChange={this.handleChange} id='birth_date'/>
  </div>
  <input key={user.id} type="submit" class="btn btn-warning" value="Edit" onClick={()=> { this.editUser(user.id, i)}}/>
                      
  </form>
                                <h1 class="card-title">{user.name}</h1>
                                <h1 class="card-title">{user.birth_date}</h1>
                                
                                <form >
                          <input key={user.id} type="submit" class="btn btn-danger" value="DELETE" onClick={()=> { this.deleteUser(user.id, i)}}/>
                          </form>
                                <a href="#">Edit</a>
                                {user.tracks.map((track, index) => (
                            <div key={i}>
                              <h3> {track.feed_type}</h3>
                              <h3>The baby had a {track.diaper_change} diaper</h3>
                              <h3>The baby slept from {track.sleep_time}</h3>
                              <h3> {track.other}</h3>
                              <hr />
                            </div>
                          ))}

                            
                                
                          </div>
                        </div>
                        </div>
                          
                         
                                      <form onSubmit={this.handleSubmit}>
                                      <div class="form-group">
  <label htmlFor='image'>Image</label>
  <input type='text' class="form-control" value={this.state.formInputs.image} onChange={this.handleChange} id='image'/>
  </div>
  <div class="form-group">
  <label htmlFor='name'>Baby Name</label>
  <input type='text' class="form-control" value={this.state.formInputs.name} onChange={this.handleChange} id='name'/>
  </div>
  <div class="form-group">
  <label htmlFor='birth date'>Birth Date</label>
  <input type='text' class="form-control" value={this.state.formInputs.birth_date} onChange={this.handleChange} id='birth_date'/>
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