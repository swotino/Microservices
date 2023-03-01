package com.microservices.rest.springrest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/")
public class HttpController {

    @GetMapping("hello")
    public String helloWorld() {
        try {
            var a = new int[2];
            a[3] = 1;
        } catch(Exception e) {
            e.printStackTrace();
        }
        return "Hello World!";
    }
}
