    createTh = async(Index , inputData , inputName) => {
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


    const Data = () => {
        return "Export Data";
    }
    
    
    const fullName = (name) => {
        return 'My name is ${name}'
    }
    
    export default {Data , fullName}

