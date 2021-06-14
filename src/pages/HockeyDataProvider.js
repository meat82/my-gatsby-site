import sportDB from "thesportsdb";

let exports = {};

export let getNHLTeams = async function () {
    sportDB.setApiKey(1);
    return await sportDB.getTeamsByLeagueName("NHL");
};

export default exports = {
  getNHLTeams,
};
