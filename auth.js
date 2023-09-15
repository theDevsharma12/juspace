let login=document.getElementById("login")
login.addEventListener("click",async (e)=>{
    e.preventDefault()
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const response = await fetch(
        "https://juspace.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
  
      const result = await response.json();
      console.log(result)
      localStorage.setItem("token",result.token)
      
      window.location.href="/"
    //juspace/juspace.tech
})


