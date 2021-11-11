import { instanceAuth } from './index';

function getboardList(parameter) {
  const params = parameter;
  return instanceAuth.get('board', { params });
}

function getboard(id) {
  return instanceAuth.get(`board/${id}`);
}

function saveUpdateBoard(parameter) {
  return instanceAuth.post('board', parameter);
}

function deleteBoard(id) {
  return instanceAuth.delete(`board/${id}`);
}
export { getboardList, getboard, saveUpdateBoard, deleteBoard };
