import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Todo from "./TodoApp"

export default function App() {
  return (
    <div className="App">
      {Todo()}
    </div>
  );
}
