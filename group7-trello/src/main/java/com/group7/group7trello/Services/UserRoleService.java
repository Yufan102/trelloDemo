package com.group7.group7trello.Services;

import com.group7.group7trello.Models.UserRole;
import org.springframework.stereotype.Service;

@Service
public interface UserRoleService {
    public UserRole createUserRole(UserRole ur);
}
