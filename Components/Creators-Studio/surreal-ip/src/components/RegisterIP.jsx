import React, { useState } from 'react'

export default function RegisterIP({ onRegister }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return
    onRegister({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: '24px 0', padding: 16, border: '1px solid #eee' }}>
      <h3>Register New IP</h3>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <button type="submit">Register</button>
    </form>
  )
}
