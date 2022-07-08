package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Questions;
import com.group7.group7trello.Repositories.QuestionsRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyLong;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
class QuestionServiceImplTest {
    @Mock
    @Autowired
    QuestionsRepository questionsRepository;

    @InjectMocks
    QuestionServiceImpl questionService = new QuestionServiceImpl();

    @Test
    void getByID() {
        Questions questions = new Questions();
        Mockito.when(questionsRepository.getById(anyLong())).thenReturn(questions);
        assertNotNull(questionService.getByID(anyLong()));
    }

    @Test
    void getAllQuestions() {
        List<Questions> questionsList = new ArrayList<>();
        Mockito.when(questionsRepository.findAll()).thenReturn(questionsList);
        assertNotNull(questionService.getAllQuestions());
    }
}