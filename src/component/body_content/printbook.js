import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import books from './books.js';
import ShowBookmodal from './showmodal.js';
import {myfun2} from '../../js/modal.js';

function Printbook(){
    var cards=[];
    var showmodal=[];
    var [book, delbook]=useState(books);
    let l=books.length;

    function delbooks(th){
        book=books.filter(e=> e.id!=th)
        delbook(book)
        for(let i=0;i<l;i++){
            books.pop();
        }

        for(let i=0;i<book.length;i++){
            books.push(book[i]);
        }
    }

    for(var i=0; i<books.length;i++){
        
        const cardtitle = React.createElement('h5',{className:'card-title', title:books[i].title, id:book[i].id, onClick:(e)=>{myfun2(e.target)}},books[i].title);
        const cardauthor = React.createElement('p',{className:'bcard-author'},"by "+book[i].author);
        const price = React.createElement('p',{},'Rs '+book[i].price);
        const cardtext= React.createElement('div',{className:'bcard-text'},[cardtitle,cardauthor,price])

        const del = React.createElement(Button,{className:'btn btn-danger',value:book[i].id, onClick:(e)=>{delbooks(e.target.value)}},"Delete");
        const btn = React.createElement('div',{className:'bcard-button'},[del]);

        const cardbody = React.createElement('div',{className:'bcard-body flip-card-back'},[cardtext,btn]);
        const img = React.createElement('img',{className:'bcard-img flip-card-front', src:book[i].photo, alt:'Card image'});
        const card = React.createElement('div',{className:'flip-card'},[img,cardbody]);
        showmodal.push(<ShowBookmodal ids={book[i].id} index={i}/>);

        cards.push(React.createElement('div',{className:'bcard'},[card]));
        
    }
    const cardgroup = React.createElement('div',{className:'card-group'},[cards,showmodal])
    if(books.length==0)
        return(<div className='cardgroup'><strong>No Records</strong></div>)
    return(React.createElement('div',{},cardgroup));
}

export default Printbook;
