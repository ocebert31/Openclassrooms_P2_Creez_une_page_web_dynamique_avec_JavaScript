document.addEventListener("DOMContentLoaded", async() => {
  displayWorks(works)
});

async function displayWorks() {
  const reponse = await fetch("http://localhost:5678/api/works");
  const works = await reponse.json();
  console.log(works);
}