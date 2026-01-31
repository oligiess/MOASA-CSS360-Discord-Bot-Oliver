export const assignRoles = (playerIds) => {
  const players = [...playerIds];

  // Shuffle players
  players.sort(() => Math.random() - 0.5);

  const roles = new Map();

  roles.set(players[0], "Mafia");
  roles.set(players[1], "Doctor");

  for (let i = 2; i < players.length; i++) {
    roles.set(players[i], "Civilian");
  }

  return roles;
};
