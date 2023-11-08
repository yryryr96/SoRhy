package ssafy.sorhy.controller.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.dto.user.UserDto;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.entity.usercharacter.UserCharacter;
import ssafy.sorhy.exception.CustomException;
import ssafy.sorhy.exception.ErrorCode;
import ssafy.sorhy.repository.user.UserRepository;
import ssafy.sorhy.service.user.UserService;
import ssafy.sorhy.service.usercharacter.UserCharacterService;
import ssafy.sorhy.util.response.Response;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Slf4j
public class UserApiController {

    private final UserService userService;
    private final UserRepository userRepository;
    private final UserCharacterService userCharacterService;

    @PostMapping("/join")
    public Response<UserDto.joinRes> save(@Valid @RequestBody UserDto.joinReq request) {

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
    public Response<UserDto.loginRes> login(@RequestBody UserDto.loginReq request) {
        UserDto.loginRes response = userService.login(request);
        return new Response(200, "로그인 성공", response);
    }

    @GetMapping("/{nickname}")
    public Response<UserDto.findRes> findByNickname(@PathVariable String nickname,
                                                    @PageableDefault(size=6) Pageable pageable) {

        UserDto.findRes response = userService.findByNickname(nickname, pageable);
        return new Response(200,"닉네임으로 유저 전적 조회 성공", response);
    }
}
