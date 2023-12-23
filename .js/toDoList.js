//Create a new list item when clicking on the "Ad.d" button
function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput");
    var t = document.createTextNode(inputValue);

    li.appendChild(t);
    if (inputValue === ''){
        alert("You must write something!");
    } else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
}
//https://www.w3schools.com/howto/howto_js_todolist.asp