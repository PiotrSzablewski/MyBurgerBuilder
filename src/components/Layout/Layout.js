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
    sideDrawToggelHandler = () => {
        this.setState((prevState)=>{
            return {showSideDrow: !prevState.showSideDrow};
        });
    }

    render(){
        return(
            <Aux>
              <Toolbar opened={this.sideDrawToggelHandler}/>
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
