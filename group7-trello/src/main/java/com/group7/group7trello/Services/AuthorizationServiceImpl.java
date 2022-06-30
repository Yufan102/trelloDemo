package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Authorization;
import com.group7.group7trello.Models.User;
import com.group7.group7trello.Repositories.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class AuthorizationServiceImpl implements AuthorizationService {
    @Autowired
    private AuthRepository authRepository;

    public Authorization getByUUID(String UUID) {
        Authorization a = null;
        Optional<Authorization> optionalAuth = authRepository.findByUUID(UUID);
        if(optionalAuth.isPresent())
        {
            a = optionalAuth.get();
        }
        return a;
    }

    public Authorization getByUser(User user) {
        Authorization a = null;
        Optional<Authorization> optionalAuth = authRepository.findByUser(user);
        if(optionalAuth.isPresent())
        {
            a = optionalAuth.get();
        }
        return a;
    }

    public Authorization getLatestByUser(User user) {
        List<Optional<Authorization>> a = authRepository.findAllByUser(user);
        return a.get(a.size() - 1).get();
    }

    public Authorization addAuthorization(Authorization authorization) {
        return authRepository.save(authorization);
    }

    public Boolean isValid(String token) {
        String UUID = this.getUUIDFromToken(token);

        Authorization user = this.getByUUID(UUID);

        Date t = new Date();
        if(t.before(user.getExpiration())) {
            return true;
        } else {
            return false;
        }

    }

    public String getUUIDFromToken(String token) {
        return token.replace(" ", "").replace("Bearer", "");
    }
}
