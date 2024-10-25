// console.log("testing");
function getStates() {
    return fetch('states.json')
    .then(response => response.json())
}

getStates().then(states => {
    for (let i = 0; i < states.states.length; i++) {
        const stateArr = states.states;
        const halfArrNum = Math.ceil(stateArr.length / 2);
        // console.log(halfArrNum);
        const halfArr = stateArr.slice(0, halfArrNum);
        const secondHalfArr = stateArr.slice(halfArrNum)
        // console.log(secondHalfArr);
        // console.log(halfArr);
        const stateDetails = halfArr[i];
        const stateName = halfArr[i].name;
        const stateNameString = JSON.stringify(stateName);
        // console.log(stateNameString);
        delete stateDetails.name;
        myStringDetails = JSON.stringify(stateDetails);
        // console.log(stateNameString, myStringDetails)
        localStorage.setItem(stateNameString, myStringDetails);
        const stateDetails2 = secondHalfArr[i];
        const capitalName = secondHalfArr[i].capital;
        // console.log(capitalName);
        delete stateDetails2.capital;
        // console.log(stateDetails2);
        myStringDetails2 = JSON.stringify(stateDetails2);
        myLowerCaseString = myStringDetails2.toLowerCase();
        myCapitalNameString = JSON.stringify(capitalName);
        // console.log(myCapitalNameString);
        myLowerCaseCapital = myCapitalNameString.toLowerCase();
        console.log(myLowerCaseCapital, myLowerCaseString);
        sessionStorage.setItem(myLowerCaseCapital, myLowerCaseString);
    }
})
