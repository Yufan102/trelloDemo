package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Authorization;
import com.group7.group7trello.Models.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public interface AuthorizationService {
    public Authorization getByUUID(String UUID);

    public Authorization getByUser(User user);
    public Authorization getLatestByUser(User user);
    public Authorization addAuthorization(Authorization authorization);
    public Boolean isValid(String token);
    public String getUUIDFromToken(String token);
}
