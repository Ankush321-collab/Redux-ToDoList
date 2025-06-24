
## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name/state
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Usage

- Add a new todo using the input field and "ADD" button.
- Mark a todo as complete by clicking the "Complete" button.
- Undo completion by clicking the "undo" button.

## Technologies Used

- React
- Redux Toolkit
- React Redux
- Vite

## Folder Details

- `redux-toolkit/TodoSlice.jsx`: Redux Toolkit slice for todos (actions and reducer).
- `todo-w-redux/`: Components for adding and displaying todos using Redux Toolkit.
- `App.jsx`: Main app component with routing.
- `main.jsx`: Entry point, sets up Redux provider.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Feel free to customize this README with your project’s name, description, and GitHub URL!**
