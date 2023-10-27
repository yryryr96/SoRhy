package ssafy.sorhy.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import ssafy.sorhy.util.ErrorResponse;

import java.util.NoSuchElementException;

@RestControllerAdvice
public class ExceptionHandlerAdvisor {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleMethodArgumentNotValid(MethodArgumentNotValidException ex) {

        BindingResult result = ex.getBindingResult();
        ErrorResponse errorResponse = new ErrorResponse(400, result.getAllErrors().get(0).getDefaultMessage(), "유효성 검사에 실패했습니다.");

        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AlreadyExistException.class)
    public ResponseEntity<ErrorResponse> handleDuplicateNickName(AlreadyExistException ex) {

        String message = ex.getMessage();
        ErrorResponse errorResponse = new ErrorResponse(409, "이미 등록된 닉네임입니다.", message);
        return new ResponseEntity(errorResponse, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<ErrorResponse> handleNullpointException(NullPointerException ex) {

        String message = ex.getMessage();
        ErrorResponse errorResponse = new ErrorResponse(400, "값이 null 입니다.", message);
        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<ErrorResponse> handleNoSuchElementException(NoSuchElementException ex) {

        String message = ex.getMessage();
        ErrorResponse errorResponse = new ErrorResponse(500, "값이 존재하지 않습니다.", message);
        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }

}
