package com.goodays.piano.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.Map;

@RestController
public class HelloController {
	String msg = "default content";
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello World";
    }
    @GetMapping("/api/whatsup")
    public String whatsup() {
        return "Whats Up!";
    }
    @GetMapping("/api/setmsg")
    public void setmsg(@RequestBody Map<String, String> payload){
        String input_msg = payload.get("message");
        if (input_msg != null) {
            msg = input_msg;
        }
        return ;
    }
    @GetMapping("/api/getmsg")
    public String getmsg() {
        return msg;
    }
}
