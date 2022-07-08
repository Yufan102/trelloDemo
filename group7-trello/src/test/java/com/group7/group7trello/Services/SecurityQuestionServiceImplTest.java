package com.group7.group7trello.Services;

import com.group7.group7trello.Models.SecurityQuestion;
import com.group7.group7trello.Repositories.SecurityQuestionRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.beans.factory.annotation.Autowired;

import java.security.Provider;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
class SecurityQuestionServiceImplTest {
    @Mock
    @Autowired
    private SecurityQuestionRepository securityQuestionRepository;

    @InjectMocks
    private SecurityQuestionServiceImpl securityQuestionService = new SecurityQuestionServiceImpl();


    @Test
    void createSecurityQuestion() {
        SecurityQuestion securityQuestion = new SecurityQuestion();
        Mockito.when(securityQuestionRepository.save(any())).thenReturn(securityQuestion);

        SecurityQuestion sq = securityQuestionService.createSecurityQuestion(securityQuestion);
        assertNotNull(sq);
    }
}