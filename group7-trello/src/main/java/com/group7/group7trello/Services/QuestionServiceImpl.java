package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Questions;
import com.group7.group7trello.Repositories.QuestionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionsService {

    @Autowired
    private QuestionsRepository questionsRepository;

    public Questions getByID(Long id){
        return questionsRepository.getById(id);
    }

    public List<Questions> getAllQuestions(){
        return questionsRepository.findAll();
    }
}
