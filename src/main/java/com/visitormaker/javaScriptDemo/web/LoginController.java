package com.visitormaker.javaScriptDemo.web;

import com.visitormaker.javaScriptDemo.domain.User;
import com.visitormaker.javaScriptDemo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class LoginController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/login")
    public String getLogin(ModelMap model) {
        User user = new User();
        model.put("user", user);
        return "login";
    }

  
  
    
//    @GetMapping("/users")
//    public List listUsers() {
//        return null; //userRepository.findAll();
//    }
}
