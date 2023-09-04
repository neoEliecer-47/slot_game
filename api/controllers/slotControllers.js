export const slotMachine = (req, res) => {
    

    //vamos a tomar un objeto random de cada uno de los array y meterlos en un nuevo array de objetos y devolverlos al frontend como json
    const reels = [
        ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"],
        ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"],
        ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"]
    ]
    
        /*let range = Math.floor(Math.random()*Reel1.length);
        let value = Reel1[range]*/

       

       

       const coinCombos = [
        ["cherry", "cherry", "cherry", 50],
        ["cherry", "cherry", 40],
        ["apple", "apple", "apple", 20],
        ["apple", "apple", 10],
        ["banana", "banana", "banana", 15],
        ["banana", "banana", 5],
        ["lemon", "lemon", "lemon", 3],
       ]

       var results = []
       
       for(let i = 0; i <= 2; i++){
        let range = Math.floor(Math.random()*reels[i]?.length);
        
        let value = reels[i][range]//no es rango
        results.push(value)
       }

       const winnerCoins = (results) => {
           for (const combo of coinCombos){
            const [a, b, c, d] = combo
            //console.log(a)
        /*    if(results[0] === a && results[1] === b && results[2] === c){
                console.log('entro priimero')
                console.log(d)
                return 
                
            }
            if((results[0] === a && results[0] !== "lemon") && results[1] === b && results[2] !== results[1]){//el null nose dara ahi!!
                console.log('entro segundo')
                console.log(results)
                console.log(d)
                return 
            }*/ 
            if(results[0] === a && results[1] === b){
                if(results[0] === "lemon" && results[1] === "lemon" && results[2] !== "lemon") return
                if(results[2] === c) return d
                if((results[0] === results[1]) && results[2] !== results[1]) {
                    if(c === "banana") return 5
                    if(c === "apple") return 10
                    if(c === "cherry") return 40
                }
            }
            
            //return 0
        }
       }
       
       

       const coins = winnerCoins(results)
       if(coins){
        res.status(200).json({results, coins: coins})
       }else{
        res.status(200).json({results, coins: 0})
       }
       
       
    }


    export const playerAndSlotGame = (req, res) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:5173/")
        try {
            const  player  = req.body.player
            console.log(player)
            console.log('entro aqui')
           // res.status(200).json(player)
        } catch (error) {
            console.log(error)
        }
    }

