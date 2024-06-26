import http from '@/lib/http';
import { WorkspaceType } from '@/lib/schema/workspace/workspace.schema';

const workspaceApiRequest = {
  create: (body: any) => http.post('/workspaces', body),
  getMyWorkspaces: (): Promise<any> => http.get('/workspaces/me'),
  getMySharedWorkspaces: (): Promise<any> => http.get('/workspaces/me/share'),
};

export default workspaceApiRequest;
