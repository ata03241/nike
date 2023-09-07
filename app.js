function openMenu() {
    document.getElementById("myMenu").style.height="100%"
}

function closeMenu() {
    document.getElementById("myMenu").style.height="0%"
}

const searchBtn = document.getElementById('search');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
  if (searchInput.style.display === 'none') {
    searchInput.style.display = 'block';
  } else {
    searchInput.style.display = 'none';
  }
});

function scrolltotop() {
  document.body.scrollTop = 0;
}



