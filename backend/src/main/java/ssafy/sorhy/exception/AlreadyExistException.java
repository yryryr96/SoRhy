package ssafy.sorhy.exception;

import java.sql.SQLException;
import java.util.function.Consumer;

public class AlreadyExistException extends SQLException {

    private static final String message = "이미 등록된 닉네임입니다.";

    public AlreadyExistException() {
        super(message);
    }
}
