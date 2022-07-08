package com.group7.group7trello.Services;

import com.group7.group7trello.Models.User;
import com.group7.group7trello.Models.Workspace;
import com.group7.group7trello.Repositories.UserRepository;
import com.group7.group7trello.Repositories.WorkspaceRepository;
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
class WorkspaceServiceImplTest {
    @Mock
    @Autowired
    private WorkspaceRepository workspaceRepository;

    @InjectMocks
    private WorkspaceServiceImpl workspaceService = new WorkspaceServiceImpl();


    @Test
    void getByID() {
        Workspace workspace = new Workspace();
        Mockito.when(workspaceRepository.findById(anyLong())).thenReturn(Optional.of(workspace));
        assertNotNull(workspaceService.getByID(anyLong()));
    }


    @Test
    void delete() {
        Workspace workspace = new Workspace();
        assertEquals(workspaceService.delete(workspace).get("operation"),true);
    }

    @Test
    void findAll() {
        List<Workspace> workspaceList = new ArrayList<>();
        Mockito.when(workspaceRepository.findAll()).thenReturn(workspaceList);
        assertNotNull(workspaceService.findAll());
    }

}