package com.group7.group7trello.Security;

import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;

public interface AuthenticationProviders {
    public Authentication getAuthentication(HttpServletRequest request);
}
