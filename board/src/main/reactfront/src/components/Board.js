import React from 'react'
import { useNavigate } from 'react-router-dom';

const Board = ({ board, deleteBoard }) => {
    const navigate = useNavigate();
    const editBoard = (e,id) => {
        e.preventDefault();
        navigate(`/updateBoard/${id}`);
    }
  return (
    <tr key={board.id}>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{board.id}</div>
        </td>
        <td className='text-left px-6 py-4 '>
            <div className='text-sm text-gray-500 whitespace-nowrap text-ellipsis w-60 overflow-hidden'>{board.title}</div>
        </td>
        <td className='text-left px-6 py-4 '>
            <div className='text-sm text-gray-500 whitespace-nowrap text-ellipsis w-80 overflow-hidden'>{board.content}</div>
        </td>
        <td className='text-right px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{board.lastUpdatedDate}</div>
        </td>
        <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
            <button
                onClick={(e,id)=>editBoard(e,board.id)}  
                className='text-indigo-600 hover:text-indigo-900 hover:cursor-pointer px-4'>수정
            </button>
            <button onClick={(e,id)=>deleteBoard(e,board.id) }
                  className='text-indigo-600 hover:cursor-pointer px-4'>삭제
            </button>
        </td>
    </tr>
  )
}

export default Board