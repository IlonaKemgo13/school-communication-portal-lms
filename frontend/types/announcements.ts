export type Announcement = {
  id: number
  title: string
  content: string
  author: string
  role: 'admin' | 'teacher'
  createdAt: string
}