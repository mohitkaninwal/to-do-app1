# React To-Do App

Welcome to the React To-Do App! This project serves as a simple yet functional to-do list application built using React. It allows users to manage their tasks efficiently by adding and deleting tasks.

## Images

<img width="450px" src="https://github.com/mohitkaninwal/to-do-app1/assets/89794081/542ed405-c7b1-437a-89c1-4b9cb9aaa854"/>
<img width="450px" src="https://github.com/mohitkaninwal/to-do-app1/assets/89794081/0528b299-de0c-40ce-9615-c7cc07b2c408"/>


## Features

- **Add Task**: Users can add tasks to the to-do list by entering task details and pressing the "Add" button.
- **Delete Task**: Users can delete tasks individually by clicking on the delete icon next to each task.


## Project Structure

The project structure is organized to maintain clarity and scalability. Key directories and files include:

- `src/`: Contains the source code for the React application.
  - `components/`: Houses reusable React components used throughout the application.
    - `TodoList.js`: Component responsible for rendering the list of tasks.
    - `TodoItem.js`: Component representing an individual task in the list.
    - `AddTodoForm.js`: Component for adding new tasks to the list.
  - `App.js`: Main entry point of the application.
  - `index.js`: Renders the root component into the DOM.
- `public/`: Contains static assets and the `index.html` file used as the template for the React application.

## Getting Started

To run this project locally on your machine, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

    ```
    git clone https://github.com/mohitkaninwal/to-do-app1.git
    ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm or yarn:

    ```
    cd to-do-app1
    npm install
    ```

    or

    ```
    cd to-do-app1
    yarn install
    ```

3. **Run the Development Server**: Start the development server to run the React application locally:

    ```
    npm run dev
    ```

    or

    ```
    yarn start
    ```

4. **Explore and Use the App**: Once the development server is running, open your web browser and navigate to `http://localhost:3000` to view the React To-Do App. You can now add, edit, mark as complete, and delete tasks as needed.

## Contributing

Contributions to this project are welcome! If you have any suggestions, improvements, or bug fixes, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
