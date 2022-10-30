package com.example.board.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "board")

public class BoardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String content;
}
