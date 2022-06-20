package com.group7.group7trello.Services;

import com.group7.group7trello.Models.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserService {
    public User getUserByEmail(String email);

    public Optional<User> getUserByID(long id);
    public User createUser(User u);
    //TODO rest method for other entity
    public User resetUserPassword(Long id, String new_password);
    public void deleteUser(User user);
    public User addSecurityQuestion(Long id,String question, String ans);
}
