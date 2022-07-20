/*

import React, { useEffect, useState, Component } from 'react';
import { FormLabel, FormControlLabel, Radio, RadioGroup, Button, CardHeader, CardContent, TextField, Grid, Card, Container } from '@mui/material';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  //
  const [today, setToday] = useState(new Date());
  //

  useEffect(() => {
    fetch('http://localhost:8000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [])

  const [searchTerm, setSearchTerm] = useState('');

  /*const changeStatus = async (id) => {
    await fetch('http://localhost:8000/tasks' + id, {
      method: 'DELETE'
    })
    const newTasks = tasks.filter(task => task.id != id)
    setTasks(newTasks)
  }

  const changeStatus = async (id) => {
    await fetch('http://localhost:8000/tasks' + id, {
      method: 'DELETE'
    })
    const newTasks = tasks.filter(task => task.id != id)
    setTasks(newTasks)
  }

  const showDue = async (id) => {
    var today = new Date();
    var month = today.getMonth();
    var day = today.getDate();
    var year = today.getFullYear();
    
    var due = new Date();
    var duemonth = due.getMonth()+1;
    var dueday = due.getDate()+1;
    var dueyear = due.getFullYear();

    var yeardiff = due.getFullYear() - year;
    var monthdiff = due.getMonth() - month;
    var daydiff = due.getDate()+1 - day;

    var status;
    var ontime = "Due today";
    var week = "Due this week";
    var over = "Overdue";
    var extra = "More than a week";

    if (yeardiff === 0 & monthdiff === 0 & daydiff === 0) {
        status = ontime;
    } else if (yeardiff === 0 & monthdiff === 0 & daydiff <= 7 & daydiff >= 1) {
        status = week;
    } else if (yeardiff < 0 || monthdiff < 0 || daydiff < 0) {
        status = over;
    } else {
        status = extra;
    }

    return status;
  }

  //
  function getDate(separator='') {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return day;
  }

  return (
    <div>

    <Container>

      <TextField type="text" placeholder="Search" onChange={e => (setSearchTerm(e.target.value))} />
      
      <Grid container spacing={3}>
        {tasks.filter((value) => {
          if (searchTerm == "") {
            return value;
          } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return value;
          } else if (value.dueStatus.toLowerCase().includes(searchTerm.toLowerCase())) {
            return value;
          }
        })
        .map(task => (
          <Grid item xs={12} md={6} lg={4} key={task.id}>

            <Card>
              
              <CardContent>  

              <p>{task.title}</p>
                  <p>{task.desc}</p>
                  <p>{task.due}</p>
                  <p>{task.dueStatus}</p>
                  <p>{task.member}</p>
                  <p>{task.status}</p>
                </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>

    </div>
  )
}

/*
<form>
                <label>
                  <input type="radio" name="progress" value="ToDo"
                   />
                  ToDo
                </label>

                <label>
                  <input type="radio" name="progress" value="Doing"
                   />
                  Doing
                </label>

                <label>
                  <input type="radio" name="progress" value="Done"
                   />
                  Done
                </label>
              </form>

              <Button 
                type="submit"
                onClick={() => changeStatus(task.id)}>
                  Edit
                </Button>
*/
