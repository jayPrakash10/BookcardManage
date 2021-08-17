import React from 'react';
import add from './adding.js';
function Addbooks(){
    return(
        <div className="container">
            <div style={{margin:"20px", fontSize:"30px" }}><strong>Adding Books</strong></div>
            
            <div className="alert alert-success" style={{display:'none'}} role="alert" id="alert">
                <strong>Book added Successfully</strong>.
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Title</span>
                </div>
                <input type="text" className="form-control" id="title" style={{marginLeft:"5px"}}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Sub-Title</span>
                </div>
                <input type="text" className="form-control" id="subtitle" style={{marginLeft:"5px"}}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Author</span>
                </div>
                <input type="text" className="form-control" id="author" style={{marginLeft:"5px"}}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Year</span>
                </div>
                <input type="text" className="form-control" id="year" style={{marginLeft:"5px"}}/>
                <div className="input-group-prepend">
                    <span className="input-group-text" style={{marginLeft:"10px"}}>Price (Rs.)</span>
                </div>
                <input type="text" className="form-control" id="price" style={{marginLeft:"5px"}}/>
            </div>
            {/* <div style={{float:'left'}}>
                Genre
                <div class="input-group mb-3">
                    <div class="input-group-text" style={{padding:"5px"}}>
                        <input class="form-check-input mt-0" id="action" type="checkbox" value="action" aria-label="Checkbox for following text input"/>
                    </div>
                    <label for="action" style={{margin:"0 20px 0 5px"}}> Action</label>
                    <div class="input-group-text" style={{padding:"5px"}}>
                        <input class="form-check-input mt-0" id="sci-fi" type="checkbox" value="sci-fi" aria-label="Checkbox for following text input"/>
                    </div>
                    <label for="sci-fi" style={{margin:"0 20px 0 5px"}}> Sci-Fi</label>
                    <div class="input-group-text" style={{padding:"5px"}}>
                        <input class="form-check-input mt-0" id="romantic" type="checkbox" value="romantic" aria-label="Checkbox for following text input"/>
                    </div>
                    <label for="romantic" style={{margin:"0 20px 0 5px"}}> Romantic</label>
                    <div class="input-group-text" style={{padding:"5px"}}>
                        <input class="form-check-input mt-0" id="thriller" type="checkbox" value="thriller" aria-label="Checkbox for following text input"/>
                    </div>
                    <label for="thriller" style={{margin:"0 20px 0 5px"}}> Thriller</label>
                    <div class="input-group-text" style={{padding:"5px"}}>
                        <input class="form-check-input mt-0" id="drama" type="checkbox" value="drama" aria-label="Checkbox for following text input"/>
                    </div>
                    <label for="drama" style={{margin:"0 20px 0 5px"}}> Drama</label>
                </div>
            </div>
             */}
            <div class="input-group mb-3">
                <div class="">
                    <input type="file" id="bookimage" accept="image/*"/>
                </div>
            </div>

            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Summary</span>
                </div>
                <textarea className="form-control"  id="desc" style={{marginLeft:"5px",height:"200px"}}></textarea>
            </div>
            <button type="button" class="btn btn-primary btn-lg"style={{marginTop:"50px"}} onClick={add}>Add</button>
        </div>
    )
}

export default Addbooks;