package com.group7.group7trello;

import com.group7.group7trello.Models.User;
import com.group7.group7trello.Repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

public class UserTest {

    private TestEntityManager testEntityManager;
    private UserRepository repo;

    @Test
    void addUser(){
        User user = new User();
        user.setEmail("Test@email.com");
        user.setFirst_name("A");
        user.setLast_name("B");
        user.setPassword("123");

        User savedUser = repo.save(user);



    }

}
