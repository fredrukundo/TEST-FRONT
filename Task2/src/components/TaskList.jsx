import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasksRequest, addTaskRequest, updateTaskRequest, removeTaskRequest } from '../redux/actions/taskActions';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 50px auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const TaskListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const TaskTitle = styled.span`
  flex: 1;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed }) => (completed ? '#757575' : '#333')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #6200ea;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #3700b3;
  }
`;

const AddButton = styled(Button)`
  background-color: #03dac6;

  &:hover {
    background-color: #018786;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: calc(100% - 22px);
  margin-bottom: 10px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s;

  &:focus {
    border-color: #6200ea;
    outline: none;
  }
`;

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      const newTask = { userId: 1, title: newTaskTitle, completed: false };
      dispatch(addTaskRequest(newTask));
      setNewTaskTitle('');
    }
  };

  const handleUpdateTask = (task) => {
    dispatch(updateTaskRequest({ ...task, completed: !task.completed }));
  };

  const handleRemoveTask = (taskId) => {
    dispatch(removeTaskRequest(taskId));
  };

  return (
    <Container>
      <Title>Task List</Title>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <TaskListContainer>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskTitle completed={task.completed}>{task.title}</TaskTitle>
            <div>
              <Button onClick={() => handleUpdateTask(task)}>
                {task.completed ? 'Undo' : 'Complete'}
              </Button>
              <Button onClick={() => handleRemoveTask(task.id)}>Remove</Button>
            </div>
          </TaskItem>
        ))}
      </TaskListContainer>
      <Input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="New task title"
      />
      <AddButton onClick={handleAddTask}>Add Task</AddButton>
    </Container>
  );
};

export default TaskList;
