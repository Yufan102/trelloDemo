package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Board;
import com.group7.group7trello.Models.Lists;
import com.group7.group7trello.Repositories.ListsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ListsServiceImpl implements ListsService {
    @Autowired
    private ListsRepository listsRepository;

    @Override
    public Optional<Lists> getByName(String name) {
        return listsRepository.findByName(name);
    }

    @Override
    public Lists add(Lists list) {
        return listsRepository.save(list);
    }

    @Override
    public void initialize(Board board) {
        Lists todo = new Lists("todo", 0, board);
        Lists doing = new Lists("doing", 1, board);
        Lists done = new Lists("done", 2, board);

        add(todo);
        add(doing);
        add(done);
    }
}
