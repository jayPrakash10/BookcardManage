import books from './books.js'

function change(warn){
    if(warn=='yw'){
        var t = document.getElementById(warn);
        t.style.visibility='hidden'    
    }
    else{
        var t = document.getElementById(warn);
        t.style.display='none'
    }
}
function add(){
    const title=document.getElementById("title").value;
    const subt=document.getElementById("subtitle").value;
    const author=document.getElementById("author").value;
    const year=document.getElementById("year").value;
    const price=parseInt(document.getElementById("price").value);
    const desc=document.getElementById("desc").value;
    const photo=document.getElementById("bookimage").value;

    var ph='books.png';
    if(photo!=''){    
        const ar=photo.split("\\");
        ph=ar[ar.length-1]
    }

    if(title==='' || author==='' || year==='' || isNaN(price) || desc==='')
    {
        if(title==''){
            var t = document.getElementById('tw')
            t.style.display='block'}
        if(author==''){    
            var t = document.getElementById('aw')
            t.style.display='block'}
        if(year==''){
            var t = document.getElementById('yw')
            t.style.display='block'}
        if(isNaN(price)){
            var t = document.getElementById('pw')
            t.style.display='block'}
        if(desc==''){
            var t = document.getElementById('dw')
            t.style.display='block'}
    }
    else{
            const b={
                'id':books[books.length-1].id+1,
                'title':title,
                'subbtitle':subt,
                'price':parseInt(price),
                'author':author,
                'edition':parseInt(year),
                'genre':'',
                'desc':desc,
                'photo':ph
            }
        books.push(b);
        console.log(books);
        document.getElementById("title").value='';
        document.getElementById("subtitle").value='';
        document.getElementById("author").value='';
        document.getElementById("year").value='';
        document.getElementById("price").value='';
        document.getElementById("bookimage").value='';
        document.getElementById("desc").value='';
        var msg = document.getElementById('alert');
        msg.style.display='block';
    }    
}

export {change,add};