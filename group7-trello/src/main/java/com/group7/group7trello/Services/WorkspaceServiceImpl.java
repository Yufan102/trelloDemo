package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Workspace;
import com.group7.group7trello.Repositories.WorkspaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class WorkspaceServiceImpl implements  WorkspaceService {
    @Autowired
    private WorkspaceRepository workspaceRepository;

    @Override
    public Optional<Workspace> getByID(Long id) {
        return workspaceRepository.findById(id);
    }

    @Override
    public Workspace add(Workspace workspace) {
        return workspaceRepository.save(workspace);
    }

    @Override
    public Map<String, Boolean> delete(Workspace workspace) {
        HashMap<String, Boolean> map = new HashMap<>();
        workspaceRepository.delete(workspace);
        map.put("operation",true);
        return map;
    }

    @Override
    public List<Workspace> findAll() {
        return workspaceRepository.findAll();
    }


}
