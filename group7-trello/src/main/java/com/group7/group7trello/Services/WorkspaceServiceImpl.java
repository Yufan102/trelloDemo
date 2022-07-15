package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Board;
import com.group7.group7trello.Models.User;
import com.group7.group7trello.Models.UserRole;
import com.group7.group7trello.Models.Workspace;
import com.group7.group7trello.Repositories.UserRepository;
import com.group7.group7trello.Repositories.WorkspaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class WorkspaceServiceImpl implements  WorkspaceService {
    @Autowired
    private WorkspaceRepository workspaceRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRoleService userRoleService;

    @Override
    public Optional<Workspace> getByID(Long id) {
        return workspaceRepository.findById(id);
    }

    @Override
    public Workspace createWorkspace(Workspace workspace) {
        Workspace w = workspaceRepository.save(workspace);

        UserRole ur = new UserRole();
        ur.setWorkspace(w);
        ur.setUser(userService.loggedInUser());
        userRoleService.createUserRole(ur);

        return w;
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


    @Override
    public List<Workspace> findAllByUserRole() {
        return workspaceRepository.findAllByUserRole(userService.loggedInUser().getId());
    }

    @Override
    public List<User> findUsersByWorkSpaceId(Long id) {
        return userRepository.findUsersByWorkspace(id);
    }
}
