package ssafy.sorhy.exception;

import lombok.RequiredArgsConstructor;
import org.hibernate.TypeMismatchException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ssafy.sorhy.util.mattermost.NotificationManager;
import ssafy.sorhy.util.response.ErrorResponse;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

@RestControllerAdvice
@RequiredArgsConstructor
public class ExceptionHandlerAdvisor {

    private final NotificationManager notificationManager;

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpServletRequest req) {

        String message = ex.getMessage();
        ErrorResponse errorResponse = new ErrorResponse(400, message);
        notificationManager.sendNotification(ex, req.getRequestURI(), getParams(req));
        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(TypeMismatchException.class)
    public ResponseEntity<ErrorResponse> handleTypeMismatchException(TypeMismatchException ex, HttpServletRequest req) {

        String message = ex.getMessage();
        ErrorResponse errorResponse = new ErrorResponse(400, message);
        notificationManager.sendNotification(ex, req.getRequestURI(), getParams(req));
        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponse> handleNotReadableException(HttpMessageNotReadableException ex, HttpServletRequest req) {

        ErrorResponse errorResponse = new ErrorResponse(400, "데이터 형식을 확인해주세요.");
        notificationManager.sendNotification(ex, req.getRequestURI(), getParams(req));
        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<ErrorResponse> handleCustomException(CustomException ex, HttpServletRequest req) {

        ErrorResponse errorResponse = new ErrorResponse(ex.getErrorCode().getStatus(), ex.getMessage());
        notificationManager.sendNotification(ex, req.getRequestURI(), getParams(req));
        return new ResponseEntity(errorResponse, HttpStatus.valueOf(ex.getErrorCode().getStatus()));
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
