# 🛒 Online Grocery Store — Frontend (Vue 3 + Pinia + PrimeVue)

This is the frontend application for **Online Grocery Store**, built with modern Vue 3, TypeScript, Pinia for state management, PrimeVue for UI components, and TailwindCSS for styling.  
It communicates with a Spring Boot backend to display products, pricing, discount rules, and generate order summaries.

DEMO: https://youtu.be/Odw-kwWbVJ8

---

## 🚀 Tech Stack

### **Frontend Framework**
- **Vue 3** (Composition API + `<script setup>`)
- **TypeScript**

### **UI & Styling**
- **PrimeVue 4**
- **PrimeFlex**
- **PrimeIcons**
- **Tailwind CSS**
- **Tailwind PrimeUI plugin**

### **State Management**
- **Pinia 3**

### **Testing**
- **Vitest**
- **Vue Test Utils**
- **@pinia/testing**
- **happy-dom**

### **Build Tools**
- **Vite**
- **ESLint + Prettier**
- **Vue TSC**

---

## 📦 Project Setup

### 1 Install dependencies
```sh
npm install
````

### 2 Start development server

```sh
npm run dev
```

### 3 Build for production

```sh
npm run build
```

### 4 Preview production build

```sh
npm run preview
```

### 5 Run TypeScript type checking

```sh
npm run type-check
```

### 6 Lint + auto-fix

```sh
npm run lint
```

### 7 Format code (Prettier)

```sh
npm run format
```

### 8 Run unit tests

```sh
npm run test:unit
```

---

## Testing

Unit tests are written using:

* **Vitest** as the test runner
* **Vue Test Utils** for component testing
* **@pinia/testing** for mocking Pinia stores
* **jsdom / happy-dom** as DOM environments

Test files are located under:

```
src/tests/unit/
```

To execute tests:

```sh
npm run test:unit
```

---

## 📁 Project Structure

```txt
src/
├── api/               # Axios API wrappers
├── assets/            # Images, maps for product images
├── components/        # Vue components (ProductCard, etc.)
├── converters/        # cartToRequest converter
├── router/            # Vue Router setup
├── stores/            # Pinia stores (cart, order, products)
├── tests/             # Unit tests
├── types/             # TS interfaces (Product, OrderRequestItem...)
├── views/             # Pages (Home, Prices, Rules, Cart)
└── App.vue            # Root component
```

---

## 🔌 API Endpoints (Backend Integration)

The frontend integrates with these backend endpoints:

| Endpoint                       | Description                     |
| ------------------------------ | ------------------------------- |
| `GET /api/v1/items`            | Fetch product list              |
| `GET /api/v1/prices`           | Fetch price table               |
| `GET /api/v1/rules`            | Fetch discount rules            |
| `POST /api/v1/order/calculate` | Calculate final receipt summary |

Backend uses Spring Boot with CORS enabled for `http://localhost:5173`.

---

## Core Features

### Product List

Displays products retrieved from backend `/items`.

This is not a necessary endpoint for the assignment, 
but it was implemented for the convenience to keep the frontend app practical.

### Add to Cart

Using **Pinia cart store** with dynamic quantity controls.

### Pricing Page

Live pricing is fetched from backend `/prices`.

### Discount Rules

Rendered cleanly using PrimeVue DataTable.

### Cart Summary

Automatically generates and displays:

* Base price
* Discounts
* Final price
* Quantity or weight
* Warnings

### Order Placement

Shows **“Order placed!”** confirmation.

---

## Development Notes

### Tailwind + PrimeVue Integration

The project uses:

* `tailwindcss-primeui`
* PrimeVue’s Tailwind theme

Ensure Tailwind custom config is correctly applied.

### Testing with Pinia

`createTestingPinia()` is used to mock stores safely.

---

## Running both frontend & backend

### Frontend

```sh
npm run dev
```

### Backend (Spring Boot)

```sh
./mvnw spring-boot:run

or

mvn spring-boot:run
```

Frontend will run on:

```
http://localhost:5173
```

Backend will run on:

```
http://localhost:8080
```
