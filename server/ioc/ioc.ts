import { Container, inject } from 'inversify';
import { autoProvide, makeFluentProvideDecorator, makeProvideDecorator } from 'inversify-binding-decorators';

const container = new Container();

// middlewares

const provide = makeProvideDecorator(container);
const fluentProvider = makeFluentProvideDecorator(container);

const provideNamed = function (identifier: any, name: any) {
  return fluentProvider(identifier).whenTargetNamed(name).done(true);
};

export { container, autoProvide, provide, provideNamed, inject };
