package com.group7.group7trello.Security;

import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;

public interface AuthenticationProviders {
    public final String AUTHENTICATE_HEADER_STRING = "Authorization";

    public Authentication getAuthentication(HttpServletRequest request);
}
