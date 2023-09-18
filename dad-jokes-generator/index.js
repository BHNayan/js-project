const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");

const apikey="P3zAH9D1sRmZgU6z2dV1Yg==K2QJ0D8Ppug752Q0";
const apiurl="https://api.api-ninjas.com/v1/jokes?limit=1";

const options={
    
    method:"GET",
    headers:{
        "X-Api-Key": apikey,
    }
    
};
async function getJoke() {
    try {
      jokeEl.innerText = "Updating...";
      btnEl.disabled = true;
      btnEl.innerText = "Loading...";
      const response = await fetch(apiurl, options);
      const data = await response.json();
  
      btnEl.disabled = false;
      btnEl.innerText = "Tell me a joke";
  
      jokeEl.innerText = data[0].joke;
    } catch (error) {
      jokeEl.innerText = "An error happened, try again later";
      btnEl.disabled = false;
      btnEl.innerText = "Tell me a joke";
      console.log(error);
    }
  }
  
  btnEl.addEventListener("click", getJoke);
