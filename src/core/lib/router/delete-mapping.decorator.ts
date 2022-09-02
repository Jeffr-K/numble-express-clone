import { RouteDefinition } from "./route-definition";

export const Delete = (path: string): MethodDecorator => {
  // @ts-ignore
  return (target, propertyKey: string): any => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;
    routes.push({ requestMethod: 'delete', path, methodName: propertyKey });
    Reflect.defineMetadata('routes', routes, target.constructor);
  }
}