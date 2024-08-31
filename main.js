const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".inputs");
const cards = document.querySelector(".cards");

let data = [];

const render = () => {
    cards.innerHTML = data.map(
        (item) => `
     <div class="border-2 border-red-700 p-4 rounded-md flex justify-between px-10 shadow-lg shadow-red-500 bg-blue-200">
        <div class="">
          <h1 id="firstName-${item.id}" class="font-bold text-[32px]">${item.first_name}</h1>
          <p id="address-${item.id}">${item.address}</p>
        </div>
        <div class="flex gap-4 py-4 border-2 border-red-700 px-4 rounded-md shadow-inner shadow-black">
          <button onclick="editItem(${item.id})" class="bg-green-500 rounded-md p-2 shadow-md shadow-black">edit</button>
          <button onclick="deleteItem(${item.id})" class="bg-red-500 rounded-md p-2 shadow-md shadow-black">delete</button>
          <input type="checkbox" id="checkbox-${item.id}" onchange="toggleStrikethrough(${item.id})" class="w-6">
        </div>
      </div>`
    ).join("");
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let obj = { id: Date.now() };

    for (let i of inputs) {
        obj[i.name] = i.value;
        i.value = "";
    }

    data.push(obj);
    render();
});

const deleteItem = (id) => {
    data = data.filter((item) => item.id !== id);
    render();
};

const editItem = (id) => {
    const first_name = prompt("First name");
    const address = prompt("Address");

    for (let i = 0; i < data.length; i++) {
        if (id === data[i].id) {
            data[i].first_name = first_name;
            data[i].address = address;
        }
    }

    render();
};

function toggleStrikethrough(id) {
    const checkbox = document.getElementById(`checkbox-${id}`);
    const firstNameText = document.getElementById(`firstName-${id}`);
    const addressText = document.getElementById(`address-${id}`);

    if (checkbox.checked) {
        firstNameText.style.textDecoration = 'line-through';
        firstNameText.style.opacity = '0.5';
        addressText.style.textDecoration = 'line-through';
        addressText.style.opacity = '0.5';
    } else {
        firstNameText.style.textDecoration = 'none';
        firstNameText.style.opacity = '1';
        addressText.style.textDecoration = 'none';
        addressText.style.opacity = '1';
    }
}
