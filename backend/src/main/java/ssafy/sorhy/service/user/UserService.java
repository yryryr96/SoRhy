package ssafy.sorhy.service.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssafy.sorhy.dto.user.UserDto;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.jwt.JwtTokenUtil;
import ssafy.sorhy.repository.user.UserRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder;

    @Value("${jwt.secret}")
    private String secretKey;

    // 계정 저장
    public UserDto.joinRes save(UserDto.joinReq request) {

        if (userRepository.existsByNickname(request.getNickname())) {
            throw new RuntimeException("닉네임이 이미 존재합니다.");
        }

        User user = request.toEntity();

        User saveUser = userRepository.save(user.hashPassword(encoder));
        return saveUser.toJoinDto();
    }

    // 로그인
    public String login(UserDto.loginReq request) {

        User user = userRepository.findByNickname(request.getNickname());
        System.out.println("로그인시도 : 리퀘 비번" + request.getPassword() + " 유저 비번 : " + user.getPassword());
        if (encoder.matches(request.getPassword(), user.getPassword())) {
            String token = JwtTokenUtil.createToken(user.getNickname(), secretKey, 60 * 1000 * 10);
            return token;
        } else {
            throw new RuntimeException("비밀번호가 틀려요");
        }
    }
    
    // 전체 유저 조회
    public List<User> findAll() {

        return userRepository.findAll();
    }
    
    // 유저 닉네임으로 유저 정보 조회
    public UserDto.findRes findByNickname(String nickname) {

        User findUser = userRepository.findByNickname(nickname);
        return findUser.toFindDto();
    }
}
