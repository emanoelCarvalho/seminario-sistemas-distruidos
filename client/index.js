document
.getElementById("itineraryForm")
.addEventListener("submit", async function (event) {
  event.preventDefault();

  const destination = document.getElementById("destination").value;
  const activities = document
    .getElementById("activities")
    .value.split(",");
  const preferences = document.getElementById("preferences").value;

  const response = await fetch(
    "http://localhost:3000/generate-itinerary",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ destination, activities, preferences }),
    }
  );

  if (response.ok) {
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "roteiro_viagem.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    document.getElementById("status").textContent =
      "Roteiro gerado com sucesso!";
  } else {
    document.getElementById("status").textContent =
      "Erro ao gerar roteiro!";
  }
});
