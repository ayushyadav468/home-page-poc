type Todo = {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

const getTodoData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();

  return data as Todo[];
}

export const TodoCard = async () => {
  const todosData: Todo[] = await getTodoData();

  return (
    <>
      {todosData && todosData.length > 0 ? todosData.map((todo, index) => (
        <div key={index} className='w-[200px] border border-gray-200 p-2 rounded hover:shadow'>
          <h3 className="text-black font-bold text-sm">{todo.title}</h3>
          <p className="text-black text-xs">Id: {todo.id}</p>
          <p className="text-black text-xs">User Id: {todo.userId}</p>
          <p className="text-black text-xs">{todo.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
      )) : <p className="text-center">No data, please wait...</p>
      }
    </>
  )
}