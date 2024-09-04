let table_body;
let allData;
let Index = 1;
let tableclass = ["table-primary" , "table-secondary" , "table-success" , "table-danger" , "table-warning" , "table-info" , "table-light" , "table-dark"];

document.addEventListener("DOMContentLoaded" , () => {
    allData = {};
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let value = localStorage.getItem(key);
                allData[key] = value;
            }
            let onjKeyLength = Math.max(...Object.keys(allData).map(Number))
            if(onjKeyLength > 0){
                Object.entries(allData).forEach(([key , value]) => {
                    let [inputName, inputData] = value.split('?');
                    createTh(key , inputData , inputName)
                });
                Index = (Math.max(...Object.keys(allData).map(Number))) + 1;
            }
            
})

function setList(){
    let inputName = document.getElementById('nametext').value;
    let inputTaskData = document.getElementById('todotext').value;
    createTableElement(Index , inputTaskData , inputName)
}

let createTableElement = async (Index , inputTaskData , inputName) => {
   let response = await createTh(Index , inputTaskData , inputName)
   let pattern = /^Success.*\d$/;
   if(pattern.test(response)){
    localStorage.setItem((response.match(/\d+$/))[0] ,inputName + "?" + inputTaskData)
    location.reload();
   }
}




let createTh = async(Index , inputData , inputName) => {
    return new Promise((resolve, reject) => {
        try{
            table_body = document.getElementById("table_body");
            let tableRow = document.createElement('tr');
            let tableH = document.createElement('th');
            let tableD = document.createElement('td');
            let tableD1 = document.createElement('td');
            let tableD2 = document.createElement('td');
            tableH.innerText = Index;
            tableD.innerText = inputName
            tableD1.innerText = inputData
            tableD2.innerHTML = `<button type="button" onclick="updateTask(${Index})" style="margin-right:5px" class="btn btn-primary">Edit</button><button type="button" onclick="deleteTask(${Index})" class="btn btn-danger">Delete</button>`;
            tableRow.appendChild(tableH)
            tableRow.appendChild(tableD)
            tableRow.appendChild(tableD1)
            tableRow.appendChild(tableD2)
            table_body.appendChild(tableRow)
            Index++;
            resolve("Success for id " + --Index)
            I
        }catch(err){
            reject("Failure")
        }
        
    })
}

updateTask = (Index) => {
    if (!isNaN(Index)) {
        let data = localStorage.getItem(Index.toString());
        let [inputName, inputData] = data.split('?');
        document.getElementById('nametext').value = inputName;
        document.getElementById('todotext').value = inputData;
        var addButton = document.getElementById('addListButton');
        addButton.textContent = 'Update List';
        addButton.setAttribute('onclick', `updateList(${Index})`);
        // updateLocalTask(Index)
    }
}

updateList = (Index) => {
    inputName = document.getElementById('nametext').value;
    inputTaskData = document.getElementById('todotext').value;
    localStorage.setItem(Index , inputName + "?" + inputTaskData)
    location.reload()
}

deleteTask= (Index) => {
    if (!isNaN(Index)) {
        localStorage.removeItem(Index.toString())
        location.reload()
    }
}

// import exportedFunctions from './Utility/component'; // Replace './filename.js' with the correct path to your file
//
// // Usage example:
// console.log(exportedFunctions.Data()); // Outputs: "Export Data"
// console.log(exportedFunctions.fullName("John"));


