const modal = document.querySelector("#image-modal");
const modalImage = modal.querySelector(".modal-image");
const modalClose = modal.querySelector(".modal-close");

const openModal = (src, alt) => {
  modalImage.src = src;
  modalImage.alt = alt || "";
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
  document.body.style.overflow = "";
};

document.querySelectorAll(".gallery img").forEach((image) => {
  image.addEventListener("click", () => {
    openModal(image.src, image.alt);
  });
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});
