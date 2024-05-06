function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



const input = document.getElementById("myInput").querySelector("input");
input.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  const inputWidth = inputValue.length * 20;
  input.style.width = `${inputWidth}px`;
});
