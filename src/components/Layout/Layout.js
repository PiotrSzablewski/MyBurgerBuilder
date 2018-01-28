import React from 'react';
import Aux from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDraw from '../Navigation/SideDraw/SideDraw.js'
import classes from './Layout.css'
const layout = ( props ) =>(
  <Aux>
    <Toolbar/>
    <SideDraw/>
    <main className={classes.Content}>
      { props.children }
    </main>
  </Aux>
);

export default layout;
