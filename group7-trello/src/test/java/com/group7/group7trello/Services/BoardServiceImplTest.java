package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Board;
import com.group7.group7trello.Models.User;
import com.group7.group7trello.Repositories.BoardRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
class BoardServiceImplTest {

    @Mock
    @Autowired
    private BoardRepository boardRepository;

    @InjectMocks
    private BoardServiceImpl boardService = new BoardServiceImpl();

    @Test
    void getByID() {
        Optional<Board> board = Optional.of(new Board());
        Mockito.when(boardRepository.findById(anyLong())).thenReturn(board);
        assertNotNull(boardService.getByID(anyLong()));
    }

    @Test
    void add() {
        Board board = new Board();

        Mockito.when(boardRepository.save(board)).thenReturn(board);
        Board newB = boardService.add(board);
        assertNotNull(newB);
    }

    @Test
    void delete() {
        Board board = new Board();
        boardService.delete(board);
    }

    @Test
    void deleteByID() {
        Board board = new Board();
        boardService.deleteByID(anyLong());
    }

    @Test
    void findAll() {
        List<Board>boards = new ArrayList<>();
        Mockito.when(boardRepository.findAll()).thenReturn(boards);
        assertNotNull(boardService.findAll());
    }
}