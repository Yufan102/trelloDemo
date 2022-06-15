package com.group7.group7trello.Services;

import com.group7.group7trello.Models.User;
import com.group7.group7trello.Repositories.UserRepository;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User getUser(String email) {
        User user = null;
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if(optionalUser.isPresent())
        {
            user = optionalUser.get();
        }
        return user;
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }
    
    @Override
    public User resetUserPassword(Long id, String new_password) {
        User currentUser = userRepository.findById(id).get();
        currentUser.setPassword(new_password);
        return userRepository.save(currentUser);
    }
    
    public void deleteUser(User user){
        userRepository.delete(user);
    }
}
