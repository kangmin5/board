package com.example.board.service;


import com.example.board.model.Board;

import java.util.List;

public interface BoardService {

    Board createBoard(Board board);

    List<Board> getAllBoards();

    boolean deleteBoard(Long id);


    Board getBoardById(Long id);

    Board updataBoard(Long id, Board board);
}
