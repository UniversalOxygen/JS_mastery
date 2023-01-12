const userName = "Universal Oxygen"

function UserDetails() {
    for (let i = 0; i < 10; i++) {
        console.log(i)
        console.log("This account belongs to " + userName)
    }
    alert("This account belongs to " + userName)
    
}

UserDetails()

const object = { name: "John", age: 20 };

for (const key in object) {
    console.log(key)
}


//if statement
let day = "Monday"
if (day == "Monday") alert("Today is Monday")

let size = 25

if (size == 20) {
    alert("Your size is 20")
    alert("Thank you!")
}


//if-else statement
if (size == 20) {
    alert("Size is available")
    alert("Thank you!")
} else {
    alert("The size is not available")
}