const url = "http://localhost:5501/api"
//GET ALL
function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.log(error))
}

// POST
function addNewUser(){
    axios.post(url, newUser)
    .then(response=>console.log(response))
    .catch(error => console.log(error))
}

//GET for ID
function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response =>{
        const data = response.data
        userID.textContent = data.id,
        userName.textContent = data.name,
        userCity.textContent = data.city,
        userAvatar.src = data.avatar
    })
    .catch(error => console.log(error))
}

//update
function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

//Delete
function deleteUser(id){
    axios.put(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

// objetos 
const newUser = {
    name:"Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Fortaleza"
}

const userUpdated = {
    name :"Janaina ",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}

//chamadas das apis
deleteUser(4)
getUsers()
//addNewUser()
getUser(1)
//updateUser(1, userUpdated)