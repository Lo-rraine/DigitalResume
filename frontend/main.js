window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const loader = document.getElementById('loader');
const errorMsg = document.getElementById('error');
function showLoader(){
    loader.classList.add('show');
}
function hideLoader(){
    loader.classList.remove('show');
}
function errorMessage(){
    errorMsg.classList.add('error');
}


const functionApiUrl = 'https://getresumecounter20221122183757.azurewebsites.net/api/Function1?code=wP2R2IcRoOQl3_Od2xSH9ojMvYQPOOn-7lSk9KDt-XW7AzFurL2NKg==';


const getVisitCount = () => {
    showLoader();

    let count = 30;
    
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
        hideLoader();
    }).catch(function(error){
        console.log(error);
        document.getElementById("counter").innerText = 10;
    });
    return count;
}



