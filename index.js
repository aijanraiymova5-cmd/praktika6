// let API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/list";
//     let result = document.querySelector(".result");

//     async function getUsers() {
//       try {
//       let res = await fetch(API);
//       let data = await res.json();

//       console.log(data); 
//     result.innerHTML = data.map((item) => {
//         return `<div class="card">
//           <img src="${item.image}" alt="" />
//           <div class="card-text">
//           <h5>${item.title}</h5>
//           <p>${item.price}</p>
//           </div>
//           <div class="card-btns">
//           <button class="update">Update</button>
//           <button class="delete">Delete</button>
//           </div>    
//          </div>`
      
//     }).join("");
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUsers();


let API ="https://dummyjson.com/products"
let result = document.querySelector(".result")

async function getUsers(){
    
    try {
        const res = await fetch(API)
        const data = await res.json()

        console.log(data);
        result.innerHTML = data.products.map((box) => {
            return `<div class="list">
            <img src="${box.thumbnail}" alt=""  />
            <div class="text">
                <h5>${box.title}</h5>
                <p>${box.price}</p>
            </div>
            <div class="card1">
             <button>Add to cart</button>
            </div>
            <div class="card2">
                <p>20%</p>
            </div>
       
            </div>`
        }).join("")
    } catch (error) {
        console.log(error);
        
    }
}
    
getUsers()