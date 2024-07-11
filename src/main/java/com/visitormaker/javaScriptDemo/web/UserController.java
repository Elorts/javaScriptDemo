package com.visitormaker.javaScriptDemo.web;

import com.visitormaker.javaScriptDemo.domain.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/exists")
    public Boolean getExists(String username, String password) {
        System.out.println("Username = " + username);
        System.out.println("Password = " + password);
        return true;
    }

    @PostMapping("/exists")
    public Boolean postExists(@RequestBody User user) {
        System.out.println("Username = " + user.getUsername());
        System.out.println("Password = " + user.getPassword());
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
