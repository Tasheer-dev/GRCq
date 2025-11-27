const SETTINGS_KEY = "appearance_settings";

let settings = {
  fontSize: 14,
  fontColor: "#1f2430",
  sidebarBg: "#0a2347",
  sidebarText: "#ffffff",
  sidebarFontSize: 16,
  sidebarFontWeight: 700,
  logoBase64: null
};

function loadSettings() {
  const saved = localStorage.getItem(SETTINGS_KEY);
  if (saved) settings = JSON.parse(saved);

  document.getElementById("font-size").value = settings.fontSize;
  document.getElementById("font-color").value = settings.fontColor;

  document.getElementById("sidebar-bg").value = settings.sidebarBg;
  document.getElementById("sidebar-text").value = settings.sidebarText;
  document.getElementById("sidebar-size").value = settings.sidebarFontSize;
  document.getElementById("sidebar-weight").value = settings.sidebarFontWeight;
}

function saveSettings() {
  settings.fontSize = parseInt(document.getElementById("font-size").value);
  settings.fontColor = document.getElementById("font-color").value;

  settings.sidebarBg = document.getElementById("sidebar-bg").value;
  settings.sidebarText = document.getElementById("sidebar-text").value;
  settings.sidebarFontSize = parseInt(document.getElementById("sidebar-size").value);
  settings.sidebarFontWeight = document.getElementById("sidebar-weight").value;

  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  alert("Settings saved successfully!");
}

function resetSettings() {
  localStorage.removeItem(SETTINGS_KEY);
  alert("Settings reset!");
  location.reload();
}

document.getElementById("save-btn").onclick = saveSettings;
document.getElementById("reset-btn").onclick = resetSettings;

document.getElementById("logo-upload").onchange = function(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    settings.logoBase64 = evt.target.result;
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    alert("Logo updated!");
  };
  reader.readAsDataURL(file);
};

loadSettings();
window.addEventListener("load", () => {
  loadAppearance();
});
