package com.group7.group7trello.Services;

import com.group7.group7trello.Models.User;
import com.group7.group7trello.Repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {

    @Mock
    @Autowired
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService = new UserServiceImpl();

    @Test
    void getUserByEmail() {
    }

    @Test
    void createUser() {
        User user = new User();
        user.setEmail("test@test.com");
        user.setFirst_name("First");
        user.setLast_name("Last");
        user.setPassword("Password");

        Mockito.when(userRepository.save(user)).thenReturn(user);

        User reUser = userService.createUser(user);
        assertNotNull(reUser);
    }

    @Test
    void resetUserPassword() {
    }

    @Test
    void getUserByID() {
    }

    @Test
    void deleteUser() {
    }

    @Test
    void addSecurityQuestion() {
    }
}