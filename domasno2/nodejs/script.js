let players = [{
            id: 1,
            name: "Lionel Messi",
            sport: "Football",
            age: 35
        },
        {
            id: 2,
            name: "Le Bron James",
            sport: "Basketball",
            age: 37
        },
        {
            id: 3,
            name: "Novak Djokovic",
            sport: "Tennis",
            age: 34
        },
        {
            id: 4,
            name: "Conor McGregor",
            sport: "MMA",
            age: 33
        },
        {
            id: 5,
            name: "Michael Phelps",
            sport: "Swimming",
            age: 37
        }
    ]
    //Create
const addNewPlayer = async(newPlayerInfo) => {
        const NewPlayer = {
            id: players.length + 1,
            name: newPlayerInfo.name,
            sport: newPlayerInfo.sport,
            age: newPlayerInfo.age
        }
        players.push(NewPlayer);
    }
    //Update
const UpdatePlayer = async(argumentId, newInfoForPlayer) => {
    players = players.map((player) => {
        if (player.id === argumentId) {
            return {
                id: player.id,
                name: newInfoForPlayer.name,
                sport: newInfoForPlayer.sport,
                age: newInfoForPlayer.age
            }
        } else {
            return player;
        }
    })
}















const getAllPlayers = async() => {
    return players;

}
module.exports = {
    getAllPlayers,
    addNewPlayer,
    UpdatePlayer
};