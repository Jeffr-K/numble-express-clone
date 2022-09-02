export interface RouteDefinition {
  path: string;
  requestMethod: 'get' | 'post' | 'delete' | 'patch' | 'put';
  methodName: string;
}