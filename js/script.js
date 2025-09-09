const manageSpinner = (status) => {
  if(status == true ){
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("all-categories").classList.add("hidden")

  }else{
    document.getElementById("all-categories").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden")

  }
}

// all categories

const allCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((req) => req.json())
    .then((data) => {
      const datas = data.categories;
      datas.forEach((element) => {
        const allCategories = document.getElementById("all-categories");
        allCategories.innerHTML += `
      <li id="${element.id}" class="h-[40px] add-hover-effect hover:bg-[#15803d] hover:text-white flex items-center p-4 cursor-pointer rounded-lg">${element.category_name}</li>`;
      });
    });
};

allCategories();

const loadModal = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const detalies = await res.json();
  displayModal(detalies.plants);
};

const displayModal = (plant) => {
  const detailesContainer = document.getElementById("detailes-container");
  detailesContainer.innerHTML = `
         <h3 class="text-lg font-bold">${plant.name}</h3>
                  <div>
                    <img
                      class="rounded-lg w-full h-[300px]"
                      src="${plant.image}"
                    />
                  </div>
                  <h1><span class="font-bold">Category:</span> <span>${plant.category}</span></h1>
                  <p><span class="font-bold">Price:</span> <span>৳ ${plant.price}</span></p>
                  <p><span class="font-bold">Description:</span> <span>${plant.description}</span></p>
                  <div class="modal-action">
                    <form method="dialog">
                      <button class="btn">Close</button>
                    </form>
                  </div>`;
  document.getElementById("myModals").showModal();
};

// all plants

const allPlants = () => {
  manageSpinner(true)

  fetch("https://openapi.programming-hero.com/api/plants")
    .then((req) => req.json())
    .then((data) => {
      const plant = data.plants;

      plant.forEach((plants) => {
        const allPlants = document.getElementById("all-plants");

        allPlants.innerHTML += `
        <div class="card bg-base-100 w-full shadow-sm p-[10px] justify-between max-md:w-full">
                <figure>
                  <img
                    class="rounded-lg h-[250px] bg-cover w-full"
                    src="${plants.image}"
                  />
                </figure>
                <div class="space-y-3">
                  <h2 class="card-title mt-[15px] plant cursor-pointer" onclick="loadModal(${plants.id})">
                  
                    ${plants.name}
                  </h2>
                  <p>
                    ${plants.description}
                  </p>
                  <div class="card-actions justify-between">
                    <div
                      class="flex justify-center items-center bg-[#dcfce7] p-4 rounded-xl h-[28px] text-[#15803d]"
                    >
                      ${plants.category}
                    </div>
                    <div class=""><p>৳ <span>${plants.price}</span></p></div>
                  </div>
                  <div>
                    <button
                      class="btn w-full rounded-3xl bg-[#15803d] text-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>`;
      });
      manageSpinner(false)
    });

    
};

allPlants();



document.getElementById("all-categories").addEventListener("click", (e) => {
  const allLi = document.querySelectorAll("li");
  allLi.forEach((li) => {
    li.classList.remove("bg-[#15803d]");
    li.classList.remove("text-white");
  });
  if (e.target.localName === "li") {
    loadByCategory(e.target.id);
    e.target.classList.add("bg-[#15803d]");
    e.target.classList.add("text-white");
    const allPlants = document.getElementById("all-plants");
    allPlants.innerHTML = "";
  }
});

const loadByCategory = (id) => {
  manageSpinner(true)
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((req) => req.json())
    .then((data) => {
      const plant = data.plants;

      plant.forEach((plants) => {
        const allPlants = document.getElementById("all-plants");

        console.log(plants);
        allPlants.innerHTML +=
      `
        <div class="card bg-base-100 w-[310px] shadow-sm p-[10px] justify-between max-md:w-full">
                <figure>
                  <img
                    class="rounded-lg h-[200px] bg-cover w-full"
                    src="${plants.image}"
                  />
                </figure>
                <div class="space-y-3">
                  <h2 class="card-title mt-[15px] plant cursor-pointer" onclick="loadModal(${plants.id})">
                  
                    ${plants.name}
                  </h2>
                  <p>
                    ${plants.description}
                  </p>
                  <div class="card-actions justify-between">
                    <div
                      class="flex justify-center items-center bg-[#dcfce7] p-3 rounded-xl h-[28px] text-[#15803d]"
                    >
                      ${plants.category}
                    </div>
                    <div class=""><p>৳ <span>${plants.price}</span></p></div>
                  </div>
                  <div>
                    <button
                      class="btn w-full rounded-3xl bg-[#15803d] text-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>`;
      });
      manageSpinner(false)
    });
};


document
  .getElementById("main-card-container")
  .addEventListener("click", (e) => {
    if (e.target.localName === "button") {
      const name = e.target.parentNode.parentNode.children[0].innerText;
      const price =
        e.target.parentNode.parentNode.children[2].children[1].children[0]
          .children[0].innerText;

      console.log(price);
      alert(`${name} has been added to the cart.`);
   
      const cartMainSection = document.getElementById(
        "add-to-cart-main-section"
      );
      cartMainSection.innerHTML += `
      <div class="flex justify-between items-center rounded-lg p-3 bg-[#f0fdf4] mt-[12px]">
        <div>
          <h1 class="font-bold">${name}</h1>
          <p>৳ <span class="cart-item-price">${price}</span></p>
        </div>
        <div>
          <button class="remove-btn cursor-pointer">X</button>
        </div>
      </div>`;

      // update total
      const cartPrice = document.getElementById("cart-total-price").innerText;
      const total = Number(cartPrice) + Number(price);
      document.getElementById("cart-total-price").innerText = total;
    }
  });

//   remove that total

  document
  .getElementById("add-to-cart-main-section")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const itemDiv = e.target.closest("div.flex"); 
      const price = itemDiv.querySelector(".cart-item-price").innerText;

   
      const cartPrice = document.getElementById("cart-total-price").innerText;
      const newTotal = Number(cartPrice) - Number(price);
      document.getElementById("cart-total-price").innerText = newTotal;

      itemDiv.remove();
    }
  });

