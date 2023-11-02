package ssafy.sorhy.util.response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
public class ErrorResponse {
    private final String result;
    private final int code;
    private final String message;

    public ErrorResponse(int code, String message) {

        this.result = "ERROR";
        this.code = code;
        this.message = message;
    }
}
