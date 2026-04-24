import './style.css';
import CreateTodo from './modules/Todo.js'

const todo1 = CreateTodo("Buy groceries", "Milk, eggs, bread")
console.log(todo1)

const tabs = document.querySelectorAll('.nav-btn');
const content = document.getElementById('content');

const pages = {
    home: () => {
        content.innerHTML = `
      <div class="hero">
        <h2>Hello World</h2>
        <p>This is a neo-brutalist SPA template.</p>
        <button class="btn" id="alert-btn">Click me</button>
      </div>
    `;
        document.getElementById('alert-btn').addEventListener('click', () => {
            alert('It works!');
        });
    },
    about: () => {
        content.innerHTML = `
      <div class="hero">
        <h2>About</h2>
        <p>Built with Webpack, HTML, CSS and vanilla JS.</p>
      </div>
    `;
    },
};

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        content.style.animation = 'none';
        content.offsetHeight;
        content.style.animation = '';
        pages[tab.dataset.tab]();
    });
});

pages.home();