const players = require('./script')

// players.getAllPlayers()
//     .then((igraci) => {
//         console.log(igraci);
//     })
//     .catch((error) => {
//         console.log(error)
//     });

players.UpdatePlayer(2, { name: "Kire Lazarov", sport: "handball", age: 118 })
    .then(() => {
        return players.getAllPlayers()
    })
    .then((igraci) => {
        console.log(igraci)
    })
    .catch((err) => {
        console.log(err)
    })

players
    .addNewPlayer({
        name: "Tuturutka",
        sport: "Bosansko Rvanje",
        age: 19
    })
    .then(() => {
        return players.getAllPlayers();
    })
    .then((igraci) => {
        console.log(igraci);
    })

.catch((err) => {
    console.log(err);
});

players
    .getAllPlayers()
    .then((igraci) => {
        console.log(igraci);
    })
    .catch((greshka) => {
        console.log(greshka)
    });
















































//     //CREATE
// const newPlayer = {
//     id: 6,
//     name: "Usain Bolt",
//     sport: "Track and field",
//     age: 35,
// }
// const newList = players.concat([newPlayer])
//     //     //UPDATE
//     // const playerIndex = 1
//     // const newplayer = {
//     //     id: 2,
//     //     name: "Le Bron James",
//     //     sport: "Basketball",
//     //     age: 37,
//     //     homecountry: "USA"

// // }
// // list[playerIndex] = newItem
// //     //DELETE
// // const playerIndex = 1
// // list.splice(playerIndex, 1)