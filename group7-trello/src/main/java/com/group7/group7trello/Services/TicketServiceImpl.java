package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Ticket;
import com.group7.group7trello.Repositories.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.util.List;
import java.util.Optional;

@Service
public class TicketServiceImpl implements TicketService{
    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public Ticket create(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public void delete(Ticket ticket) {
        ticketRepository.delete(ticket);
    }

    @Override
    public void deleteByID(Long ticketId) {
        Optional<Ticket> ticket = Optional.of(new Ticket());
        ticket = ticketRepository.findById(ticketId);

        ticket.ifPresent(value -> ticketRepository.delete(value));

    }

    @Override
    public List<Ticket> getAll() {
        return ticketRepository.findAll();
    }

    @Override
    public Optional<Ticket> getByID(Long id) {
        return ticketRepository.findById(id);
    }

}
