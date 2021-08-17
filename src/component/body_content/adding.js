import books from './books.js'

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

    if(title==='' || subt==='' || author==='' || year==='' || isNaN(price) || desc==='')
    {
        alert("Fields are empty");

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

export default add;