// function addItem()
// {
// /*var inputs=document.getElementById("input").value;
// var list= document.getElementById("List");
// console.log(inputs);

// var items=document.createElement("li");
// items.innerHTML=inputs;

// // edit button
// var editButton= document.createElement("button");
// editButton.innerHTML="edit";
// items.appendChild("editbutton");


// list.appendChild(items);

// //clearing input
// var a=document.getElementById("input").value="";

// */





















// //getting input
// var value = document.getElementById('input').value;
// var list = document.getElementById('list');

// //creating & adding item
// var create_li = document.createElement('li');
// list.appendChild(create_li);
// create_li.innerHTML = value;
// list.appendChild(create_li);
// li.setAttribute("id".Math.random());

// //Edit button
// var edt_button = document.createElement('button');
// edt_button.innerHTML = "Edit";
// edt_button.setAttribute("onClick","editItem(event)")

// create_li.appendChild(edt_button);

// //Delete button
// var dlt_button = document.createElement('button');
// dlt_button.innerHTML = "Delete";

// dlt_button.setAttribute("onClick","deleteItem(event)")
// create_li.appendChild(dlt_button);

// //Clearing input
// document.getElementById('input').value = "";


// //console.log(value)
// }


// //Delet buttion 
// function deleteItem(event)
// {


// var currentItem=event.target.parentElement;
// currentItem.remove();

// }

// function editItem(event)
// {
// var getupdateButton=document.getElementById("update");
// if(getupdateButton)
// {getupdateButton.remove();



// }
//  var currentItem=event.target.parentElement;
//     var text=currentItem.childNodes[0].textContent;
//     document.getElementById('input').value=text;



//  var updateButton= document.createElement("button");
//  updateButton.setAttribute("id","update");
//  updateButton.setAttribute("onClick,updateItem()")
//  updateButton.innerHTML="Update";
//  var body=document.getElementById("body");
//  var ol= document.getElementById("list");
//  body.insertBefore(updateButton,ol);
// }

// function updateItem(currentItem)
// {
// console.log()



// }
    
// *** Local Storage ***


var emailEl = document.getElementById('email');
var passwordEl = document.getElementById('password');
function signUp(){
    console.log(emailEl.value, passwordEl.value);
    if (localStorage !== null){
        console.log('local storage available');


        localStorage.setItem('email', emailEl.value)
        localStorage.setItem('password', passwordEl.value);
    }
}









function signIn(){
    console.log(emailEl.value, password.value);
    var userEmail = localStorage.getItem('email');
    var userPassword = localStorage.getItem('password');
    if (emailEl.value === userEmail && passwordEl.value === userPassword){
    console.log('User authorized');
    }
    else {
        console.log('User does not exist, you need to to signup.');
    }
}



var emailEl = document.getElementById('email');
var passwordEl = document.getElementById('password');
function signUp(){
    console.log(emailEl.value, passwordEl.value);
    if (localStorage !== null){

    }


}
    var users = [];
    var emailEl = document.getElementById('email');
    var passwordEl = document.getElementById('password');
    function signUp(){
        console.log(emailEl.value, password.value);
    if (localStorage !== null){
        var user = {
            email: emailEl.value,
            password: passwordEl.value
        }
        users.push(user);
        console.log(users)
    }



    