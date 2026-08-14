const express = require ('express');
const app = express();
const port= process.env.PORT || 8081;

app.use(express.static("frontend"));

app.use(express.json());

var users = [
    {
        "id": 1,
        "name" : "Neysa",
        "gender" : "female",
        "image" : "https://randomuser.me/api/portraits/med/women/36.jpg", 
    },
    {
        "id" : 2,
        "name" : "Hans-Joachim",
        "gender" : "male",
        "image" : "https://randomuser.me/api/portraits/men/80.jpg",
        
    },
    {
        "id" : 3,
        "name" : "Marino",
        "gender" :  "male",
        "image" : "https://randomuser.me/api/portraits/men/36.jpg",

    },
    {
        "id" : 4,
        "name" : "Pivoniya",
        "gender" : "female",
        "image" : "https://randomuser.me/api/portraits/women/74.jpg",

    },
    {
        "id" : 5,
        "name" : "Ralph",
        "gender" : "male",
        "image" : "https://randomuser.me/api/portraits/men/48.jpg",

    },
    {
        "id" : 6,
        "name" :  "Ethel",
        "gender" : "female",
        "image" : "https://randomuser.me/api/portraits/women/76.jpg",
    },
    {
        "id" : 7,
        "name" : "Damir", 
        "gender" :"male",
        "image" :"https://randomuser.me/api/portraits/men/87.jpg",
    },
    {
        "id" : 8,
        "name" : "Robine",
        "gender" :"female",
        "image" :  "https://randomuser.me/api/portraits/women/96.jpg",
    },
    {
        "id" : 9,
        "name" :"Eliab",
        "gender" :"male",
        "image" :"https://randomuser.me/api/portraits/men/64.jpg",
    },
    {
        "id" : 10,
        "name" : "فاطمه",
        "gender" :"female",
        "image" :"https://randomuser.me/api/portraits/women/58.jpg",
    }
]
var nextid = 11;

app.get("/api/users", function(req, res){
    return res.json(users);
});

function findIndex(id){
    for(var i=0; i<users.length; i++){
        if(id ===users[i].id){
            return i;
        }
    }
    return -1;
}

app.get("/api/users/:id", function(req,res){
    return res.json(users);
})

app.get("/api/users/:id", function(req , res){
    var id = Number(req.params.id);
    var index = findindex(id);

    if(index ===-1){
        return res.status(404).json({"message":"User not found with id :"+id});
    }
    var user = users[index];
    return res.json(user);
});

app.get("/api/random-user", function(req, res){
    if(users.length ===0){
        res.status(404).json({"message": "No user found"});
    }
    var randomIndex=Math.floor(users.length*Math.random());
    return res.json(users[randomIndex]);
})

app.post("/api/users", function(req, res){
    var newUser = req.body;
    var tempUser = {
        "id" : nextid,
        "name" : newUser.name,
        "gender" : newUser.gender,
        "image" : newUser.image
    };
    nextid= nextid + 1;
    users.push(tempUser);
    res.status(201).json({"message": "user created successfully",
        "user": tempUser
    });
})


app.listen(port, function(){
    console.log("server running on http://localhost:"+port);
});