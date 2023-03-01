package com.microservices.rest.springrest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import java.util.List;
//import java.util.ArrayList;

@RestController
@RequestMapping("api/")
public class HttpController {

    @GetMapping("hello")
    public String helloWorld() {
        /*
        try {
            var a = new int[2];
            a[3] = 1;
        } catch(Exception e) {
            e.printStackTrace();
        }
        
        List<String> list = new ArrayList<String>();
        
        new Thread(new Runnable() {
            public void run() {
                for(String s : list) {
                    System.out.println(s);
                }
            }
        }).start();
        */
        
        
        return "Hello World!";
    }
}
