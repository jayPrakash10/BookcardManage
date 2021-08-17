import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Getbooks from '../body_content/getbooks';
import Addbooks from '../body_content/addbooks';

const Nav =()=><div><Switch>
                    <Route path='/get'><Getbooks/></Route>
                    <Route path='/add'><Addbooks/></Route>
               </Switch></div>;

export default Nav;