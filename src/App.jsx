import { useEffect, useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  // State: the list of tasks and any error message
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')

  // Load the tasks from the database when the page opens
  useEffect(() => {
    fetch('/api/tasks')
      .then((response) => {
        if (!response.ok) throw new Error('Request failed')
        return response.json()
      })
      .then((data) => setTasks(data))
      .catch(() => setError('Could not load tasks. Is the server running?'))
  }, [])

  async function addTask(text) {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text }),
    })
    const newTask = await response.json()
    setTasks([...tasks, newTask])
  }

  async function toggleTask(id) {
    const task = tasks.find((task) => task.id === id)

    await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: !task.done }),
    })

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  async function deleteTask(id) {
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const remaining = tasks.filter((task) => !task.done).length

  return (
    <main className="app">
      <Header remaining={remaining} total={tasks.length} />
      <TaskForm onAdd={addTask} />
      {error && <p className="error">{error}</p>}
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      <footer>Pratham Singh, PRN 1032211384</footer>
    </main>
  )
}

export default App
