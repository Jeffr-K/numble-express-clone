import { RouteDefinition } from "./route-definition";

export const Get = (path: string): MethodDecorator => {
  // @ts-ignore
  return (target, propertyKey: string): void => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;
    routes.push({ requestMethod: 'get', path, methodName: propertyKey });
    Reflect.defineMetadata('routes', routes, target.constructor);
  }
}