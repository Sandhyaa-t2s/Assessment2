import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TableFooter from '@material-ui/core/TableFooter';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { request } from 'https';
 import images from './images.jpg';
// import images1 from './images1.jpg';
class App extends Component {
  constructor() {
    super();
    this.state = {
      postId: [],
    };
  }
  componentDidMount() {
    // request
    // .get('http://localhost:5000/')
    //     .end((err, res) => {
    //       if(err){
    //       console.log("error",err);
    //       }
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        console.log("hello sandhya.!! ", res)
        // resStatus= res.status
        return res.json();
      })
      .then((findres) => {
        console.log(findres);
        this.setState({
          postId: findres,
        });
  //   .catch((error) => {
  //     // AHHHH! An Error!
  // });
      })
  }
  // .catch(function error() {
  //   res.render('error', {
  //     message: "oops api stopped"
  //   })
  // if(findres=='true'){
  //   alert("welcome to api");
  // }
  // else{
  //   alert("Api failed");
  // }

  // console.log(error.message)

  // .then(res => {
  //   resStatus= res.status
  //   return res.json()
  // })
  //   .then(res => {
  //     switch (res) {
  //       case 200:
  //         console.log('ok')
  //         break
  //       case 400:
  //         if (res.status === 'ValidationFailed') {
  //           // My custom error messages from the API.
  //           console.log(res.fieldMessages)
  //         } else {
  //           console.log('this is a client (probably invalid JSON) error, but also might be a server error (bad JSON parsing/validation)')
  //         }
  //         break
  //       case 500:
  //         console.log('server error, try again')
  //         break
  //       default:
  //         console.log('unhandled')
  //         break
  //     }
  //   })
  //   .catch(err => {
  //     console.error(err)
  //   })
  // }

  render() {
    return (
      <div>
        <header className="App-header">
        <img src={images} className="App-logo" alt="logo" />
          {/* <img src={images} className="App-background" alt="background" /> */}
            </header>
           < div className="container">
           <div className="row">
        <Paper style={{ width: '100%' }}>
          <Table style={{ width: '100%' }} >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>EMAIL</TableCell>
              </TableRow>
              </TableHead>
            <TableBody>
              {this.state.postId.map((obj, key) => {
                return (
                  <TableRow>
                    <TableCell>{obj.id}</TableCell>
                    <TableCell>{obj.name}</TableCell>
                    <TableCell>{obj.email}</TableCell>
                    {/* <TableCell numeric>{obj.body}</TableCell> */}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
      </div>
      </div>
    );

  }
}
export default App;


    
