package com.group7.group7trello.Services;

import com.group7.group7trello.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public User getUser(String email);
    public User createUSer(User u);
    public User resetUserPassword(Long id);
}
