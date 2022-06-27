package com.group7.group7trello.Controllers;

import com.group7.group7trello.Models.Authorization;
import com.group7.group7trello.Models.Questions;
import com.group7.group7trello.Models.SecurityQuestion;
import com.group7.group7trello.Models.User;
import com.group7.group7trello.Repositories.QuestionsRepository;
import com.group7.group7trello.Repositories.SecurityQuestionRepository;
import com.group7.group7trello.Security.TokenService;
import com.group7.group7trello.Services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.Date;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Qualifier("userServiceImpl")
    @Autowired
    UserService userService;

    @Autowired
    TokenService tokenService;

    @Autowired
    AuthorizationService authorizationService;

    //Working
    @GetMapping("/test")
    public String testService() {
        return "Services is working";
    }

    @GetMapping(value="/getUserById/{id}",produces="application/json")
    public Optional<User> getUserByID(@PathVariable("id") Long id){
        return userService.getUserByID(id);
    }

    //Working
    @GetMapping("/{email}")
    public User getUser(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }

    //Working
    @PostMapping(value = "/create")
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }

    //Working
    //To delete a user, you have to provide the not null value in DB
    @DeleteMapping(value = "/delete")
    public void deleteUser(@RequestBody User user){
        userService.deleteUser(user);
    }

    @PostMapping(value = "/login", consumes = "application/json")
    public String login(@RequestBody Map<String, String> login){
        String email = login.get("email");
        String password = login.get("password");


        User u = userService.getUserByEmail(email);
        if(!u.getPassword().equals(password)) {
            return null;
        }

        Authorization testIfUserIsAlreadyValid = authorizationService.getByUser(userService.getUserByEmail(email));
        if(testIfUserIsAlreadyValid != null && authorizationService.isValid(testIfUserIsAlreadyValid.getUuid())) {
            return testIfUserIsAlreadyValid.getUuid();
        }

        String UUID = tokenService.generateToken();

        Calendar c = Calendar.getInstance();
        c.setTime(new Date());
        c.add(Calendar.HOUR_OF_DAY, 12);

        Authorization a = new Authorization(u, UUID, c.getTime());
        authorizationService.addAuthorization(a);

        return UUID;
    }
}
