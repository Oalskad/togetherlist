import http from '@/lib/http';

const boardApiRequest = {
  getBoardList: (workspaceId: string | undefined) =>
    http.get('/boards/workspaces/' + workspaceId),
  getBoardDetail: (boardId: string) => http.get('/boards/' + boardId),
  createBoard: (boardData: object) => {
    http.post('/boards', boardData);
  },
  updateBoard: (boardId: string, boardData: object) => {},
  deleteBoard: (boardId: string) => {},
};

export default boardApiRequest;
