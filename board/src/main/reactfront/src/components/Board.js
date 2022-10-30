import React from 'react'

const Board = ({board,deleteBoard}) => {
  return (
    <tr key={board.id}>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{board.id}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{board.title}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{board.content}</div>
        </td>
        <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
            <button  className='text-indigo-600 hover:text-indigo-900 hover:cursor-pointer px-4'>수정</button>
            <button onClick={(e,id)=>deleteBoard(e,board.id) }
                className='text-indigo-600 hover:cursor-pointer px-4'>삭제</button>
        </td>
    </tr>
  )
}

export default Board