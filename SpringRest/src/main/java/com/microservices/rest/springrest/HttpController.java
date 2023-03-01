package com.microservices.rest.springrest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/")
public class HttpController {

    @GetMapping("hello")
    public String helloWorld() {
        /*
        int test = 9;
        test =+ 10;
        System.out.println(test);
        */
        return "Hello World!";
    }
}
