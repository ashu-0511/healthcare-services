# **HealthHub - Healthcare Service Management**

## **Quick Commands**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ashu-0511/healthcare-services.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd healthhub
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Build the project for production (optional):**
   ```bash
   npm run build
   ```

## **Overview**

HealthHub is a simple, interactive web application built with **React** and **Vite** for managing healthcare services. Users can add, update, delete, and search for services, with data persisted in `localStorage` and smooth animations powered by **Framer Motion**.

## **Key Features**

- **Add, Edit, Delete Services**: Manage healthcare services seamlessly.
- **Search Functionality**: Easily find services by name or description.
- **LocalStorage Persistence**: Data is retained across sessions.
- **Smooth Animations**: Enhanced user experience with **Framer Motion**.

## **Technologies Used**

- **React**: For building the UI.
- **Vite**: Fast development environment.
- **Framer Motion**: For animations.
- **Feather Icons**: For UI iconography.
- **CSS**: For custom styling.

## **Folder Structure**

```
/src
├── App.js               # Main App component
├── App.css              # Global styles
├── ServiceForm.js       # Form for managing services
├── ServiceList.js       # Displays service cards
├── index.js             # Entry point
└── ...
```

## **Component Breakdown**

- **App Component**: Manages services data and search functionality.
- **ServiceList Component**: Displays services with animations.
- **ServiceForm Component**: Handles adding and editing services.
- **LocalStorage Integration**: Ensures data persistence.

## **Usage Instructions**

1. **Adding a Service**: Click the **"+"** button, fill out the form, and submit.
2. **Editing a Service**: Click the **"Edit"** button on a service card, update details, and submit.
3. **Deleting a Service**: Click the **"Delete"** button on a service card.
4. **Searching for a Service**: Use the search bar at the top.

## **Contributing**

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make changes and commit: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Create a pull request.

## **License**

This project is licensed under the MIT License.
