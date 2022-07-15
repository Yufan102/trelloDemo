package com.group7.group7trello.Repositories;

import com.group7.group7trello.Models.Lists;
import com.group7.group7trello.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ListsRepository extends JpaRepository<Lists, Long>  {
    Optional<Lists> findByName(String name);

}
