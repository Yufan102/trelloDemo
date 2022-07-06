package com.group7.group7trello.Repositories;

import com.group7.group7trello.Models.UserRole;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
    @Query(nativeQuery = true, value = "DELETE FROM user_role WHERE workspace_id = :id")
    public void deleteByWorkspace(@Param("id") Long id);
}
