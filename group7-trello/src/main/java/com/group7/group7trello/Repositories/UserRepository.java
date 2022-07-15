package com.group7.group7trello.Repositories;

import com.group7.group7trello.Models.User;
import com.group7.group7trello.Models.Workspace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    @Query(nativeQuery = true, value = "SELECT DISTINCT u.* FROM users u JOIN (user_role ur, workspace w) ON u.id = ur.user_id AND :id = ur.workspace_id")
    List<User> findUsersByWorkspace(@Param("id") Long id);
}
