import React from 'react';
import {change,add} from './adding.js';
function Addbooks(){
    return(
        <div className="container">
            <div style={{margin:"20px", fontSize:"30px" }}><strong>Adding Books</strong></div>
            
            <div className="alert alert-success" style={{display:'none'}} role="alert" id="alert">
                <strong>Book added Successfully</strong>.
            </div>
            <div className='warning' id='tw'>* Field is required</div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Title</span>
                </div>
                <input type="text" className="form-control" id="title" style={{marginLeft:"5px"}} onChange={()=>change('tw')}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Sub-Title</span>
                </div>
                <input type="text" className="form-control" id="subtitle" style={{marginLeft:"5px"}}/>
            </div>
            <div className='warning' id='aw'>* Field is required</div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Author</span>
                </div>
                <input type="text" className="form-control" id="author" style={{marginLeft:"5px"}} onChange={()=>change('aw')}/>
            </div>
            <div className='warning' id='yw' style={{width:'48.5%'}}>* Field is required</div>            
            <div className='warning' id='pw'>* Field is required</div>            
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Year</span>
                </div>
                <input type="text" className="form-control" id="year" style={{marginLeft:"5px"}} onChange={()=>change('yw')}/>
                <div className="input-group-prepend">
                    <span className="input-group-text" style={{marginLeft:"10px"}}>Price (Rs.)</span>
                </div>
                <input type="text" className="form-control" id="price" style={{marginLeft:"5px"}} onChange={()=>change('pw')}/>
            </div>
            <div class="input-group mb-3">
                <div class="">
                    <input type="file" id="bookimage" accept="image/*"/>
                </div>
            </div>

            <div className='warning' id='dw'>* Field is required</div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Summary</span>
                </div>
                <textarea className="form-control"  id="desc" style={{marginLeft:"5px",height:"200px"}} onChange={()=>change('dw')}></textarea>
            </div>
            <button type="button" class="btn btn-primary btn-lg"style={{marginTop:"50px"}} onClick={add}>Add</button>
        </div>
    )
}

export default Addbooks;