package com.group7.group7trello.Services;
import com.group7.group7trello.Models.SecurityQuestion;
import com.group7.group7trello.Models.User;
import com.group7.group7trello.Repositories.SecurityQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SecurityQuestionServiceImpl implements SecurityQuestionService {

    @Autowired
    private SecurityQuestionRepository securityQuestionRepository;

    @Override
    public String getQuestionByEmail(String email) {
        UserService userService = new UserServiceImpl();
        User user = userService.getUserByEmail(email);

        SecurityQuestion securityQuestion = user.getSecurity_question();

        return securityQuestion.getQuestion().getQuestion();
    }

    @Override
    public String getAnsByEmail(String email) {
        UserServiceImpl userService = new UserServiceImpl();
        User user = userService.getUserByEmail(email);

        SecurityQuestion securityQuestion = user.getSecurity_question();

        return securityQuestion.getAnswer();
    }

    @Override
    public SecurityQuestion createSecurityQuestion(SecurityQuestion securityQuestion) {
        return securityQuestionRepository.save(securityQuestion);
    }
}
