package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Board;
import com.group7.group7trello.Models.Lists;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ListsService {

    public Optional<Lists> getByName(String name);

    public Lists add(Lists list);

    public void initialize(Board board);
}
