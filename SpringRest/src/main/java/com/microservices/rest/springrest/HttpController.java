package com.microservices.rest.springrest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/")
public class HttpController {

    @GetMapping("hello")
    public String helloWorld() {
        
        while(true){
            
        }
        
        return "Hello World!";
    }
}
