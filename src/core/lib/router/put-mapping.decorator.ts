import { RouteDefinition } from "./route-definition";

export const Put = (path: string): MethodDecorator => {
  // @ts-ignore
  return (target, propertyKey: string): any => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;
    routes.push({ requestMethod: 'put', path, methodName: propertyKey });
    Reflect.defineMetadata('routes', routes, target.constructor);
  }
}