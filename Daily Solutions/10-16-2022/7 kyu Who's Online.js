// 7 kyu Who's Online
const whosOnline = (friends) => {
  const output = {};
  friends.forEach((friend) => {
    if (friend.status === "online") {
      if (friend.lastActivity <= 10) {
        if (!output.online) output.online = [];
        output.online.push(friend.username);
      } else {
        if (!output.away) output.away = [];
        output.away.push(friend.username);
      }
    } else {
      if (!output.offline) output.offline = [];
      output.offline.push(friend.username);
    }
  });
  return output;
};

//optimal solution
/*
const whosOnline = (friends) => {
  let output = {};
  friends.forEach(e => {
      let status = e.status;
      if(status === 'online' && e.lastActivity > 10) status = 'away';
      if(output[status]) {
          output[status].push(e.username);
      }
      else {
          output[status] = [e.username];
      }
  });
  return output;
}
*/
