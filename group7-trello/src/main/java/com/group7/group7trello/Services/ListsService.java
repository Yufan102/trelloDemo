package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Board;
import com.group7.group7trello.Models.Lists;
import com.group7.group7trello.Models.Ticket;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public interface ListsService {

    public Optional<Lists> getByListNameAndBoardID(String name, Long id);

    public Lists add(Lists list);

    public void initialize(Board board);
}
