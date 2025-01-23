import express from 'express'; 
import cors from 'cors';   

const app = express();
const PORT = 5004;

app.use(cors({
  origin: 'http://localhost:5173'  
}));

const videos = [
  { id: 1, title: "Intro to React Hooks", channel: "Tech Tutorials", thumbnail: "https://example.com/react-hooks.jpg", views: "10.5K", uploadDate: "2 weeks ago" },
  { id: 2, title: "JavaScript Advanced Techniques", channel: "Coding Master", thumbnail: "https://example.com/js-advanced.jpg", views: "25.3K", uploadDate: "1 month ago" },
  { id: 3, title: "CSS Grid Layout Tutorial", channel: "Web Design Pro", thumbnail: "https://example.com/css-grid.jpg", views: "18.7K", uploadDate: "3 weeks ago" },
  { id: 4, title: "Understanding ES6 Features", channel: "JS Guru", thumbnail: "https://example.com/es6-features.jpg", views: "45.1K", uploadDate: "2 months ago" },
  { id: 5, title: "Mastering Python for Data Science", channel: "DataScience Lab", thumbnail: "https://example.com/python-data-science.jpg", views: "34.9K", uploadDate: "1 week ago" },
  { id: 6, title: "React vs Vue.js: A Comparison", channel: "DevTalks", thumbnail: "https://example.com/react-vs-vue.jpg", views: "28.3K", uploadDate: "1 month ago" },
  { id: 7, title: "Learn TypeScript in 30 Minutes", channel: "Code Academy", thumbnail: "https://example.com/learn-typescript.jpg", views: "12.7K", uploadDate: "2 days ago" },
  { id: 8, title: "Building REST APIs with Node.js", channel: "Backend Mastery", thumbnail: "https://example.com/nodejs-rest.jpg", views: "55.2K", uploadDate: "3 weeks ago" },
  { id: 9, title: "Web Accessibility Essentials", channel: "A11y Experts", thumbnail: "https://example.com/web-accessibility.jpg", views: "9.1K", uploadDate: "4 weeks ago" },
  { id: 10, title: "Vue.js for Beginners", channel: "Code With Me", thumbnail: "https://example.com/vue-beginners.jpg", views: "21.5K", uploadDate: "5 days ago" },
  { id: 11, title: "Advanced Git Techniques", channel: "DevOps Tutorials", thumbnail: "https://example.com/advanced-git.jpg", views: "14.3K", uploadDate: "1 month ago" },
  { id: 12, title: "Introduction to Docker", channel: "Docker Dev", thumbnail: "https://example.com/intro-to-docker.jpg", views: "32.6K", uploadDate: "3 weeks ago" },
  { id: 13, title: "JavaScript Closures Explained", channel: "JS Simplified", thumbnail: "https://example.com/js-closures.jpg", views: "26.7K", uploadDate: "2 months ago" },
  { id: 14, title: "Node.js and MongoDB Crash Course", channel: "Fullstack Dev", thumbnail: "https://example.com/node-mongo.jpg", views: "23.4K", uploadDate: "2 weeks ago" },
  { id: 15, title: "CSS Flexbox Deep Dive", channel: "Web Design Pro", thumbnail: "https://example.com/css-flexbox.jpg", views: "30.2K", uploadDate: "1 month ago" },
  { id: 16, title: "Building Single Page Apps with React", channel: "React Academy", thumbnail: "https://example.com/spa-react.jpg", views: "40.5K", uploadDate: "1 month ago" },
  { id: 17, title: "Mastering JavaScript Async/Await", channel: "JS Pro", thumbnail: "https://example.com/js-async-await.jpg", views: "22.8K", uploadDate: "1 week ago" },
  { id: 18, title: "Introduction to MongoDB", channel: "Database Tutorials", thumbnail: "https://example.com/mongodb-intro.jpg", views: "27.4K", uploadDate: "2 weeks ago" },
  { id: 19, title: "Node.js: Building APIs with Express", channel: "Backend Dev", thumbnail: "https://example.com/express-api.jpg", views: "19.6K", uploadDate: "1 week ago" },
  { id: 20, title: "Web Development for Beginners", channel: "DevStart", thumbnail: "https://example.com/web-dev-beginners.jpg", views: "50.9K", uploadDate: "3 months ago" },
  { id: 21, title: "Angular: Getting Started", channel: "Angular Academy", thumbnail: "https://example.com/angular-start.jpg", views: "15.8K", uploadDate: "4 weeks ago" },
  { id: 22, title: "Introduction to Cloud Computing", channel: "Cloud Tech", thumbnail: "https://example.com/cloud-computing.jpg", views: "17.4K", uploadDate: "5 days ago" },
  { id: 23, title: "Building with Tailwind CSS", channel: "Tailwind Mastery", thumbnail: "https://example.com/tailwind-building.jpg", views: "11.2K", uploadDate: "1 month ago" },
  { id: 24, title: "Python for Web Development", channel: "WebDev Pro", thumbnail: "https://example.com/python-web.jpg", views: "16.9K", uploadDate: "2 weeks ago" },
  { id: 25, title: "Machine Learning with Python", channel: "AI Hub", thumbnail: "https://example.com/ml-python.jpg", views: "22.3K", uploadDate: "1 month ago" },
  { id: 26, title: "Deep Dive into JavaScript Promises", channel: "JS Masterclass", thumbnail: "https://example.com/js-promises.jpg", views: "29.7K", uploadDate: "2 weeks ago" },
  { id: 27, title: "JavaScript Event Loop Explained", channel: "JS Tutorials", thumbnail: "https://example.com/js-event-loop.jpg", views: "18.9K", uploadDate: "1 month ago" },
  { id: 28, title: "Optimizing React Performance", channel: "React Optimization", thumbnail: "https://example.com/react-performance.jpg", views: "24.8K", uploadDate: "3 weeks ago" },
  { id: 29, title: "Understanding HTTP Requests", channel: "Web Dev Insights", thumbnail: "https://example.com/http-requests.jpg", views: "35.1K", uploadDate: "4 weeks ago" },
  { id: 30, title: "Node.js Authentication with JWT", channel: "Backend Dev Pro", thumbnail: "https://example.com/node-jwt.jpg", views: "25.2K", uploadDate: "2 months ago" },
  { id: 31, title: "Intro to Swift Programming", channel: "Swift Learning", thumbnail: "https://example.com/intro-swift.jpg", views: "19.3K", uploadDate: "1 week ago" },
  { id: 32, title: "Building Apps with Flutter", channel: "Flutter Devs", thumbnail: "https://example.com/flutter-apps.jpg", views: "22.1K", uploadDate: "3 weeks ago" },
  { id: 33, title: "PHP for Web Development", channel: "PHP Mastery", thumbnail: "https://example.com/php-web.jpg", views: "14.4K", uploadDate: "5 days ago" },
  { id: 34, title: "JavaScript Design Patterns", channel: "JS Patterns", thumbnail: "https://example.com/js-patterns.jpg", views: "28.3K", uploadDate: "1 month ago" },
  { id: 35, title: "Building Websites with Bootstrap", channel: "Web Design Academy", thumbnail: "https://example.com/bootstrap-sites.jpg", views: "16.5K", uploadDate: "2 weeks ago" },
  { id: 36, title: "SQL Basics for Beginners", channel: "Database Mastery", thumbnail: "https://example.com/sql-basics.jpg", views: "13.7K", uploadDate: "2 months ago" },
  { id: 37, title: "Python for Automation", channel: "Code with Python", thumbnail: "https://example.com/python-automation.jpg", views: "38.2K", uploadDate: "3 weeks ago" },
  { id: 38, title: "Creating Charts with D3.js", channel: "DataViz Academy", thumbnail: "https://example.com/d3-charts.jpg", views: "21.6K", uploadDate: "1 week ago" },
  { id: 39, title: "Functional Programming in JavaScript", channel: "JS Academy", thumbnail: "https://example.com/js-functional.jpg", views: "33.4K", uploadDate: "2 weeks ago" },
  { id: 40, title: "Getting Started with Ruby on Rails", channel: "Ruby Dev", thumbnail: "https://example.com/ruby-on-rails.jpg", views: "29.5K", uploadDate: "1 month ago" },
  { id: 41, title: "CSS Animation Fundamentals", channel: "CSS Animation Pro", thumbnail: "https://example.com/css-animation.jpg", views: "20.3K", uploadDate: "2 weeks ago" },
  { id: 42, title: "Intro to Blockchain and Cryptocurrencies", channel: "Crypto Insights", thumbnail: "https://example.com/blockchain-crypto.jpg", views: "27.8K", uploadDate: "1 month ago" },
  { id: 43, title: "Building Web Apps with Django", channel: "Python Web Dev", thumbnail: "https://example.com/django-web.jpg", views: "40.7K", uploadDate: "2 months ago" },
  { id: 44, title: "React Native for Mobile Apps", channel: "Mobile Dev Academy", thumbnail: "https://example.com/react-native.jpg", views: "18.9K", uploadDate: "5 days ago" },
  { id: 45, title: "Intro to Data Structures and Algorithms", channel: "Tech Skills", thumbnail: "https://example.com/data-structures.jpg", views: "22.3K", uploadDate: "1 week ago" },
  { id: 46, title: "Building Real-Time Web Apps", channel: "Web Dev Pro", thumbnail: "https://example.com/real-time-web.jpg", views: "33.5K", uploadDate: "3 weeks ago" },
  { id: 47, title: "Vue.js Advanced Concepts", channel: "Vue Mastery", thumbnail: "https://example.com/vue-advanced.jpg", views: "16.9K", uploadDate: "2 months ago" },
  { id: 48, title: "Advanced CSS Selectors", channel: "CSS Dev", thumbnail: "https://example.com/advanced-css.jpg", views: "13.4K", uploadDate: "1 month ago" },
  { id: 49, title: "Building Web APIs with Flask", channel: "Python Dev", thumbnail: "https://example.com/flask-api.jpg", views: "31.2K", uploadDate: "2 weeks ago" },
  { id: 50, title: "Vuex for State Management in Vue.js", channel: "Vue Devs", thumbnail: "https://example.com/vuex-state.jpg", views: "24.8K", uploadDate: "1 week ago" },
];


app.get("/api/videos", (req, res) => {
  res.json(videos); 
});

app.listen(PORT, () => {
  console.log(`YouTube server running on http://localhost:${PORT}`); 
});
