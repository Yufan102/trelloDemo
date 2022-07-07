package com.group7.group7trello.Repositories;

import com.group7.group7trello.Models.Workspace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkspaceRepository extends JpaRepository<Workspace, Long> {
    @Query(nativeQuery = true, value = "SELECT DISTINCT w.id, w.name FROM workspace w JOIN (user_role ur, users u) ON w.id = ur.workspace_id AND :id = ur.user_id")
    List<Workspace> findAllByUserRole(@Param("id") Long id);

    @Query(nativeQuery = true, value = "UPDATE workspace SET name = ':name' WHERE id = :id")
    boolean updateWorkspaceName(@Param("id") Long id, @Param("name") String name);
}