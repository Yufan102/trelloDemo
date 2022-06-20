package com.group7.group7trello.Security;

import com.group7.group7trello.Models.Authorization;
import com.group7.group7trello.Services.AuthorizationService;
import com.group7.group7trello.Services.AuthorizationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;


import javax.servlet.http.HttpServletRequest;

import static java.util.Collections.emptyList;
import java.util.UUID;

@Service
public class TokenService implements AuthenticationProviders {

    @Autowired
    AuthorizationService authorizationService;

    @Override
    public Authentication getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(AUTHENTICATE_HEADER_STRING);

        if(token != null && authorizationService.isValid(token)) {
            String UUID = authorizationService.getUUIDFromToken(token);
            String email = authorizationService.getByUUID(UUID).getUser().getEmail();

            return new UsernamePasswordAuthenticationToken(email, null, emptyList());
        } else{
            return null;
        }

    }

    public String generateToken() {
        return UUID.randomUUID().toString();
    }
}
