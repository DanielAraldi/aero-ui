import { faker } from '@faker-js/faker';

export function mockWords(): string {
  return faker.word.words();
}

export function mockRGB(): string {
  return faker.color.rgb();
}
