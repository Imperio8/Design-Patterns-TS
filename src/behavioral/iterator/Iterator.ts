/**
 * The Iterator interface declares the operations required for traversing a collection.
 */
export interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

/**
 * The Collection interface declares one or multiple methods for getting iterators.
 */
export interface Collection<T> {
  createIterator(): Iterator<T>;
}

/**
 * Concrete collection that stores items in an array.
 */
export class ArrayCollection<T> implements Collection<T> {
  private items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public createIterator(): Iterator<T> {
    return new ArrayIterator<T>(this.items);
  }
}

/**
 * Concrete iterator that implements the traversal algorithm over an array.
 */
export class ArrayIterator<T> implements Iterator<T> {
  private items: T[];
  private position: number = 0;

  constructor(items: T[]) {
    this.items = items;
  }

  public hasNext(): boolean {
    return this.position < this.items.length;
  }

  public next(): T {
    if (this.hasNext()) {
      return this.items[this.position++];
    }
    throw new Error('No more items');
  }
}

/**
 * Concrete collection that stores items in a map.
 */
export class MapCollection<K, V> implements Collection<[K, V]> {
  private items: Map<K, V>;

  constructor(items: Map<K, V> = new Map()) {
    this.items = items;
  }

  public addItem(key: K, value: V): void {
    this.items.set(key, value);
  }

  public createIterator(): Iterator<[K, V]> {
    return new MapIterator<K, V>(this.items);
  }
}

/**
 * Concrete iterator that implements the traversal algorithm over a map.
 */
export class MapIterator<K, V> implements Iterator<[K, V]> {
  private items: Map<K, V>;
  private keys: K[];
  private position: number = 0;

  constructor(items: Map<K, V>) {
    this.items = items;
    this.keys = Array.from(items.keys());
  }

  public hasNext(): boolean {
    return this.position < this.keys.length;
  }

  public next(): [K, V] {
    if (this.hasNext()) {
      const key = this.keys[this.position++];
      const value = this.items.get(key)!;
      return [key, value];
    }
    throw new Error('No more items');
  }
} 