package com.example.board.service;

import com.example.board.entity.BoardEntity;
import com.example.board.model.Board;
import com.example.board.repository.BoardRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService {
    private BoardRepository boardRepository;

    public BoardServiceImpl(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    @Override
    public Board createBoard(Board board) {
        BoardEntity boardEntity = new BoardEntity();

        BeanUtils.copyProperties(board,boardEntity);
        boardRepository.save(boardEntity);
        return board;
    }
}
