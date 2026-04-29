import './style.css';
import createTodo from './modules/Todo.js'
import createProject from './modules/Project.js'



const project = createProject("Inbox")

const task1 = createTodo({
  title: "Buy milk",
  description: "Store",
  dueDate: "2024-01-01",
  priority: "high"
})
const task2= createTodo({
  title: "Buy chocolate",
  description: "Store",
  dueDate: "2024-01-02",
  priority: "low"
})
project.addTask(task1)
console.log(project.tasks)
project.addTask(task2)
console.log(project.tasks)



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