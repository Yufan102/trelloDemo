package com.group7.group7trello;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;


@SpringBootTest
class Group7TrelloApplicationTests {

    @Autowired
    DataSource csci3130_group07;

    @Testcis
    void contextLoads() {
        // Add tests for controllers and services here when they are made?
    }

    @Test
    void dbConecction() {
        try (Connection c = csci3130_group07.getConnection()) {
            assert true;
        } catch (SQLException e) {
            assert false;
        }
    }

    void register() {

    }

    void login() {

    }
}
