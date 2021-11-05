const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');


const login = (user) => {
  buttonAuth.style.display = 'none';

  buttonOut.style.display = 'flex';
  userName.style.display = 'flex';

  userName.textContent = user.login;
  modalAuth.style.display = 'none';
};

const logout = () => {
  buttonAuth.style.display = 'flex';

  buttonOut.style.display = 'none';
  userName.style.display = 'none';
  userName.textContent = '';

  localStorage.removeItem('user');
}

// открыть модальное окно по клику на кнопку Войти 
buttonAuth.addEventListener('click', () => {
  modalAuth.style.display = 'flex';
});

// закрыть модальное окно по клику на крестик
closeAuth.addEventListener('click', () => {
  modalAuth.style.display = 'none';
});

buttonOut.addEventListener('click', () => {
  logout();
});

// блокировка станд. поведения элемента - перезагрузки страницы при нажатии на Войти в модалке
logInForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const user = {
    login: inputLogin.value,
    password: inputPassword.value,
  };

  localStorage.setItem('user', JSON.stringify(user));

  login(user);

  // if (!(inputLogin.value === '')) {
  //   localStorage.setItem('user', JSON.stringify(user));
  //   login(user);       
  // } else {      
  //   inputLogin.placeholder = 'where is login?';
  // }
  
});

if (localStorage.getItem('user')) {
  login(JSON.parse(localStorage.getItem('user')))
}








