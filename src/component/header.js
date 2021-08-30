import React from "react";
import { Link } from "react-router-dom";

function Header(){

    function myfunction(){
        var op = document.getElementById('options');
        if(op.style.display==='block')
            op.style.display='none';
        else
            op.style.display='block';
    }
    function hide(){
        var op=document.getElementById('options');
        op.style.display='none';
    }
    return(<>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid myNav" id='mynav' style={{justifyContent:'flex-end'}}>
                    <Link className="nav-link" to='/get' style={{color:'rgba(255,255,255,0.55)'}}>Getbooks</Link>
                    <Link className="nav-link" to='/add' style={{color:'rgba(255,255,255,0.55)'}}>Addbooks</Link>
                    <div className='myicon' onClick={myfunction}>
                        <i className="bi bi-chevron-double-down" style={{color:'rgba(255,255,255,0.55)'}}></i>
                    </div>
                </div>
            </nav>
            <div className='options' id='options'>
                <Link className="nav-link" to='/get' style={{color:'rgba(255,255,255,0.55)'}} onClick={hide}>Getbooks</Link>
                <Link className="nav-link" to='/add' style={{color:'rgba(255,255,255,0.55)'}} onClick={hide}>Addbooks</Link>
            </div>

        </>
    );
}

export default Header;