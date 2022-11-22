window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounter20221122183757.azurewebsites.net/api/Function1?code=wP2R2IcRoOQl3_Od2xSH9ojMvYQPOOn-7lSk9KDt-XW7AzFurL2NKg==';


const getVisitCount = () => {
    let count = 30;
    
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}