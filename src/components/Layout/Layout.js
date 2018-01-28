import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDraw from '../Navigation/SideDraw/SideDraw.js'
import classes from './Layout.css'
class Layout extends Component{
    state = {
        showSideDrow: false
    }
    sideDrawClosedHandler = () =>{
        this.setState({showSideDrow: false});
    }
    sideDrawOpenHandler = () => {
        this.setState({showSideDrow: true})
    }

    render(){
        return(
            <Aux>
              <Toolbar opened={this.sideDrawOpenHandler}/>
              <SideDraw
                  open={this.state.showSideDrow}
                  closed={this.sideDrawClosedHandler}/>
              <main className={classes.Content}>
                { this.props.children }
              </main>
            </Aux>
        );
    }
}

export default Layout;
