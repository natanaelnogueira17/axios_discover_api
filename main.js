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


// objetos 

const newUser = {
    name:"Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Fortaleza"
}


//chamadas das apis

getUsers()
//addNewUser()
getUser(1)