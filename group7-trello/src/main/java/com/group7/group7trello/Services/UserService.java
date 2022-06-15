package com.group7.group7trello.Services;

import com.group7.group7trello.Models.User;
import com.group7.group7trello.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public User getUser(String email);
    public User createUser(User u);
    //TODO rest method for other entity
    public User resetUserPassword(Long id, String new_password);
    public void deleteUser(User user);
}
