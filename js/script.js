let card = document.querySelector(".cards");

fetch("https://fakestoreapi.com/products")
.then((data)=>
{
    return data.json();
})
.then((detaildata)=>{
    let datahtml =" ";
    detaildata.map((value)=>{
        
        datahtml +=
        `<div class="cards">
        <div class="container">
           <div class="img-card">
           <img src="${value.image}" alt="">
            </div>
            <div class="detail-card"> 
                <h3>${value.title}</h3>
                <div class="price">
                    <p>$${value.price}</p>
                    <i class="ri-add-circle-line"></i>
                </div>
            </div>
            </div>

        </div>`
    })
    card.innerHTML=datahtml;
})
.catch((err)=>{
    console.log(err);
})

document.addEventListener("DOMContentLoaded", function () {
    const productName = document.getElementById("name");
    const price = document.getElementById("price");
    const description = document.getElementById("description");
    const category = document.getElementById("category");
    const image = document.getElementById("image");
    let form = document.querySelector(".form");

    console.log(productName, price, description, category, image, form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let newproduct = {
            title: productName.value,
            price: price.value,
            description: description.value,
            image: image.value,
            category: category.value,
        };
        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            body: JSON.stringify(newproduct),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("product added :", data);
                alert("product added successfully");
            })
            .catch(error => {
                console.error("error:", error);
                alert("failed to add product");
            });
    });
});

// const productName=document.getElementById("name");
// const price=document.getElementById("price");
// const description=document.getElementById("description");
// const category=document.getElementById("category");
// const image=document.getElementById("image");
// let form=document.querySelector(".form");
// console.log(productName,price,description,category,image,form);

// form.addEventListener("submit" , (e)=>{
//     e.preventDefault();
//     let newproduct ={
//         title:productName.value,
//         price: price.value,
//         description : description.value,
//         image : image.value,
//         category : category.value,
//     };
//     fetch("https://fakestoreapi.com/products", {
//         method : "POST",
//         body: JSON.stringify(newproduct),
//         headers:{
//             "content-type":"application/json"
//         }
//     }).then(res => res.json())
//     .then(data => {console.log("product added :", data)
//         alert("product added successfully ")
//     })
//     .catch(error => {console.error("error:",error)
//         alert("failed to add product")
//     })
// })
