package ssafy.sorhy.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ssafy.sorhy.service.s3.S3UploadService;

import java.io.IOException;

@RestController
@RequestMapping("/upload")
@RequiredArgsConstructor
public class FileUploadController {

    private final S3UploadService s3UploadService;

    @PostMapping
    public ResponseEntity<String> uploadFile(@RequestParam MultipartFile file, @RequestParam String data) throws IOException {
        System.out.println(data);
        String response = s3UploadService.uploadFile(file);
        return ResponseEntity.ok(response);
    }
}
