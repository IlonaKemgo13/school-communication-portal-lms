'use client'

import { useState } from 'react'

type Announcement = {
  id: number
  title: string
  content: string
}

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function handleAdd() {
    if (!title.trim() || !content.trim()) return

    const newAnnouncement: Announcement = {
      id: Date.now(),
      title,
      content,
    }

    setAnnouncements([newAnnouncement, ...announcements])
    setTitle('')
    setContent('')
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
          <p className="mt-2 text-sm text-gray-600">
            Create and view school announcements here.
          </p>
        </div>

        <div className="mb-8 rounded-2xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Add Announcement
          </h2>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter announcement title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                placeholder="Write the announcement content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <button
              onClick={handleAdd}
              className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Post Announcement
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Latest Announcements
          </h2>

          {announcements.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-gray-500">
              No announcements yet.
            </div>
          ) : (
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-5"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {announcement.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{announcement.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}