export let handleLogin = async(payload)=>{
     const url = "http://localhost:5173/?";
 
  try {
    const response = await fetch(url, 
        { method:"POST", 
            headers: { "Content-Type": "application/json", },
        body: JSON.stringify(payload), });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}