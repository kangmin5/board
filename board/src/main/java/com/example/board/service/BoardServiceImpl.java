package com.example.board.service;

import com.example.board.entity.BoardEntity;
import com.example.board.model.Board;
import com.example.board.repository.BoardRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<Board> getAllBoards() {
        List<BoardEntity> boardEntities
                = boardRepository.findAll();
        List<Board> boards = boardEntities
                .stream()
                .map(bbb->new Board(
                        bbb.getId(),
                        bbb.getTitle(),
                        bbb.getContent()))
                .collect(Collectors.toList());
        return boards;
    }

    @Override
    public boolean deleteBoard(Long id) {
        BoardEntity board = boardRepository.findById(id).get();
        boardRepository.delete(board);
        return true;
    }
}
