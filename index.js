function createMobileDropDownMenu(menuTitle, itemsArray) {
  const container = document.querySelector(".mobile-drop-down-container");

  //common in all the DOM elements
  const centerStyle = `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
  `;

  //css in title and list-item
  const tileStyle = `
  color: #EBFBFE;
  `;

  const containerStyle = `
      ${centerStyle}
    background-color: #363537;
    gap: 5px;
    position: relative;
  `;

  container.style.cssText = containerStyle;

  const menuTitleContainer = document.createElement("div");
  menuTitleContainer.classList.add("mobile-drop-down-title");
  menuTitleContainer.textContent = menuTitle;

  container.append(menuTitleContainer);

  menuTitleContainer.addEventListener("click", toggleDropDown);

  const itemsContainer = document.createElement("div");
  itemsContainer.classList.add("items-container");

  itemsArray.forEach((item) => {
    const listItem = document.createElement("a");
    listItem.classList.add("mobile-drop-down-item");

    listItem.textContent = item.name;
    listItem.href = item.link;

    itemsContainer.append(listItem);

    const listItemStyle = `
        ${centerStyle}
        ${tileStyle}
        text-decoration: none;
    `;

    listItem.style.cssText = listItemStyle;
  });

  container.append(itemsContainer);

  const menuTitleContainerStyle = `
  ${centerStyle}
  ${tileStyle}
  font-size: 1.4rem;
  font-weight: 700;
  padding-bottom: 4px;
  `;

  menuTitleContainer.style.cssText = menuTitleContainerStyle;

  const itemsContainerStyle = `
    ${centerStyle}
    gap: 2px;
    position: absolute;
    top: 29px;
    background-color: #363537;
  `;

  itemsContainer.style.cssText = itemsContainerStyle;
}

function toggleDropDown() {
  const itemsContainer = document.querySelector(".items-container");
  if (itemsContainer.style.display == "flex") {
    itemsContainer.style.display = "none";
  } else {
    itemsContainer.style.display = "flex";
  }
}

export default createMobileDropDownMenu;
