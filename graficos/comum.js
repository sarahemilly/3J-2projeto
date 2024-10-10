const getCSS = (variavel)=> {
  return getComputedstyle(document.body).getPropertyValue(variavel)
}