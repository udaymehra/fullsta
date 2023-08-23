document.getElementById('btn').addEventListener ('click',(e)=> {
    e.preventDefault()
    // console.log("click")
    
    const User_name =document.getElementById('name').value
    const User_email=document.getElementById('email').value
    const User_password=document.getElementById('Password').value
    const User_dob=document.getElementById('dob').value

    const user={
     name: User_name,
     email: User_email,
     password: User_password,
     dob: User_dob
    }

    const url=`http://localhost:8082/users`
    const xhr=new XMLHttpRequest()
    xhr.open('POST',url)
    xhr.setRequestHeader('Access-Control-Allow-Origin','http://localhost:8082/users')

    xhr.setRequestHeader('Content-Type','application/json')
    xhr.onreadystatechange = () => {
       if (xhr.status==200 && xhr.readyState==4) {
        let data =xhr.responseText
        console.log(user);
       }
    }


    xhr.send(JSON.stringify(user));
})