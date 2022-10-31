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

//생성
    @Override
    public Board createBoard(Board board) {
        BoardEntity boardEntity = new BoardEntity();

        BeanUtils.copyProperties(board,boardEntity);
        boardRepository.save(boardEntity);
        return board;
    }
//조회
    @Override
    public List<Board> getAllBoards() {
        List<BoardEntity> boardEntities
                = boardRepository.findAll();
        List<Board> boards = (List<Board>) boardEntities
                .stream()
                .map(bbb->new Board(
                        bbb.getId(),
                        bbb.getTitle(),
                        bbb.getContent(),
                        bbb.getCreateDate(),
                        bbb.getLastUpdatedDate())

                )
                .collect(Collectors.toList());
        return boards;
    }
//삭제
    @Override
    public boolean deleteBoard(Long id) {
        BoardEntity boardEntity = boardRepository.findById(id).get();
        boardRepository.delete(boardEntity);
        return true;
    }
//수정
    @Override
    public Board getBoardById(Long id) {
        BoardEntity boardEntity = boardRepository.findById(id).get();
        Board board = new Board();
        BeanUtils.copyProperties(boardEntity,board);
        return board;
    }

    @Override
    public Board updataBoard(Long id, Board board) {
        BoardEntity boardEntity = boardRepository.findById(id).get();
        boardEntity.setTitle(board.getTitle());
        boardEntity.setContent(board.getContent());

        boardRepository.save(boardEntity);
        return board;
    }

}
