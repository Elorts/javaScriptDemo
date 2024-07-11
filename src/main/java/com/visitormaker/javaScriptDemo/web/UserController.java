package com.visitormaker.javaScriptDemo.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/exists")
    public Boolean getExists(String username, String password) {
        System.out.println("Username = " + username);
        System.out.println("Password = " + password);
        return true;
    }

    @GetMapping("/validateUsername")
    public Boolean getValidUsername(String name) {
        return true;
    }

    @GetMapping("/validatePassword")
    public Boolean getValidPassword(String password) {
        return true;
    }


}
