import React, { useState } from 'react'
import BoardService from '../services/BoardService';

const AddBoard = () => {
    const [board, setBoard] = useState({
        id:"",
        title : "",
        content : ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setBoard({...board, [e.target.name]: value });
        
    }
    const saveBoard = (e) => {
        e.preventDefault();
        BoardService.saveBoard(board)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
            
    }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b mt-8'>
        <div className='px-8 py-8'>
            <div className=' font-thin text-2xl tracking-wider'>
                <h1>글 추가</h1>
            
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className=' block text-gray-600 text-sm font-normal'>글 제목</label>
                      <input
                            type="text"
                            className='h-10 w-96 border mt-2 px-3 py-3'
                            name='title'
                            value={board.title}
                            onChange={(e) =>handleChange(e)}
                      />
                </div>
                <div className='items-center justify-center h-full w-full my-4'>
                    <label className=' block text-gray-600 text-sm font-normal'>글 내용</label>
                      <input
                            type="text"
                            className='h-10 w-96 border mt-2 px-3 py-3'
                            name='content'
                            value={board.content}
                            onChange={(e) =>handleChange(e)}
                      />
                </div>
                <div className='items-center justify-center h-full w-full my-4 space-x-4'>
                      <button onClick={saveBoard} className='text-white text-sm bg-green-400 py-2 px-4 rounded hover:bg-green-700'>Save</button>
                      <button className='text-white text-sm bg-red-400 py-2 px-4 rounded hover:bg-red-700'>Clear</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBoard