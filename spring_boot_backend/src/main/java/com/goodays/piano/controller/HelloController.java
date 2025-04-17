package com.goodays.piano.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello World";
    }
    @GetMapping("/api/whatsup")
    public String whatsup() {
        return "Whats Up!";
    }
}
