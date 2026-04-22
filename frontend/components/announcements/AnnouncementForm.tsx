'use client'

import { useState } from 'react'

type Props = {
  onAddAnnouncement: (announcement: {
    title: string
    content: string
    author: string
    role: 'admin' | 'teacher'
  }) => void
}

export default function AnnouncementForm({ onAddAnnouncement }: Props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [role, setRole] = useState<'admin' | 'teacher'>('admin')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!title || !content || !author) {
      alert('Please fill in all fields.')
      return
    }

    onAddAnnouncement({
      title,
      content,
      author,
      role,
    })

    setTitle('')
    setContent('')
    setAuthor('')
    setRole('admin')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold">Create Announcement</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full rounded-md border p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        className="w-full rounded-md border p-2"
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author"
        className="w-full rounded-md border p-2"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <select
        className="w-full rounded-md border p-2"
        value={role}
        onChange={(e) => setRole(e.target.value as 'admin' | 'teacher')}
      >
        <option value="admin">Admin</option>
        <option value="teacher">Teacher</option>
      </select>

      <button
        type="submit"
        className="rounded-md bg-black px-4 py-2 text-white"
      >
        Post Announcement
      </button>
    </form>
  )
}