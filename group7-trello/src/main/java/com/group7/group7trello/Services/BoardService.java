package com.group7.group7trello.Services;
import com.group7.group7trello.Models.Board;
import com.group7.group7trello.Models.Workspace;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public interface BoardService {

    public Optional<Board> getByID(Long id);

    public Board add(Board board);

    public void delete(Board board);

    public void deleteByID(Long id);

    public List<Board> findAll();

    public void addWorkspace(Workspace workspace, Board board);
}
