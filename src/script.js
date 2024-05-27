document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
  
    const showItem = (index) => {
      items.forEach((item, idx) => {
        item.classList.toggle("active", idx === index);
      });
    };
  
    const nextItem = () => {
      currentIndex = (currentIndex + 1) % totalItems;
      showItem(currentIndex);
    };
  
    const prevItem = () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      showItem(currentIndex);
    };
  
    // Automatically cycle through items
    setInterval(nextItem, 3000);
  });