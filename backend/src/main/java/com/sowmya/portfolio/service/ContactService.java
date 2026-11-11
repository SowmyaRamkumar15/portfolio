package com.sowmya.portfolio.service;

import com.sowmya.portfolio.model.ContactMessage;
import com.sowmya.portfolio.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired(required = false)
    private ContactMessageRepository contactMessageRepository;

    @Autowired(required = false)
    private JavaMailSender mailSender;

    public ContactMessage processContactMessage(ContactMessage message) {
        // 1. Persist to MySQL database if repository is active
        ContactMessage saved = message;
        if (contactMessageRepository != null) {
            saved = contactMessageRepository.save(message);
        }

        // 2. Dispatch Email notification via JavaMail
        if (mailSender != null) {
            try {
                SimpleMailMessage email = new SimpleMailMessage();
                email.setTo("sowmyaramkumar15@gmail.com");
                email.setSubject("[Portfolio Inquiry] " + message.getSubject());
                email.setText(
                    "You received a new inquiry from your personal portfolio:\n\n" +
                    "Name: " + message.getName() + "\n" +
                    "Email: " + message.getEmail() + "\n\n" +
                    "Message:\n" + message.getMessage()
                );
                mailSender.send(email);
            } catch (Exception e) {
                System.err.println("Could not dispatch email via SMTP: " + e.getMessage());
            }
        }

        return saved;
    }
}

