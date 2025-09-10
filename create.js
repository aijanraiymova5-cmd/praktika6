// CRUD 
// C = create POST 
// R = read GET 
// U = update PUT 
// D = delete DELETE 

let input1 = document.getElementById("input-1")
let input2 = document.getElementById("input-2")
let input3 = document.getElementById("input-3")
let sendBtn = document.getElementById("send") 

let API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/list";

async function createProduct() {
    const payload = {
        title: input1.value,
        price: input2.value,
        image: input3.value
    }
    try {
        const res = await fetch(API, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload) 
        })
 
        console.log(res);
        

    } catch (error) { 
        
        console.log(error);
        
    }
}

sendBtn.onclick = createProduct 