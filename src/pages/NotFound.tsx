import React from 'react'

const NotFound:React.FC = () => {
  return (
    <main className='min-h-screen grid place-items-center'>
        <div className="flex flex-col items-center">
            <h1 className='text-6xl font-bold text-blue-600'>404</h1>
            <p>Page Not Found</p>
        </div>
    </main>
  )
}

export default NotFound