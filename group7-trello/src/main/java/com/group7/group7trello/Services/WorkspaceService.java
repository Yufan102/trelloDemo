package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Workspace;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public interface WorkspaceService {
    public Optional<Workspace> getByID(Long id);

    public Workspace add(Workspace workspace);

    public Map<String, Boolean> delete(Workspace workspace);

    public List<Workspace> findAll();
}
