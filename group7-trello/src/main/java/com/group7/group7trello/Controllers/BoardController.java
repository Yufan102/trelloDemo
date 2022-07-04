package com.group7.group7trello.Controllers;

import com.fasterxml.jackson.annotation.JacksonAnnotationsInside;
import com.group7.group7trello.Models.Board;
import com.group7.group7trello.Models.Workspace;
import com.group7.group7trello.Repositories.BoardRepository;
import com.group7.group7trello.Services.BoardService;
import com.group7.group7trello.Services.WorkspaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
@RestController
@RequestMapping("/api/board")
public class BoardController {
    @Autowired
    private BoardService boardService;
    @Autowired
    private WorkspaceService workspaceService;

    @Autowired
    private BoardRepository boardRepository;

    @GetMapping(value = "/getAll")
    public List<Board> getAllBoards(){
        return boardService.findAll();
    }

    @GetMapping(value = "/get/{id}", produces = "application/json")
    public Optional<Board> getByID(@PathVariable("id") Long id){return boardService.getByID(id);}

    @PostMapping(value = "/add")
    public Board add(Board board){
        return boardService.add(board);
    }

    @DeleteMapping("/delete")
    public void delete(Board board){boardService.delete(board);}

    @PostMapping(value = "setWorkspace/{boardID}/{workspaceID}",produces = "application/json")
    @Transactional
    @ResponseBody
    public Board linkBoardWithWorkspace(@PathVariable("boardID") Long boardID, @PathVariable("workspaceID") Long workspaceID){
        Optional<Board> board = boardService.getByID(boardID);
        Optional<Workspace>workspace = workspaceService.getByID(workspaceID);

        if(board.isPresent() && workspace.isPresent()){
            /*
            Workspace workspace1 = workspace.get();
            Board board1 = board.get();
            Set<Board> boards = workspace1.getBoards();
            boards.add(board1);

            workspace1.setBoards(boards);
            workspaceService.add(workspace1);
            return boardService.add(board1);
             */
            boardService.addWorkspace(workspace.get(),board.get());
            return board.get();
        }

        return new Board();

    }

    @GetMapping(value = "/getFromWorkspace/{workspaceID}",produces = "application/json")
    public List<Board>getAllBoardsFromWorkspaceID(@PathVariable("workspaceID")Long workspaceID){
        List<Board>returnBoard = new ArrayList<Board>();
        List<Board>boards = boardService.findAll();

        if(boards != null){
            for (Board board : boards){
                if(Objects.equals(board.getWorkspace().getId(), workspaceID)){
                    returnBoard.add(board);
                }
            }
        }

        return returnBoard;

    }
}
