package com.group7.group7trello.Services;

import com.group7.group7trello.Models.UserRole;
import com.group7.group7trello.Repositories.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRoleServiceImpl implements UserRoleService {

    @Autowired
    UserRoleRepository userRoleRepository;

    @Override
    public UserRole createUserRole(UserRole ur) {
        return userRoleRepository.save(ur);
    }
}
