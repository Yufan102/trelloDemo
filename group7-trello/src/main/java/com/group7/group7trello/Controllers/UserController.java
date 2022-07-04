package com.group7.group7trello.Controllers;
import com.group7.group7trello.Models.*;

import com.group7.group7trello.Security.TokenService;
import com.group7.group7trello.Services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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

    @Autowired
    QuestionsService questionsService;

    @Autowired
    SecurityQuestionService securityQuestionService;

    @Autowired
    WorkspaceService workspaceService;

    @Autowired
    UserRoleService userRoleService;

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

    @PostMapping(value = "/login", consumes = "application/json", produces = "application/json")
    public Map<String,String> login(@RequestBody Map<String, String> loginInfo){
        HashMap<String,String>returnInfo = new HashMap<>();
        String email = loginInfo.get("email");
        String password = loginInfo.get("password");

        User u = userService.getUserByEmail(email);
        if(u == null || !u.getPassword().equals(password)) {
            returnInfo.put("UUID","");
            return returnInfo;
        }

        Authorization testIfUserIsAlreadyValid = authorizationService.getLatestByUser(u);
        if(testIfUserIsAlreadyValid != null && authorizationService.isValid(testIfUserIsAlreadyValid.getUuid())) {
            returnInfo.put("UUID",testIfUserIsAlreadyValid.getUuid());
            return returnInfo;
        }

        String UUID = tokenService.generateToken();

        Calendar c = Calendar.getInstance();
        c.setTime(new Date());
        c.add(Calendar.HOUR_OF_DAY, 12);

        Authorization a = new Authorization(u, UUID, c.getTime());
        authorizationService.addAuthorization(a);

        returnInfo.put("UUID",UUID);
        return returnInfo;
    }

    @PostMapping(value = "/signup", consumes = "application/json", produces = "application/json")
    public Map<String,String> signup(@RequestBody Map<String, String> signupInfo){
        HashMap<String,String>returnInfo = new HashMap<>();
        String first_name = signupInfo.get("first_name");
        String last_name = signupInfo.get("last_name");
        String email = signupInfo.get("email");
        String password = signupInfo.get("password");
        String answer = signupInfo.get("answer");
        String question = signupInfo.get("question");

        if( userService.getUserByEmail(email) != null) {
            returnInfo.put("UUID","");
            return returnInfo;
        }

        SecurityQuestion sq = new SecurityQuestion();
        sq.setAnswer(answer);
        sq.setQuestion(questionsService.getByID(Long.parseLong(question)));
        securityQuestionService.createSecurityQuestion(sq);


        User u = new User();
        u.setFirst_name(first_name);
        u.setLast_name(last_name);
        u.setEmail(email);
        u.setPassword(password);
        u.setSecurity_question(sq);
        userService.createUser(u);


        // make workspace called first_name last_name first workspace
        Workspace w = new Workspace();
        w.setName(first_name + " " + last_name + " first workspace");
        workspaceService.add(w);

        // create user role entry
        UserRole ur = new UserRole();
        ur.setUser(u);
        ur.setWorkspace(w);
        userRoleService.createUserRole(ur);

        returnInfo.put("email", email);
        returnInfo.put("password", password);
        return login(returnInfo);
    }
}
