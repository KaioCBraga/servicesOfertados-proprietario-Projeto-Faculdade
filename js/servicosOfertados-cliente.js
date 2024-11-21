const fixedServices = [
  {
    id: "revisao-completa",
    name: "Revisão Completa",
    description:
      "Revisão geral do veículo, incluindo freios, suspensão e sistemas elétricos",
    price: 249.9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/revisao-completa-FE7cIx6u0vFj9T5UpaXConZpnmVsas.jpeg",
    detailedDescription:
      "Revisão técnica abrangente que inclui:\n- Inspeção do sistema de freios\n- Verificação da suspensão\n- Teste do sistema elétrico\n- Checagem de amortecedores\n- Análise de motor e transmissão\n- Verificação de todos os fluidos",
    estimatedTime: "3-4 horas",
    warranty: "1 ano ou 20.000 km",
  },
  {
    id: "troca-oleo",
    name: "Troca de Óleo",
    description:
      "Troca completa de óleo e filtro para todos os tipos de veículos",
    price: 89.9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oleo.jpg-e6hFOMwKegJAPfiDUK9T4ATR8NolCm.jpeg",
    detailedDescription:
      "Serviço completo de troca de óleo que inclui:\n- Troca do óleo do motor\n- Substituição do filtro de óleo\n- Verificação dos níveis de outros fluidos\n- Limpeza do bico de óleo\n- Compatível com todos os tipos de veículos",
    estimatedTime: "30-45 minutos",
    warranty: "3 meses ou 5.000 km",
  },
  {
    id: "alinhamento-3d",
    name: "Alinhamento 3D",
    description: "Alinhamento preciso das rodas utilizando tecnologia 3D",
    price: 119.9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alinhamento-3d-VeMVWSogw9BmWmiALq5rX87F382h1z.webp",
    detailedDescription:
      "Alinhamento de precisão que inclui:\n- Verificação da geometria das rodas\n- Ajuste de camber, caster e convergência\n- Correção de desvios de direção\n- Melhoria na dirigibilidade e economia de combustível",
    estimatedTime: "1-2 horas",
    warranty: "6 meses ou 10.000 km",
  },
  {
    id: "troca-pneu",
    name: "Troca de Pneu",
    description: "Troca de pneu, balanceamento e calibragem",
    price: 49.9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/troca_de_pneu.jpg-Ywk6prtxpe1GbPYzB0eP6dbHcAW3gS.jpeg",
    detailedDescription:
      "Serviço completo de troca de pneus que inclui:\n- Remoção do pneu antigo\n- Montagem do novo pneu\n- Balanceamento\n- Calibragem\n- Verificação de pressão\n- Compatível com carros, SUVs e utilitários",
    estimatedTime: "30-45 minutos",
    warranty: "3 meses",
  },
  {
    id: "suspensao",
    name: "Revisão de Suspensão",
    description: "Verificação e manutenção completa do sistema de suspensão",
    price: 179.9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suspensao-carro.jpg-CuFGRFeXOUwzBgCxswaxWLllKsCEPh.jpeg",
    detailedDescription:
      "Revisão completa da suspensão que inclui:\n- Verificação de amortecedores\n- Inspeção de molas\n- Checagem de buchas e pivôs\n- Análise de desgaste de componentes\n- Ajustes necessários para melhor desempenho",
    estimatedTime: "2-3 horas",
    warranty: "6 meses ou 10.000 km",
  },
  {
    id: "freios",
    name: "Manutenção de Freios",
    description:
      "Revisão e manutenção do sistema de freios, incluindo troca de pastilhas",
    price: 149.9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freios-S0gRaaeLDzjSRkXUXJGubogejdmkW8.webp",
    detailedDescription:
      "Manutenção completa do sistema de freios que inclui:\n- Verificação de pastilhas e discos\n- Troca de pastilhas (se necessário)\n- Análise do fluido de freio\n- Verificação de cabos e mangueiras\n- Ajuste do freio de mão",
    estimatedTime: "1-2 horas",
    warranty: "6 meses ou 10.000 km",
  },
];

function displayServiceDetails(service) {
  const serviceDetails = document.getElementById("serviceDetails");
  serviceDetails.innerHTML = `
      <div class="service-details-content">
          <h2>${service.name}</h2>
          <p><strong>Descrição:</strong> ${service.description}</p>
          <p><strong>Preço:</strong> R$ ${service.price.toFixed(2)}</p>
          <h3>Descrição Detalhada</h3>
          <p>${
            service.detailedDescription
              ? service.detailedDescription.replace(/\n/g, "<br>")
              : "Não disponível"
          }</p>
          <p><strong>Tempo Estimado:</strong> ${service.estimatedTime}</p>
          <p><strong>Garantia:</strong> ${service.warranty}</p>
      </div>
  `;
  serviceDetails.style.setProperty("--bg-image", `url(${service.image})`);
  serviceDetails.style.backgroundImage = `var(--bg-image)`;
  serviceDetails.style.backgroundSize = "cover";
  serviceDetails.style.backgroundPosition = "center";
  serviceDetails.style.backgroundBlendMode = "darken";
  serviceDetails.style.backgroundColor = "rgba(0,0,0,0.8)";
}

function initializeServiceCards() {
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
      const serviceId = card.getAttribute("data-id");
      const service =
        fixedServices.find((s) => s.id === serviceId) ||
        JSON.parse(localStorage.getItem("customServices") || "[]").find(
          (s) => s.id === serviceId
        );
      if (service) {
        displayServiceDetails(service);
      }
    });
  });
}

function displayCustomServices() {
  const serviceContainer = document.getElementById("serviceContainer");
  const customServices = JSON.parse(
    localStorage.getItem("customServices") || "[]"
  );

  customServices.forEach((service) => {
    const serviceCard = document.createElement("div");
    serviceCard.className = "service-card";
    serviceCard.setAttribute("data-id", service.id);
    serviceCard.innerHTML = `
          <img src="${service.image}" alt="${service.name}" />
          <h3>${service.name}</h3>
          <p>${service.description}</p>
          <p><strong>Preço: R$ ${service.price.toFixed(2)}</strong></p>
      `;
    serviceCard.addEventListener("click", () => displayServiceDetails(service));
    serviceContainer.appendChild(serviceCard);
  });
}

function loadAllServices() {
  initializeServiceCards();
  displayCustomServices();
}

document.addEventListener("DOMContentLoaded", loadAllServices);

window.addEventListener("storage", function (e) {
  if (e.key === "customServices") {
    const serviceContainer = document.getElementById("serviceContainer");
    const customCards = serviceContainer.querySelectorAll(
      '.service-card:not([data-id^="revisao-"]):not([data-id^="troca-"]):not([data-id^="alinhamento-"]):not([data-id^="suspensao"]):not([data-id^="freios"])'
    );
    customCards.forEach((card) => card.remove());
    displayCustomServices();
  }
});
