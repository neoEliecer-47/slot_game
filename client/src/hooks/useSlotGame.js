const useSlotGame = async (endpoint, method = "GET", playerData = null) => {
    const res = await fetch("http://localhost:8000/api/v1" + endpoint, {
        method: method,
        //credentials: true, => this basically for cookies in case there are
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(playerData),
    });

    const data = res.json();
    return data;
};

export default useSlotGame;
