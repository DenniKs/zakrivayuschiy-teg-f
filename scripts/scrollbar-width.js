// Вычисляем ширину вертикального скролла в браузере и устанавливаем её в качестве CSS-переменной

function getScrollbarWidth() {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-999px';
  document.body.appendChild(scrollDiv);

  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);

  return scrollbarWidth;
}

document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);