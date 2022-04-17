import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div>
      Такой страницы не существует.
      <Link to="/">Вернуться на главную</Link>
    </div>
  )
}
