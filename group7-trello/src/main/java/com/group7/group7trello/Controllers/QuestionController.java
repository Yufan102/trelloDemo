package com.group7.group7trello.Controllers;
import com.group7.group7trello.Models.Questions;
import com.group7.group7trello.Models.SecurityQuestion;
import com.group7.group7trello.Models.User;
import com.group7.group7trello.Services.QuestionsService;
import com.group7.group7trello.Services.SecurityQuestionService;
import com.group7.group7trello.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@RestController
@RequestMapping("/api/question")
public class QuestionController {
    @Autowired
    SecurityQuestionService securityQuestionService;

    @Autowired
    QuestionsService questionsService;

    @Autowired
    UserService userService;


    @PostMapping(value = "/forget/{email}/{ans}")
    public Boolean securityQuestionCorrect(@PathVariable("ans") String ans, @PathVariable("email") String email){
        User user = userService.getUserByEmail(email);

        SecurityQuestion securityQuestion = user.getSecurity_question();
        return securityQuestion.getAnswer().equals(ans);
    }

    @PostMapping(value = "/create/{questionID}/{ans}")
    public Long setSecurityQuestion(@PathVariable("questionID") Long questionID, @PathVariable("ans") String ans){
        SecurityQuestion securityQuestion = new SecurityQuestion();
        Questions questions = questionsService.getByID(questionID);
        securityQuestion.setAnswer(ans);
        securityQuestion.setQuestion(questions);

        return securityQuestionService.createSecurityQuestion(securityQuestion).getId();
    }

    @PostMapping(value = "/getAll")
    public List<Questions> getAllQuestions(){
        return questionsService.getAllQuestions();
    }
}
