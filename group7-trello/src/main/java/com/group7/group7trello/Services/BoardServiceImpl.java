package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Board;
import com.group7.group7trello.Models.Workspace;
import com.group7.group7trello.Repositories.BoardRepository;
import com.group7.group7trello.Repositories.WorkspaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BoardServiceImpl implements BoardService {
    @Autowired
    private BoardRepository boardRepository;

    @Override
    public Optional<Board> getByID(Long id) {
        return boardRepository.findById(id);
    }

    @Override
    public Board add(Board board) {
        return boardRepository.save(board);
    }

    @Override
    public void delete(Board board) {
        boardRepository.delete(board);
    }

    @Override
    public void deleteByID(Long id) {
        boardRepository.deleteById(id);
    }

    @Override
    public List<Board> findAll() {
        return boardRepository.findAll();
    }

    @Override
    public void addWorkspace(Workspace workspace, Board board) {
        board.setWorkspace(workspace);
        boardRepository.save(board);
    }
}
