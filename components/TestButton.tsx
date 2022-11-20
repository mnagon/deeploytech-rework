import { FC } from 'react'
import { useTheme } from 'next-themes'

const TestButton: FC = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <button onClick={handleClick} className='rounded bg-primary py-2 px-4 text-white'>
      {' '}
      Click me{' '}
    </button>
  )
}

export default TestButton
