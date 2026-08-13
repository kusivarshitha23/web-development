

var users=[
    {
        "name":"john doe",
        "gender":"male",
        "image":"john.png"
    },
    {
        "name":"jane doe",
        "gender":"female",
        "image":"",
    }
]

var curId = 0;

function toggleUser(){
    curId = (curId+1)% 2;

    var userName= document.getElementById("user-name");
    var userGender=document.getElementById("user-gender");
    var userImage=document.getElementById("user-Image");

    userName.innerHTML = users[curId].name;
    userGender.innerHTML = users[curId].gender;
    userImage.src=user[curId].image;

}