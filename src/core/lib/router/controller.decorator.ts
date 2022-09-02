export const Controller = (_prefix: string = ''): ClassDecorator =>{
  return (target: any) => {
    Reflect.defineMetadata('prefix', _prefix, target);
    if (!Reflect.hasMetadata('routes', target)) {
      Reflect.defineMetadata('routes', [], target);
    }
  }
}
