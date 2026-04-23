import { Announcement } from '@/types/announcements'

type Props = {
  announcements: Announcement[]
}

export default function AnnouncementList({ announcements }: Props) {
  if (announcements.length === 0) {
    return <p className="text-gray-500">No announcements yet.</p>
  }

  return (
    <div className="space-y-4">
      {announcements.map((announcement) => (
        <div key={announcement.id} className="rounded-xl border p-4 shadow-sm bg-white">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">{announcement.title}</h3>
            <span className="rounded bg-gray-100 px-2 py-1 text-xs uppercase">
              {announcement.role}
            </span>
          </div>

          <p className="mb-3 text-gray-700">{announcement.content}</p>

          <div className="text-sm text-gray-500">
            <p><strong>Author:</strong> {announcement.author}</p>
            <p><strong>Date:</strong> {announcement.createdAt}</p>
          </div>
        </div>
      ))}
    </div>
  )
}