package ssafy.sorhy.controller.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ssafy.sorhy.dto.user.UserDto;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.service.user.UserService;
import ssafy.sorhy.util.Response;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Slf4j
public class UserApiController {

    private final UserService userService;

    @PostMapping("/join")
    public Response<UserDto.joinRes> save(@RequestBody UserDto.joinReq request) {

        UserDto.joinRes response = userService.save(request);
        return new Response(201, "회원가입에 성공했습니다.", response);
    }

    @GetMapping("/profile")
    public Response<UserDto.profileRes> profile(Authentication authentication) {

        String nickname = authentication.getName();
        UserDto.profileRes response = userService.findProfileByNickname(nickname);

        return new Response(200, "프로필 조회 성공", response);
    }

    @PostMapping("/login")
    public Response<String> login(@RequestBody UserDto.loginReq request) {
        return new Response(200, "로그인 성공", userService.login(request));
    }

    @GetMapping("/users")
    public List<User> findAll(Authentication authentication) {
        return userService.findAll();
    }

    @GetMapping("/{nickname}")
    public Response<UserDto.findRes> findByNickname(@PathVariable String nickname) {
        UserDto.findRes response = userService.findByNickname(nickname);
        return new Response(200,"닉네임으로 유저 전적 조회 성공", response);
    }
}
