export const FetchTodo = async ()=> {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/TodoList`)

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    
    return res.json();

  } catch (error) {
    console.log(error)
  }
}


export const DeleteTodo = async (id)=>{
  try {
    await fetch(`${import.meta.env.VITE_API_URL}/TodoList/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.log(error)
  }
}

export const CompleteTodo = async (id)=>{
  try {
    await fetch(`${import.meta.env.VITE_API_URL}/TodoList/${id}`, {
      method: 'PATCH',
    })
  } catch (error) {
    console.log(error)
  }
}