package com.group7.group7trello.Repositories;

import com.group7.group7trello.Models.Authorization;
import com.group7.group7trello.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface AuthRepository extends JpaRepository<Authorization, Long> {

    Optional<Authorization> findByUUID(String UUID);
    Optional<Authorization> findByUser(User user);
    List<Optional<Authorization>> findAllByUser(User user);
}
