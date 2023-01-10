const userName = "Universal Oxygen"

function UserDetails() {
    for (let i = 0; i < 10; i++) {
        console.log(i)
        console.log("This account belongs to " + userName)
    }
    alert("This account belongs to " + userName)
    
}

UserDetails()