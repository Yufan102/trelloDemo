package com.group7.group7trello.Services;

import com.group7.group7trello.Models.Lists;
import com.group7.group7trello.Repositories.ListsRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
class ListsServiceImplTest {

    @Mock
    @Autowired
    private ListsRepository listsRepository;

    @InjectMocks
    private ListsServiceImpl listsService = new ListsServiceImpl();

    @Test
    void getByListNameAndBoardID() {
        Lists lists = new Lists();

        Mockito.when(listsRepository.findByListNameAndBoardID(anyString(),anyLong()))
                .thenReturn(Optional.of(lists));

        assertNotNull(listsService.getByListNameAndBoardID(anyString(),anyLong()));
    }

    @Test
    void add() {
        Lists lists = new Lists();
        Mockito.when(listsRepository.save(lists)).thenReturn(lists);
        assertNotNull(listsService.add(lists));
    }
}