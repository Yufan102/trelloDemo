package com.group7.group7trello.Services;
import com.group7.group7trello.Models.SecurityQuestion;
import org.springframework.stereotype.Service;


@Service
public interface SecurityQuestionService {
    public String getQuestionByEmail(String email);
    public String getAnsByEmail(String email);
    public void addQuestion(String question,String Email);
    public SecurityQuestion createSecurityQuestion(SecurityQuestion securityQuestion);
}
