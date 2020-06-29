package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class StudentController {
    @RequestMapping("/hello.do")
    public String hello(){
       // System.out.println("Hello World");
        return "Hello World!";
    }

}
