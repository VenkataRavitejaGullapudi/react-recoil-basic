import "./App.css";
import { useRecoilState, useRecoilStateLoadable } from "recoil";
import { todosAtomFamily } from "./store/atoms/todo";

function Todos() {
  return (
    <>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      {/* This will not make backend call */}
      <Todo id={1} />
    </>
  );
}

function Todo({ id }: { id: number }) {
  //    const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

  if (todo.state === "loading") return <div>Loading...</div>;
  else if (todo.state === "hasValue")
    return (
      <>
        {todo.contents?.title}
        {todo.contents?.description}
        <br />
      </>
    );
  else if(todo.state === "hasError") 
    return <div>Error while getting data from backend</div>
}

export default Todos;
