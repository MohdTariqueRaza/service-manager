# Service Manager – Services & Blog Portal 🚀

A responsive React web app connected to WordPress (via REST API) for managing services and blog posts. Includes hero banner, services & blog cards, blog details, and a contact form with reCAPTCHA.


---

## 📝 Project Overview

**Service Manager** is a React frontend with:

- Homepage with hero banner, brand name, tagline, and navigation  
- Services page: displays cards with image, title, description, price, filter/search  
- Blog page: displays posts with image, title, excerpt, “Read More” link, filter/search  
- Blog Details page  
- Contact form with Name, Email, Message, and reCAPTCHA (mocked)  

Initially uses local JSON files (`services.json` and `blogs.json`) and later connects to WordPress REST API.

---

## 🏗 Architecture

**Frontend (React)**  
- React Router for navigation  
- Modular components: `Header`, `Footer`, `ServiceCard`, `BlogCard`  
- State management using `useState` & `useEffect`  
- Fully responsive design (mobile, tablet, desktop)  

**Backend (WordPress on InfinityFree)**  
- Default WP posts for blog  
- Custom Post Type `services`  
- REST API endpoints:
  - Services: `https://service-manager.infinityfreeapp.com/wp-json/wp/v2/services`  
  - Blog Posts: `https://service-manager.infinityfreeapp.com/wp-json/wp/v2/posts`  

**Security Considerations**  
- Meta headers implemented/planned:
  - `Content-Security-Policy`  
  - `X-Frame-Options`  
  - `X-Content-Type-Options`  
- Additional headers recommended in production: `Strict-Transport-Security`, `Referrer-Policy`

---

## 🔗 How React Connects to WordPress

1. **Fetch Data from REST API:**  
   - React uses `fetch` or `axios` in `useEffect` to get data from WordPress endpoints.
   - Example for services:

```javascript
useEffect(() => {
  fetch('https://service-manager.infinityfreeapp.com/wp-json/wp/v2/services')
    .then(res => res.json())
    .then(data => setServices(data))
    .catch(err => console.error(err));
}, []);

2. 

---

## ⚙️ Setup & Run Instructions (Local Development)


## 2️⃣ Run React Locally

Clone the project

```bash
  git clone https://github.com/MohdTariqueRaza/service-manager.git
```

Go to the project directory

```bash
  cd service-manager
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

- Open browser at: http://localhost:5173/


## 2️⃣ Run WordPress Locally

- Install WordPress using XAMPP
- Create Custom Post Type services
- Add blog posts using default WordPress posts


## 🔄 Switching from JSON to WordPress

### 1. Open your .env file
In your project root, you should have a .env file (create one if it doesn’t exist).

### 2. Add the environment variable
Environment variables in Vite must start with VITE_. To set VITE_APP_ENV to wp, write:

`VITE_APP_ENV=wp`


## 🛡 reCAPTCHA Setup

- Google reCAPTCHA v2 used for contact form
- For demo, use mock keys in .env:
`VITE_APP_SITE_KEY = 6LeIz9YrAAAAADXugQTOEe9c7Yj_4WTxgHeNeyGM`

`VITE_APP_SECRET_KEY = 6LeIz9YrAAAAAOOp8BCGWJQt47GyMTb90pdYRp_y`


## 🚀 Deployment

### Frontend (React App on Vercel)

1. Go to [Vercel](https://vercel.com/) and log in or sign up.
2. Click “New Project” → import from your GitHub repository.
3. Configure project (Framework: React, Build Command: npm run build, Output Directory: dist for Vite).
4. Add environment variables (VITE_APP_SITE_KEY,VITE_APP_SECRET_KEY,VITE_APP_API_URL and VITE_APP_ENV).
5. Deploy → Vercel will provide a live URL.

**Example:** [React Live Demo](https://service-manager-chi.vercel.app)


### Backend (WordPress on InfinityFree)

1. Go to [InfinityFree](https://www.infinityfree.com/) and log in.
2. Create a new hosting account / domain.
3. Install WordPress via Softaculous or manually.
4. Upload your WordPress files / theme if needed.
5. Configure database and create Custom Post Type services.
6. Add posts and services.
7. REST API endpoints are now live:
- https://service-manager.infinityfreeapp.com/wp-json/wp/v2/posts
- https://service-manager.infinityfreeapp.com/wp-json/wp/v2/services

React app fetches data directly from these WordPress REST API endpoints.



