document.getElementById('loginbtn').addEventListener('click', (e) => {

    e.preventDefault()
   
    const User_email = document.getElementById('email').value
    const User_password = document.getElementById('password').value
   
    console.log(user_email);
    console.log(user_password);
    // user = {
    //     fname: null,
    //     lname: null,
    //     contact: null,
    //     email: user_email,
    //     password: user_password
    // }
    // console.log(user);
   

    const xhr = new XMLHttpRequest()
    url = `http://localhost:8082/users`
    xhr.open('GET', url)
    xhr.setRequestHeader('Access-Control-Allow-Origin','*')
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
           res=JSON.parse(xhr.responseText)
           console.log(res);
           for (let i = 0; i < res.length; i++)
           {
                if (res[i].email==User_email && res[i].password==User_password)
                {
                   document.getElementById('message').innerHTML="Login Sucessfully"
                //    window.location='home.html'                    
                }
                if (res[i].email!=User_email && res[i].password!=User_password)
                {
                   document.getElementById('message').innerHTML="Invaild username and password"

                }

           
           }

        }
    }
 
    xhr.send()
    
})