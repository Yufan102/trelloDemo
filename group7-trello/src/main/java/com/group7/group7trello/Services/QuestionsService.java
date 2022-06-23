package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Questions;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface QuestionsService{
    public Questions getByID(Long id);

    public List<Questions> getAllQuestions();
}
