const toggleButton = document.getElementById('modeToggle');
const body = document.body;
const popup = document.getElementById('popup');
const scrollBtn = document.getElementById("scrollToTopBtn");

// Cambiar modo claro/oscuro
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
  });
}

// Mostrar popup
function showPopup(message) {
  if (!popup) return;
  popup.textContent = message;
  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 2000);
}

// Scroll-to-top (sin ocultar ni mostrar el botón)
if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

function showPopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 2000);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  function downloadFile(fileUrl) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', ''); // Forzar descarga
    link.setAttribute('target', '_blank'); // Abrir en nueva pestaña si el navegador lo permite
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
