package com.example.board.controller;

import com.example.board.model.Board;
import com.example.board.service.BoardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3002")
@RestController
@RequestMapping("/api/v1/")
public class BoardController {
    private final BoardService boardService;

    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @PostMapping("/board")
    public Board createBoard(@RequestBody Board board){
        return boardService.createBoard(board);
    }
    @GetMapping("/board")
    public List<Board> getAllBoards(){
        return boardService.getAllBoards();
    }
    @DeleteMapping("/board/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteBoard(@PathVariable Long id){
        boolean deleted = false;
        deleted = boardService.deleteBoard(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",deleted);
        return ResponseEntity.ok(response);
    }
    @GetMapping("/board/{id}")
    public ResponseEntity<Board> getBoardById(@PathVariable Long id){
        Board board = null;
        board = boardService.getBoardById(id);
        return ResponseEntity.ok(board);
    }
    @PutMapping("/board/{id}")
    public ResponseEntity<Board> updateBoard(@PathVariable Long id,@RequestBody Board board){
        board = boardService.updataBoard(id,board);
        return ResponseEntity.ok(board);
    }
}
