let addButton = document.getElementById("addList");
let priButton = document.getElementById("addList1");
let listContainer = document.getElementById("listCont");
let inputField = document.getElementById("inputF");

addButton.addEventListener("click", function () {
  var para = document.createElement("p");
  para.classList.add("normal");
  para.innerText = inputField.value;
  listContainer.appendChild(para);
  inputField.value = "";
  localStorage.setItem("listCont", listContainer.innerHTML);

  para.addEventListener("click", function () {
    para.style.textDecoration = "line-through";
    localStorage.setItem("listCont", listContainer.innerHTML);
  });
  para.addEventListener("dblclick", function () {
    listContainer.removeChild(para);
    localStorage.setItem("listCont", listContainer.innerHTML);
  });
});

priButton.addEventListener("click", function () {
  var para1 = document.createElement("p");
  para1.classList.add("priority");
  para1.innerText = inputField.value;
  listContainer.appendChild(para1);
  inputField.value = "";
  localStorage.setItem("listCont", listContainer.innerHTML);

  para1.addEventListener("click", function () {
    para1.style.textDecoration = "line-through";
    localStorage.setItem("listCont", listContainer.innerHTML);
  });
  para1.addEventListener("dblclick", function () {
    listContainer.removeChild(para1);
    localStorage.setItem("listCont", listContainer.innerHTML);
  });
});

function getLocalData() {
  console.log(localStorage.getItem("listCont"));
  document.getElementById("listCont").innerHTML = localStorage.getItem(
    "listCont"
  );

  let children = document.getElementById("listCont").children;
  for (let i = 0; i < children.length; i++) {
    let item = children[i];
    item.addEventListener("click", function () {
      item.style.textDecoration = "line-through";
      localStorage.setItem("listCont", listContainer.innerHTML);
    });
    item.addEventListener("dblclick", function () {
      listContainer.removeChild(item);
      localStorage.setItem("listCont", listContainer.innerHTML);
    });
  }
}
