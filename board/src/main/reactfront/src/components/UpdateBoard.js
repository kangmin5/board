import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BoardService from '../services/BoardService';

const UpdateBoard = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [board, setBoard] = useState({
        id: id,
        title: '',
        content: '',
    });

    const updateBoard = (e) => {
        e.preventDefault();
        BoardService.updateBoard(id, board)
            .then((response) => {
                navigate("/boardList");

            })
            .catch((error) => { 
                console.log(error);
            })
    }
    
    const handleChange = (e) => {
        const value = e.target.value;
        setBoard({...board, [e.target.name]: value });
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await BoardService.getBoardsById(id);
                setBoard(response.data);
            } catch (e) {
                console.log(e);
            }

        }
        fetchData();
    }, [id])

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b mt-8'>
        <div className='px-8 py-8'>
            <div className=' font-thin text-2xl tracking-wider'>
                <h1>글 수정</h1>
            
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className=' block text-gray-600 text-sm font-normal'>글 제목</label>
                      <input
                            type="text"
                            className='h-10 w-96 border mt-2 px-3 py-3 text-sm font-normal'
                            name='title'
                            value={board.title}
                            onChange={(e) =>handleChange(e)}
                      />
                </div>
                <div className='items-center justify-center h-full w-full my-4'>
                    <label className=' block text-gray-600 text-sm font-normal'>글 내용</label>
                      <input
                            type="text"
                            className='h-10 w-96 border mt-2 px-3 py-3 text-sm font-normal'
                            name='content'
                            value={board.content}
                            onChange={(e) =>handleChange(e)}
                      />
                </div>
                <div className='items-center justify-center h-full w-full my-4 space-x-4'>
                      <button onClick={updateBoard} className='text-white text-sm bg-green-400 py-2 px-4 rounded hover:bg-green-700'>Update</button>
                      <button onClick={()=>navigate('/boardList')} className='text-white text-sm bg-red-400 py-2 px-4 rounded hover:bg-red-700'>Cancel</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateBoard