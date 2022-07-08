package com.group7.group7trello.Services;

import com.group7.group7trello.Models.UserRole;
import com.group7.group7trello.Repositories.SecurityQuestionRepository;
import com.group7.group7trello.Repositories.UserRepository;
import com.group7.group7trello.Repositories.UserRoleRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
class UserRoleServiceImplTest {

    @Mock
    @Autowired
    private UserRoleRepository userRoleRepository;

    @InjectMocks
    private UserRoleServiceImpl roleService = new UserRoleServiceImpl();

    @Test
    void createUserRole() {
        UserRole userRole = new UserRole();
        Mockito.when(userRoleRepository.save(userRole)).thenReturn(userRole);
        assertNotNull(roleService.createUserRole(userRole));
    }
}