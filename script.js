console.log("testing");
function getStates() {
    return fetch('states.json')
    .then(response => response.json())
}
let test;
getStates().then(states => {
    for (let i = 0; i < states.states.length; i++) {
        const stateArr = states.states;
        const halfArrNum = Math.ceil(stateArr.length / 2)
        // console.log(halfArrNum);
        const halfArr = stateArr.slice(0, halfArrNum);
        // console.log(halfArr);
        const stateDetails = halfArr[i];
        const stateName = halfArr[i].name;
        // console.log(stateName);
        delete stateDetails.name;
        // console.log(test);
        myStringDetails = JSON.stringify(stateDetails);
        console.log(stateName, myStringDetails)
        localStorage.setItem(stateName, myStringDetails);
    }
})
