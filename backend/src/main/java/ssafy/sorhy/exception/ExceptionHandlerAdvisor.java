package ssafy.sorhy.exception;

import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import org.hibernate.TypeMismatchException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ssafy.sorhy.util.mattermost.NotificationManager;
import ssafy.sorhy.util.response.ErrorResponse;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;
import java.util.NoSuchElementException;

@RestControllerAdvice
@RequiredArgsConstructor
public class ExceptionHandlerAdvisor {

    private final NotificationManager notificationManager;

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpServletRequest req) {

        BindingResult result = ex.getBindingResult();
        ErrorResponse errorResponse = new ErrorResponse(400, result.getAllErrors().get(0).getDefaultMessage(), "유효성 검사에 실패했습니다.");

        notificationManager.sendNotification(ex, req.getRequestURI(), getParams(req));
        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AlreadyExistException.class)
    public ResponseEntity<ErrorResponse> handleDuplicateNickName(AlreadyExistException ex, HttpServletRequest req) {

        String message = ex.getMessage();
        ErrorResponse errorResponse = new ErrorResponse(409, "이미 등록된 닉네임입니다.", message);

        notificationManager.sendNotification(ex, req.getRequestURI(), getParams(req));
        return new ResponseEntity(errorResponse, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NotValidUserException.class)
    public ResponseEntity<ErrorResponse> handleAuthorityUser(NotValidUserException ex, HttpServletRequest req) {

        String message = ex.getMessage();
        ErrorResponse errorResponse = new ErrorResponse(401, "권한이 없는 사용자입니다.", message);

        notificationManager.sendNotification(ex, req.getRequestURI(), getParams(req));
        return new ResponseEntity(errorResponse, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<ErrorResponse> handleNullpointException(NullPointerException ex, HttpServletRequest req) {

        String message = ex.getMessage();
        ErrorResponse errorResponse = new ErrorResponse(400, "값이 null 입니다.", message);

        notificationManager.sendNotification(ex, req.getRequestURI(), getParams(req));
        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<ErrorResponse> handleNoSuchElementException(NoSuchElementException ex, HttpServletRequest req) {

        String message = ex.getMessage();
        ErrorResponse errorResponse = new ErrorResponse(500, "값이 존재하지 않습니다.", message);

        notificationManager.sendNotification(ex, req.getRequestURI(), getParams(req));
        return new ResponseEntity(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(TypeMismatchException.class)
    public ResponseEntity<ErrorResponse> handleTypeMismatchException(TypeMismatchException ex, HttpServletRequest req) {

        String message = ex.getMessage();
        ErrorResponse errorResponse = new ErrorResponse(400, "데이터 타입을 확인해주세요.", message);

        notificationManager.sendNotification(ex, req.getRequestURI(), getParams(req));
        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponse> handleNotReadableException(HttpMessageNotReadableException ex, HttpServletRequest req) {

        String message = ex.getMessage();
        ErrorResponse errorResponse = new ErrorResponse(400, "데이터 형식을 확인해주세요.", message);

        notificationManager.sendNotification(ex, req.getRequestURI(), getParams(req));
        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }

    private String getParams(HttpServletRequest req) {
        StringBuilder params = new StringBuilder();
        Enumeration<String> keys = req.getParameterNames();
        while (keys.hasMoreElements()) {
            String key = keys.nextElement();
            params.append("- ").append(key).append(" : ").append(req.getParameter(key)).append('\n');
        }

        return params.toString();
    }
}
