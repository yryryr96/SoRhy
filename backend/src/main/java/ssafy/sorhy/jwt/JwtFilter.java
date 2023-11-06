package ssafy.sorhy.jwt;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import ssafy.sorhy.service.user.UserService;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    @Value("${jwt.secret}")
    private final String secretKey;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        try {
            final String authorization = request.getHeader(HttpHeaders.AUTHORIZATION);
            log.info("-----authorization : {}", authorization);

            if(authorization == null || !authorization.startsWith("Bearer ")){
                log.error("authorization error");
                filterChain.doFilter(request, response);
                return;
            }

            String token = authorization.split(" ")[1];
            if(JwtTokenUtil.isExpired(token, secretKey)) {
                log.error("Token is expired");
                filterChain.doFilter(request, response);
                return;
            }

            String nickname = JwtTokenUtil.getNickName(token, secretKey);

            UsernamePasswordAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(nickname, null, List.of(new SimpleGrantedAuthority("USER")));
            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            filterChain.doFilter(request, response);

        } catch (SignatureException | MalformedJwtException e) { //서명 오류 or JWT 구조 문제
            throw new JwtException("유효하지 않은 토큰입니다.");
        } catch (ExpiredJwtException e) {//유효 기간이 지난 JWT를 수신한 경우
            throw new JwtException("만료된 토큰입니다.");
        } catch(Exception e) {
            SecurityContextHolder.clearContext();
            throw new JwtException("토큰 유무를 확인해주세요.");
        }
    }
}
