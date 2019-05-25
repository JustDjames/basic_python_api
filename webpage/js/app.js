document.addEventListener('DOMContentLoaded',()=>{
    // declaration of variables
    const url= "http://127.0.0.1:5000/";
    const res = document.getElementById('result');
    const displayBtn = document.getElementById('displaybtn');
    const deleteBtn = document.getElementById('deletebtn');
    const newBtn = document.getElementById('newbtn');
    const allBtn = document.getElementById('allbtn');
    const updateBtn = document.getElementById('updatebtn');
    const userBox = document.getElementById('user');

    displayBtn.addEventListener('click',()=>{
        let user = userBox.value;
        clear(res);
        fetch(url+"user/"+user)
            .then(response => response.json()) 
            .then(data =>{
                    printRes(data);
            })
            .catch(error =>
                console.error(error)
                );
    });

    deleteBtn.addEventListener('click',()=>{
        console.log("delete");
    });
    
    newBtn.addEventListener('click',()=>{
        console.log("new");
    });

    allBtn.addEventListener('click',()=>{
        clear(res);
        fetch(url+"users")
            .then(response => response.json())
            .then(data =>{
                data.forEach(element => {
                    printRes(element);
                });
            })
            .catch(error => 
                console.error(error)
            );
    })

    updateBtn.addEventListener('click',()=>{
        console.log("update");
    });

    function newElement(element){
        return document.createElement(element);
    };

    function append(parent,element){
        return parent.appendChild(element);
    };

    function clear(parent){
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    };

    function printRes(element){
        let name = newElement('p');
        name.innerHTML = "Name: " + element.name;
        append(res,name);
        
        let age = newElement('p');
        age.innerHTML = "Age: " + element.age;
        append(res,age);

        let job = newElement('p');
        job.innerHTML = "Job: " + element.job;
        append(res,job);

        let line = newElement('hr');
        append (res,line);
    };
});