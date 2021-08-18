function myfun(val){
    console.log(val.value);
    var bid = "editmod"+val.value;
    var m = document.getElementById(bid);
    m.style.display='block';
}

function myfun2(val){
    const id='showmod'+val.id;
    var m = document.getElementById(id);
    m.style.display='block';
}

function closebtn(val){
    var m = document.getElementById(val);
    m.style.display='none';
}
window.onclick=function(event){
    if(event.target.className=='modal'){
        var modal = document.getElementById(event.target.id);
        modal.style.display='none';
    }
}
export {myfun,myfun2,closebtn}