package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Authorization;
import com.group7.group7trello.Models.User;
import com.group7.group7trello.Repositories.AuthRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
class AuthorizationServiceImplTest {

    @Mock
    @Autowired
    private AuthRepository authRepository;

    @InjectMocks
    private AuthorizationService authorizationService = new AuthorizationServiceImpl();

    @Test
    void getByUUID() {
        Optional<Authorization> auth = Optional.of(new Authorization());
        Mockito.when(authRepository.findByUUID(anyString())).thenReturn(auth);

        assertNotNull(authorizationService.getByUUID(anyString()));
    }

    @Test
    void getByUser() {
        User user = new User();
        Optional<Authorization> auth = Optional.of(new Authorization());
        Mockito.when(authRepository.findByUser(any())).thenReturn(auth);

        assertNotNull(authorizationService.getByUser(user));
    }

    @Test
    void addAuthorization() {
        Authorization auth = new Authorization();
        Mockito.when(authRepository.save(any())).thenReturn(auth);

        assertNotNull(authorizationService.addAuthorization(any()));
    }


    @Test
    void getUUIDFromToken() {
        String target = "1-23- 123-Bearer";
        String result = "1-23-123-";

        assertEquals(result, authorizationService.getUUIDFromToken(target));

    }
}