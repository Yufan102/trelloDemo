package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Ticket;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.util.*;

@Service
public interface TicketService {
    public Ticket create(Ticket ticket);

    public void delete(Ticket ticket);

    public void deleteByID(Long id);

    public List<Ticket> getAll();

    public Optional<Ticket>getByID(Long id);

    public Optional<Ticket> addTicketToList(String name, Long board_id, Long ticket_id);

}
