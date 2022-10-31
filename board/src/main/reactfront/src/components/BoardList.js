import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BoardService from '../services/BoardService';
import Board from './Board';

const BoardList = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true)
    const [boards, setBoards] = useState({
        id: '',
        title: '',
        content: '',
    })

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await BoardService.getBoards();
                setBoards(response.data);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        }
        fetchData();
    }, [])
    
    const deleteBoard = (e, id) => {
        e.preventDefault();
        BoardService.deleteBoard(id).then((res) => {
            if (boards) {
                setBoards((prevElement) => {
                    return prevElement.filter((board) => board.id !== id);
                });
            }
        });
    };

  return (
    <div className='container mx-auto my-8'>
        <div className='h-12 mb-3'>
            <button
                onClick={() => navigate('/addBoard')}
                className='rounded text-white font-semibold bg-indigo-400 py-2 px-6 hover:bg-indigo-600 '
            >
                글 추가
            </button>  
        </div>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-50 '>
                    <tr>
                        <th className='text-left font-medium text-gray-500 tracking-wider py-3 px-6'>#</th>
                        <th className='text-left font-medium text-gray-500 tracking-wider py-3 px-6'>제 목</th>
                        <th className='text-left font-medium text-gray-500 tracking-wider py-3 px-6'>내 용</th>
                        <th className='text-right font-medium text-gray-500 tracking-wider py-3 px-6'>최근수정일</th>
                        <th className='text-right font-medium text-gray-500 tracking-wider py-3 px-6'>##</th>
                    </tr>
                </thead>
                    {!loading && (
                      <tbody className='bg-white'>
                        {boards.map((board) => (
                            <Board board={board} deleteBoard={deleteBoard} key={board.id} />
                        ))}
                    </tbody>)}
            </table>
        </div>
    </div>
  )
}

export default BoardList