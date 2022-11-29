let users = new Map();
users.set("Посетитель 1", "country A");
users.set("Посетитель 2", "country B");
users.set("Посетитель 3", "country A");
users.set("Посетитель 4", "country B");
users.set("Посетитель 5", "country A");
users.set("Посетитель 6", "country C");
users.set("Посетитель 7", "country A");

for (let user of users.keys()){
    console.log(user + " из " + users.get(user));
}
