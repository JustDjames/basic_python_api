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
    const modalTitle = document.getElementById('ModalTitle');

    displayBtn.addEventListener('click',()=>{
        let user
        if(userBox.value){
            user = userBox.value;
            clear(res);
            userBox.value = '';
            fetch(url+"user/"+user)
                .then(response => response.json())
                .then(data =>{
                        printRes(data);
                })
                .catch(error =>{
                    // console.error(error)
                    alert(error)
                })
        }else{
            alert('Please enter a user');
        }
    });

    deleteBtn.addEventListener('click',()=>{
        console.log("delete");
        let user =userBox.value;
        clear(res);
        userBox.value= '';
        fetch(url+"delete/"+user,{
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data =>{
                console.log(data);
            })
    });
    
    newBtn.addEventListener('click',()=>{
        console.log("new");
        $('#UserModal').modal('show');
        modalTitle.innerHTML = 'New User';
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