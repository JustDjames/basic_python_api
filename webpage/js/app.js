document.addEventListener('DOMContentLoaded',()=>{
    console.log("working")
    // declaration of variables
    const url= "http://127.0.0.1:5000/";
    const res = document.getElementById('result');
    const displayBtn = document.getElementById('displaybtn');
    const deleteBtn = document.getElementById('deletebtn');
    const newBtn = document.getElementById('newbtn');
    const allBtn = document.getElementById('allbtn');
    const updateBtn = document.getElementById('updatebtn');

    displayBtn.addEventListener('click',()=>{
        console.log("display");
    });

    deleteBtn.addEventListener('click',()=>{
        console.log("delete");
    });
    
    newBtn.addEventListener('click',()=>{
        console.log("new");
    });

    allBtn.addEventListener('click',()=>{
        console.log("all");
        
        fetch(url+"users",{
        })
            .then(response => response.json())
            .then(data =>{
                console.log(data)
            })
            // .then(function(data){
            //     let user = data.results;
            //     return user.map(function(user){
            //         let para = newElement('p');
            //         append(res,para);
            //     })
            // })
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
});