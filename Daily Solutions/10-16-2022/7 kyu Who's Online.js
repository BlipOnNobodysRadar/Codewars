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
