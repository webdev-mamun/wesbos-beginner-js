const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll("[role=tab]");
const tabPanels = Array.from(tabs.querySelectorAll("[role=tabpanel]"));

function handleTabClick(event) {
  const currentButton = event.currentTarget;
  /* method 1
  //hide all tab panel
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  //mark all tabs as unselected
  tabButtons.forEach((button) => {
    button.ariaSelected = false;
  });
  //mark the click tab as selected
  currentButton.ariaSelected = true;
  //fiend the assocated tab panel and show it
  const tabPanel = tabs.querySelector(
    `[aria-labelledby="${currentButton.id}"]`
  );
  tabPanel.hidden = false;
  */
  /* Method two
  //Mark all tabs unselected except current tab
  tabButtons.forEach((button) => {
    button.ariaSelected = false;
    if (button === currentButton) {
      button.ariaSelected = true;
    }
  });
  //Hide all tab panel except the targeted one
  tabPanels.forEach((panel) => {
    const currentPannel = tabs.querySelector(
      `[aria-labelledby="${currentButton.id}"]`
    );
    panel.hidden = true;
    if (panel === currentPannel) {
      panel.hidden = false;
    }
  });
  */

  //hide all tab panel
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  //mark all tabs as unselected
  tabButtons.forEach((button) => {
    button.ariaSelected = false;
  });
  //mark the click tab as selected
  currentButton.ariaSelected = true;
  //fiend the assocated tab panel and show it
  const tabpanel = tabPanels.find(
    (panel) => panel.getAttribute("aria-labelledby") === currentButton.id
  );
  tabpanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener("click", handleTabClick)
);
