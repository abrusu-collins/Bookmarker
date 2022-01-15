let adder=document.getElementById("adder");
let allwebsites=document.getElementById("allwebsites");
let body=document.getElementById("body");

adder.addEventListener("click",addthem,true);

body.addEventListener("load",fetch,true);
function addthem(e){
    e.preventDefault();
    
    let websiteName=document.getElementById("websiteName").value;
    let websiteURL=document.getElementById("websiteURL").value;
    let regex=/^(https\:\/\/www\.)|^(www\.)|^(https\:\/\/)/
    let tested=regex.test(websiteURL)
    if(websiteName==""||websiteURL==""){
        alert("Fill all the inputs")
    }
    else if(!tested){
        alert(`URL not valid
        Use this format https://www.XXXXXXXXX.com`)
    }
    else{
    let websites={
        "websiteName":websiteName,
        "websiteURl":websiteURL
    }


    let div=document.createElement("div")
    div.setAttribute("id","website");
    div.setAttribute("class","mt-4");
    div.innerHTML   =` <p>${websiteName}</p>
    <div id="controls">
        <a  href="${websiteURL}" target="blank" class="btn btn-outline-primary btn-sm mb-4">Visit</a>
        <button type="button" class="btn btn-outline-danger btn-sm " id="delete">Delete</button>
    `
    
    allwebsites.appendChild(div);




    let bookmarksArray=JSON.parse(localStorage.getItem("bookmarks"));

     if(bookmarksArray===null){
        let bookmarksArray=[];
        bookmarksArray.push(websites); 
        let bookmarks=localStorage.setItem("bookmarks",JSON.stringify(bookmarksArray));
       

    } else{
        bookmarksArray.push(websites);
        let bookmarks=localStorage.setItem("bookmarks",JSON.stringify(bookmarksArray));
        
    }
 

    

 
      

}

}


function fetch(){
    let booksat=JSON.parse(localStorage.getItem("bookmarks"));

    //almighty for loop bro
    for(var i=0;i<=booksat.length-1;i++){
        let div=document.createElement("div")
        div.setAttribute("id","website");
        div.setAttribute("class","mt-4");
        div.innerHTML   =` <p>${booksat[i].websiteName}</p>
        <div id="controls">
            <a  href="${booksat[i].websiteURl}" target="blank" class="btn btn-outline-primary btn-sm mb-4">Visit</a>
            <button type="button" class="btn btn-outline-danger btn-sm " id="delete">Delete</button>
        `
        
        allwebsites.appendChild(div);
             }
}


allwebsites.addEventListener("click",deleted,true);

function deleted(e){
    
    if(e.target==e.currentTarget){
        e.stopPropagation()
    }
    else{
if(e.target.id=="delete"){
    e.preventDefault();
e.target.parentElement.parentElement.remove();
let URL=e.target.parentElement.firstElementChild.getAttribute("href");

let booksat=JSON.parse(localStorage.getItem("bookmarks"));
for(var i=0;i<=booksat.length-1;i++){

    if(booksat[i].websiteURl==URL){
        booksat.splice(i,1);
    }
    let bookmarks=localStorage.setItem("bookmarks",JSON.stringify(booksat));

}


    }else{}
    }}





   