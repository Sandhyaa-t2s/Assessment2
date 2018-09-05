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
// import images from './images.jpg';
class App extends Component {
  constructor() {
    super();
    this.state = {
      postId: [],
    };
  }
  componentDidMount() {
    console.log("inside component")
    fetch("https://jsonplaceholder.typicode.com/comments")

      .then(res => res.json())
      .then((findres) => {
        console.log(findres);
        this.setState({
          postId: findres,
        });

      })
  }

  render() {
    return (
      <div>
        <Paper style={{ width: '100%' }}>
          <Table style={{ width: '100%' }} >
            <TableBody>
              {this.state.postId.map((obj, key) => {
                return (
                  <TableRow >
                    <TableCell>
                      {obj.id}
                    </TableCell>
                    <TableCell numeric>{obj.name}</TableCell>
                    <TableCell numeric>{obj.email}</TableCell>
                    {/* <TableCell numeric>{obj.body}</TableCell> */}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

<Button>
  Link
</Button>
        </Paper>
        </div>
        );
  
  }
} export default App;


    // <div className="App">
    //   <header className="App-header">
    //     <img src={images} className="App-logo" alt="logo" />
    //     {/* <h1 className="App-title">API</h1> */}
    //   </header>

    //   <div>

    //     {this.state.contents.map((obj, key) => {
    //       console.log("object", obj);
    //       return (
    //         <div className="App-table">
    //           {/* <span>{obj.author}:</span>
    //           <span>{obj.author}:</span>
    //           <span>{obj.quote}</span>
    //           <span>{obj.length}</span> */}
    //           {/* {obj.tags} */}
    //           <table border="10px">
    //           <tr style={{'background-color':'grey'}}>
    //               <td>
    //                 <th>ID</th>
    //                 {obj.id}
    //               </td>
    //             </tr>
    //           <tr style={{'background-color':'pink'}}>
    //               <td>
    //                 <th>QOUTES</th>
    //                 {obj.quote}
    //               </td>
    //             </tr>
    //             <tr style={{'background-color':'grey'}}>
    //               <td>
    //                 <th>AUTHOR</th>
    //                 {obj.author}
    //               </td>
    //             </tr>
    //             <tr style={{'background-color':'pink'}}>
    //               <td>
    //                 <th>TAGS</th>
    //                 {obj.tags}
    //               </td>
    //             </tr>
    //             <tr style={{'background-color':'grey'}}>
    //               <td>
    //                 <th>CATERGORY</th>
    //                 {obj.category}
    //               </td>
    //             </tr>
    //             <tr style={{'background-color':'pink'}}>
    //               <td>
    //                 <th>DATE</th>
    //                 {obj.date}
    //               </td>
    //             </tr>
    //             <tr style={{'background-color':'grey'}}>
    //               <td>
    //                 <th>TITLE</th>
    //                 {obj.title}
    //               </td>
    //             </tr>
    //             <tr style={{'background-color':'pink'}}>
    //               <td>
    //                 <th>background</th>
    //                 {obj.background}
    //               </td>
    //             </tr>



    //           </table>
    //         </div>
    //         // <p key={i}>
    //         // {obj.quote} 
    //         // {obj.author}
    //         // {obj.length}
    //         // </p>
    //       )

    //     })}
    //   </div>
    // </div>

