package com.visitormaker.javaScriptDemo.repository;

import com.visitormaker.javaScriptDemo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository <User, String> {
    // this naming formula automaticaly crerates SELECT * FROM users WHERE username = :username  (findByUsername)
    User findByUsername(String username);

}
