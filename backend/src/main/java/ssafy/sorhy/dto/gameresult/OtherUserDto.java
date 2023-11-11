package ssafy.sorhy.dto.gameresult;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ssafy.sorhy.entity.gameresult.Team;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OtherUserDto {

    private String nickname;
}
