package ssafy.sorhy.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;

import java.util.Date;

public class JwtTokenUtil {

    @Value("${jwt.secret}")
    private String secretKey;

    public static String getNickName(String token, String secretKey) {

        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token)
                .getBody().get("nickname", String.class);
    }

    public static boolean isExpired(String token, String secretKey) {

        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token)
                .getBody().getExpiration().before(new Date());
    }

    public static String createToken(String nickname, String secretKey, long expireTimeMs) {

        Claims claims = Jwts.claims();
        claims.put("nickname", nickname);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expireTimeMs))
                .signWith(SignatureAlgorithm.HS256,secretKey)
                .compact();
    }
}
