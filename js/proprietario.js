const form = document.getElementById("addServiceForm");
const preview = document.getElementById("preview");
const successMessage = document.getElementById("successMessage");
const customServicesList = document.getElementById("customServicesList");

function loadCustomServices() {
  const customServices = JSON.parse(
    localStorage.getItem("customServices") || "[]"
  );
  customServicesList.innerHTML = "";
  customServices.forEach((service) => {
    const serviceItem = document.createElement("div");
    serviceItem.className = "custom-service-item";
    serviceItem.innerHTML = `
            <span>${service.name} - R$ ${service.price.toFixed(2)}</span>
            <button class="delete-btn" data-id="${service.id}">Excluir</button>
        `;
    customServicesList.appendChild(serviceItem);
  });

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", function () {
      deleteService(this.getAttribute("data-id"));
    });
  });
}

function deleteService(id) {
  let customServices = JSON.parse(
    localStorage.getItem("customServices") || "[]"
  );
  customServices = customServices.filter((service) => service.id !== id);
  localStorage.setItem("customServices", JSON.stringify(customServices));
  loadCustomServices();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newService = {
    id: Date.now().toString(),
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    price: parseFloat(document.getElementById("price").value),
    image: document.getElementById("image").value,
    detailedDescription: document.getElementById("detailedDescription").value,
    estimatedTime: document.getElementById("estimatedTime").value,
    warranty: document.getElementById("warranty").value,
  };

  let customServices = JSON.parse(
    localStorage.getItem("customServices") || "[]"
  );
  customServices.push(newService);
  localStorage.setItem("customServices", JSON.stringify(customServices));

  updatePreview(newService);
  form.reset();

  successMessage.style.display = "block";
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);

  loadCustomServices();
});

function updatePreview(service) {
  preview.innerHTML = `
        <h2>Serviço Adicionado:</h2>
        <img src="${service.image}" alt="${service.name}" />
        <h3>${service.name}</h3>
        <p><strong>Descrição:</strong> ${service.description}</p>
        <p><strong>Preço:</strong> R$ ${service.price.toFixed(2)}</p>
        <p><strong>Descrição Detalhada:</strong> ${
          service.detailedDescription
        }</p>
        <p><strong>Tempo Estimado:</strong> ${service.estimatedTime}</p>
        <p><strong>Garantia:</strong> ${service.warranty}</p>
    `;
}

document.addEventListener("DOMContentLoaded", loadCustomServices);
