
//Teams Leagues 1 
 //https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4334
 
//TEAM DETAILS 
// https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604

//TEAM Player
// https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=133604

export function getAllteamsFromApi() {
  const url = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4334'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}


export function getAllTeamPlayersFromApi (id) {
  return fetch('https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=' + id)
  .then((response) => response.json())
  .catch((error) => console.error(error));
}

export function getTeamDetailsFromApi (id) {
  return fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + id)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
