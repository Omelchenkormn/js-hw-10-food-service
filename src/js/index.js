const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggle = document.querySelector('#theme-switch-toggle');
const refBody = document.querySelector('body');



const changeInput = event => {
    if (event.currentTarget.checked) {
        darkTheme()
    }
    else {
        lightTheme();
    }
  };

toggle.addEventListener('change', changeInput);

// function changeToggle(event) {
//     refBody.classList.toggle('dark-theme');  
    
// };

const darkTheme = () => {
    refBody.classList.add(Theme.DARK);
    refBody.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    toggle.checked = true;
};

const lightTheme = () => {
    refBody.classList.add(Theme.LIGHT);
    refBody.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    toggle.checked = false;
};

const defaultTheme = () => { 
    const saveTheme = localStorage.getItem('theme');
    if (saveTheme === Theme.LIGHT) {
        lightTheme();
        return;
    }
    darkTheme();
};

defaultTheme();







           