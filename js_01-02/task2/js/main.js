const namesCount = 5;
var names = [];

for (var i = 1; i <= namesCount; i++) {
    names.push(prompt('Enter name #' + i, 'Name ' + i));
}

var user = prompt('Enter User Name', 'User');

for (var i = 0; i < names.length; i++) {
    if ( user === names[i] ) {
        var isLogin = true;
        alert( user + ', вы успешно вошли');
    }    
}

if (!isLogin) {
    alert('Error: User not found');
}

// debug
console.log(names, user);