// console.log("testing");
function getStates() {
    return fetch('states.json')
    .then(response => response.json())
}

getStates().then(states => {
    for (let i = 0; i < states.states.length; i++) {
        const stateArr = states.states;
        // get number for half
        const halfArrNum = Math.ceil(stateArr.length / 2);
        // console.log(halfArrNum);
        // slice method starting at 0 to half the array - task 1
        const halfArr = stateArr.slice(0, halfArrNum);
        // slice method start at end of first half of array - task 2
        const secondHalfArr = stateArr.slice(halfArrNum)
        // console.log(secondHalfArr);
        // console.log(halfArr);
        // array var for first half of array - task 1
        const stateDetails = halfArr[i];
        // array var for the state name only and stringify - task 1
        const stateName = halfArr[i].name;
        const stateNameString = JSON.stringify(stateName);
        // var for converting state name into upper case - stretch goal
        const myUpperCaseState = stateNameString.toUpperCase();
        // console.log(stateNameString);
        // remove state name from first array half and stringify results - task 1
        delete stateDetails.name;
        myStringDetails = JSON.stringify(stateDetails);
        // var for converting to string details to uppercase - stretch goal
        const myUpperCaseDetails = myStringDetails.toUpperCase();
        // console.log(myUpperCaseState, myUpperCaseDetails)
        // add uppercase to local storage and remove previous set - stretch goal
        localStorage.setItem(myUpperCaseState, myUpperCaseDetails);
        localStorage.removeItem(stateName);
        // var for 2nd half array - task 2
        const stateDetails2 = secondHalfArr[i];
        // var for 2nd array capital and deletion from array - task 2
        const capitalName = secondHalfArr[i].capital;
        // console.log(capitalName);
        delete stateDetails2.capital;
        // console.log(stateDetails2);
        // stringify 2nd array details and capital key, the convert to lower case- task 2
        myStringDetails2 = JSON.stringify(stateDetails2);
        myLowerCaseString = myStringDetails2.toLowerCase();
        myCapitalNameString = JSON.stringify(capitalName);
        // console.log(myCapitalNameString);
        myLowerCaseCapital = myCapitalNameString.toLowerCase();
        // console.log(myLowerCaseCapital, myLowerCaseString);
        // save capital and 2nd array details to session storage - task 2
        sessionStorage.setItem(myLowerCaseCapital, myLowerCaseString);
    }
})
