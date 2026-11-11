package com.sowmya.portfolio.controller;

import com.sowmya.portfolio.model.ContactMessage;
import com.sowmya.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> submitContactForm(@Valid @RequestBody ContactMessage message) {
        ContactMessage saved = contactService.processContactMessage(message);

        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Inquiry received and recorded successfully!");
        response.put("messageId", saved.getId());

        return ResponseEntity.ok(response);
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> healthCheck() {
        Map<String, String> status = new HashMap<>();
        status.put("status", "UP");
        status.put("service", "Sowmya's Portfolio Contact API");
        return ResponseEntity.ok(status);
    }
}

