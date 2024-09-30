const userName = 'Harry';
//userName = 'Ron';
//console.log(userName);

let age = 11;

/*
if(age < 11) {
    console.log(`${userName}, you are too young Harry.`);
}
else if (age < 11) {
    console.log(`You are too old ${userName}.`);
}
else {
    console.log(`You are wizard ${userName}!`)
}
*/

const isWizard = true;
/*
if (userName === 'Harry' && age === 11 && isWizard) {
    console.log(`${userName}, here is the mythical letter!`);
}
else {
    console.log(`Welp, you ain´t a wizard ${userName}..`);
}
--------------------
if(userName !== 'Harry' || age !== 11 || !isWizard) {
    console.log(`Welp, you ain´t a wizard ${userName}..`)
}
else {
    console.log(`${userName}, here is the mythical letter!`)
}
---------------------
for(let i = 0; i < 5; i++) {
    console.log(`${i+1} What a wonderful day to be a wizard!`)
}
---------------------
*/
let friends = ['Ron', 'Hermione', 'Hedwig'];

friends.push('Draco');

let numberOfFriends = friends.length;

console.log(`${userName} has ${numberOfFriends} friends, named:`)
for (let i = 0; i < friends.length; i++) {
    if(friends[i] === 'Draco') {
        weArentFriends(friends[i]);
        continue;
    }
    friends[i] = friends[i] + '*';
    greeting(friends[i]);
    //console.log(`${i+1}. ${friends[i]}`);
}

friends.forEach(friend => {
    console.log(friend);
});


function greeting(friendsName) {
    console.log(`Hello, ${friendsName}!`);
}

function weArentFriends(notFriendsName) {
    console.log(`WE AINT FRIENDS, ${notFriendsName}!`);
}