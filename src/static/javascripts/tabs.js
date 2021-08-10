import "../styles/tabs.css";

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
  }

  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }

  toggleTabs(e) {
    this.tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.target.classList.add("active");
  }

  toggleContent(e) {
    const contents = this.container.querySelectorAll(".content");
    contents.forEach((content) => {
      content.classList.remove("active");
    });

    const selector = e.target.getAttribute("data-target");
    const content = document.querySelector(selector);
    content.classList.add("active");
  }
}

export { Tabs as default };
