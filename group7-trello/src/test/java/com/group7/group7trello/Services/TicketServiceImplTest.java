package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Ticket;
import com.group7.group7trello.Repositories.TicketRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
class TicketServiceImplTest {
    @Mock
    @Autowired
    private TicketRepository ticketRepository;

    @InjectMocks
    private TicketServiceImpl ticketService = new TicketServiceImpl();

    @Test
    void create() {
        Ticket ticket = new Ticket();
        Mockito.when(ticketRepository.save(ticket)).thenReturn(ticket);

        Ticket reTicket = ticketService.create(ticket);
        assertNotNull(reTicket);
    }

    @Test
    void delete() {
        Ticket ticket = new Ticket();
        ticketService.delete(ticket);
    }

    @Test
    void deleteByID() {
        ticketService.deleteByID(anyLong());
    }

    @Test
    void getAll() {
        List<Ticket>tickets = new ArrayList<>();
        Mockito.when(ticketRepository.findAll()).thenReturn(tickets);

        assertNotNull(ticketService.getAll());
    }

    @Test
    void getByID() {
        Ticket ticket = new Ticket();
        Mockito.when(ticketRepository.findById(anyLong())).thenReturn(Optional.of(ticket));
        assertNotNull(ticketService.getByID(anyLong()));
    }

}