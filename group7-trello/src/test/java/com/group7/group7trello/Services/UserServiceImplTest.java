package com.group7.group7trello.Services;

import com.group7.group7trello.Models.SecurityQuestion;
import com.group7.group7trello.Models.User;
import com.group7.group7trello.Repositories.SecurityQuestionRepository;
import com.group7.group7trello.Repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
class UserServiceImplTest {

    @Mock
    @Autowired
    private UserRepository userRepository;

    @Mock
    @Autowired
    private SecurityQuestionRepository securityQuestionRepository;

    @InjectMocks
    private UserService userService = new UserServiceImpl();

    @Test
    void getUserByEmail() {
        Optional<User> user = Optional.of(new User());
        Mockito.when(userRepository.findByEmail(anyString())).thenReturn(user);

        assertNotNull(userService.getUserByEmail(anyString()));
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
        User user = new User();
        User newUser = new User();
        Mockito.when(userRepository.findById(anyLong())).thenReturn(Optional.of(user));
    }

    @Test
    void getUserByID() {
        User user = new User();
        Mockito.when(userRepository.findById(anyLong())).thenReturn(Optional.of(user));
        assertNotNull(userService.getUserByID(anyLong()));

    }

    @Test
    void deleteUser() {
        User user = new User();
        userService.deleteUser(user);
    }

    @Test
    void addSecurityQuestion() {
        SecurityQuestion securityQuestion = new SecurityQuestion();
        Mockito.when(securityQuestionRepository.save(any())).thenReturn(securityQuestion);
    }
}