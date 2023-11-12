import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "./redux/slice/Todo.js";

function App() {
    const dispatch = useDispatch()
    const state = useSelector((state)=>state)

    console.log("State", state)

    if(state.todo.isLoading){
        return <h1>Loading.....</h1>
    }
  return (
    <div>
        <button onClick={(e) => dispatch(fetchTodos())}>Fetch Data</button>
        {
            state.todo.data && state.todo.data.map(e =>
                <div key={e.id}>
                    <li>{e.title}</li>
                </div>
            )
        }

    </div>
  )
}

export default App
