const emptyAnchors = document.querySelectorAll(".empty-anchor");
for (let i = 0; i <emptyAnchors.length; i++){
  emptyAnchors[i].addEventListener("click", e => e.preventDefault());
}
