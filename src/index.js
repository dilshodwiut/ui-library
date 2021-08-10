import "./main.css";
import Tooltip from "./static/javascripts/tooltip";
import Dropdown from "./static/javascripts/dropdown";
import Tabs from "./static/javascripts/tabs";
import Snackbar from "./static/javascripts/snackbar";

const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  new Dropdown(dropdown).init();
});

const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector(".snackbar-trigger");
button.addEventListener("click", () => {
  snackbar.show("you clicked me :)");
});
