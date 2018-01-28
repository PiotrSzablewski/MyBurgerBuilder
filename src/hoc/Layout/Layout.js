import React, { Component } from 'react';
import Aux from '../Auxi/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDraw from '../../components/Navigation/SideDraw/SideDraw'
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
