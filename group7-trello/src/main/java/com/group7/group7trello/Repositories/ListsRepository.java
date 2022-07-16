package com.group7.group7trello.Repositories;

import com.group7.group7trello.Models.Lists;
import com.group7.group7trello.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ListsRepository extends JpaRepository<Lists, Long>  {

    @Query(nativeQuery = true, value = "SELECT * FROM lists WHERE name = 'todo' AND board_id = 70 LIMIT 1")
    Optional<Lists> findByListNameAndBoardID(@Param("name") String name, @Param("id") Long id);

}
