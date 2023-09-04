const useSlotGame = (endpoint, method = "GET", player = null) => {
    fetch("http://localhost:8080/api/v1" + endpoint, {
        method: method,
        
        headers: {
            "Content-Type": "application/json",
           
        },
        body: JSON.stringify(player),
    })
        .then((res) => res.json())
        .then((data) => {return data})
        .catch((e) => console.log(e))

    
};

export default useSlotGame;