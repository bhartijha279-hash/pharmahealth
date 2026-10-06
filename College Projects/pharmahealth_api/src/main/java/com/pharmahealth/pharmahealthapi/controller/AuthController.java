package com.pharmahealth.pharmahealthapi.controller;

import com.pharmahealth.pharmahealthapi.dto.AuthRequest;
import com.pharmahealth.pharmahealthapi.dto.AuthResponse;
import com.pharmahealth.pharmahealthapi.security.JwtUtils;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    public AuthController(AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/auth/login")
    public AuthResponse login(@RequestBody AuthRequest authRequest) {

        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                authRequest.getUsername(),
                                authRequest.getPassword()
                        )
                );

        String token = jwtUtils.generateToken(authentication.getName());

        return new AuthResponse(token);
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello! Access granted via valid JWT Token.";
    }
}