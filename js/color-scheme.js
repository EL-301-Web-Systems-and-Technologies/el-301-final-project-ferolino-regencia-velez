const htmlELement = document.querySelector(':root');

function setColorScheme() {
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.colorScheme) {
      if (sessionStorage.colorScheme == 'dark') {
        sessionStorage.colorScheme = 'light';
        htmlELement.style.setProperty('color-scheme', 'light');
      } else {
        sessionStorage.colorScheme = 'dark';
        htmlELement.style.setProperty('color-scheme', 'dark');
      }
    } else {
      sessionStorage.colorScheme= 'dark';
      htmlELement.style.setProperty('color-scheme', 'dark');
    }

    document.getElementById("js-color-scheme").innerHTML = sessionStorage.colorScheme;
    // document.getElementById("js-color-scheme").innerHTML = htmlELement.setAttribute(colorScheme, light);
  } else {
    alert('Browser does not support this function.');
  }
}

function getColorScheme() {
  if (sessionStorage.colorScheme) {
    if (sessionStorage.colorScheme == 'dark') {
      // htmlELement.style.colorScheme = 'dark';
      htmlELement.style.setProperty('color-scheme', 'dark');
    } else {
      // htmlELement.style.colorScheme = 'light';
      htmlELement.style.setProperty('color-scheme', 'light');
    }
  } else {
    sessionStorage.colorScheme= 'dark';
    // htmlELement.style.colorScheme = 'dark';
    htmlELement.style.setProperty('color-scheme', 'dark');
  }

  document.getElementById("js-color-scheme").innerHTML = sessionStorage.colorScheme;
  // document.getElementById("js-color-scheme").innerHTML = htmlELement.setAttribute(colorScheme, light);
}


(getColorScheme())();