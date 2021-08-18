import React from 'react';
import books from './books.js';
import {closebtn} from '../../js/modal.js';

function ShowBookmodal(props){
    var id=props.ids;
    var i=props.index
    var bid="showmod"+id;

    const clsbtn = React.createElement('button',{className:'btn close', value:bid, onClick:(e)=>{closebtn(e.target.value)}},"x");
    const header = React.createElement('div',{className:'modalheader'}, [clsbtn]);
    const photo= React.createElement('img',{className:'mcard-img', src:books[i].photo})
    const titleinput=React.createElement('h1',{className:"", style:{marginLeft:'5px'}},books[i].title);
    const title = React.createElement('div',{className:'input-group'},[titleinput])
    const subtitleinput=React.createElement('h5',{className:"", style:{marginLeft:'5px'}},books[i].subbtitle);
    const subtitle=React.createElement('div',{className:'input-group'},[subtitleinput]);
    const authorinput=React.createElement('p',{className:"", style:{marginLeft:'5px'}},'by '+books[i].author);
    const author = React.createElement('div',{className:'input-group'},[authorinput]);
    const descinput=React.createElement('div',{className:"", style:{marginLeft:'5px'}},books[i].desc);
    const desc = React.createElement('div',{className:'input-group'},[descinput])
    
    const body = React.createElement('div',{className:'modalbody'},[photo,title,subtitle,author,desc]);

    const footer = React.createElement('div',{className:'modalfooter'},React.createElement('h2',{},""))
    const  content = React.createElement('div',{className:"modalcontent"},[header,body,footer])
    return(React.createElement('div',{className:'modal', id:bid},[content]))
}

export default ShowBookmodal;