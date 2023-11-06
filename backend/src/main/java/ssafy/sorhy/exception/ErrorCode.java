package ssafy.sorhy.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    NICKNAME_NOT_FOUND(404, "존재하지 않는 닉네임입니다."),
    DUPLICATED_NICKNAME(409, "이미 존재하는 닉네임입니다."),
    INVALID_PASSWORD(400, "비밀번호가 일치하지 않습니다."),
    UNAUTHORIZED_USER(401, "권한이 없는 유저입니다."),
    DATA_NOT_FOUND(404, "데이터를 찾을 수 없습니다."),
    NOT_VALID_REQUEST(400, "데이터 형식을 확인해주세요");

    private final int status;
    private final String message;
}
