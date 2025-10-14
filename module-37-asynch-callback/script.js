function userData(callback){
    console.log('User data loading...');
    
    setTimeout(() => {
        const user = {name: "Rifaa", age: 20};
        callback(null, user);
    }, 3000);
}

function displayUser(error, user){
    console.log(`Hello ${user.name}, you are ${user.age} years old`);
}

userData(displayUser);