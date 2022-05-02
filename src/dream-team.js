const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = '';
  let arr = [];

  if (members === undefined || members === null || members.length === undefined) {
    return false;
  }

  members.forEach(member => {
    if (typeof (member) === 'string') {
      arr.push(member.toUpperCase().trim());
    }
  });

  let sortArr = arr.sort();

  sortArr.forEach(member => {
    teamName += member[0];
  })

  return teamName;
}

module.exports = {
  createDreamTeam
};
