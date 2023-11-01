package ssafy.sorhy.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ssafy.sorhy.dto.user.UserDto;

import javax.validation.Valid;

@RestController
public class HelloController {

    @GetMapping("/health-check")
    public String hello() {
        return "노창현 수고했어";
    }
}
