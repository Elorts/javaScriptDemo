package com.visitormaker.javaScriptDemo.web;

import com.visitormaker.javaScriptDemo.domain.User;
import com.visitormaker.javaScriptDemo.repository.UserRepository;
import com.visitormaker.javaScriptDemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private UserService userService;

//    @GetMapping("/exists")
//    @ResponseBody
//    public Boolean getExists(String username, String password) {
//        System.out.println("Username = " + username);
//        System.out.println("Password = " + password);
//        return true;
//    }

    @PostMapping("/exists")
    @ResponseBody
    public Boolean postExists(@RequestBody User user) {

        user = userService.findByUsername(user.getUsername());
        return (user != null);


        // my old code *********************************************

//        List<User> userListFromDb = new ArrayList<>();
//
//        userListFromDb = userRepository.findAll();
//        System.out.println(userListFromDb);
//
//       for (User u : userListFromDb) {
//            if (u.getUsername().equals(user.getUsername()))
//                System.out.println("Success!");
//        }
//
//        System.out.println("Username = " + user.getUsername());
//        System.out.println("Password = " + user.getPassword());

        //return true;
    }
    
    @GetMapping("/validateUsername")
    @ResponseBody
    public Boolean getValidUsername(String name) {
        return true;
    }

    @GetMapping("/validatePassword")
    @ResponseBody
    public Boolean getValidPassword(String password) {
        return true;
    }

    @GetMapping("/register")
    public String getRegister(ModelMap model) {
        User user = new User();

        model.put("user", user);
        return "register";
    }

    @PostMapping("/register")
    public String postRegister(User user) {
        userService.save(user);
        return "redirect:/login";
    }

}
