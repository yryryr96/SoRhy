package ssafy.sorhy.util.mattermost;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component
@Getter
@Setter
@Primary
@ConfigurationProperties("notifications.mattermost")
public class MattermostProperties {

    private String channel;
    private String pretext;
    private String color = "#ff5d52";
    private String authorName;
    private String authorIcon;
    private String title;
    private String text = "";
    private String footer = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));

}
