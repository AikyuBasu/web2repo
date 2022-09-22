const divs = document.querySelectorAll(".message");

divs.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.innerText = "Hello world!";
  });

  div.addEventListener("mouseout", (e) => {
    div.innerText = `You have left the div with id ${e.target.id}`;
    console.log(e);
  });
});