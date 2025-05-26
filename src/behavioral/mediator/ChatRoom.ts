/**
 * The Mediator interface declares methods used by components to notify the mediator about various events.
 */
export interface Mediator {
  notify(sender: Component, event: string): void;
}

/**
 * The Component interface declares methods for components that can be used with a mediator.
 */
export interface Component {
  setMediator(mediator: Mediator): void;
}

/**
 * Base Component provides the basic functionality of storing a mediator's instance inside component objects.
 */
export abstract class BaseComponent implements Component {
  protected mediator: Mediator | null = null;

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

/**
 * Concrete Mediator implements cooperative behavior by coordinating several components.
 */
export class ChatRoom implements Mediator {
  private users: Map<string, User> = new Map();

  public registerUser(user: User): void {
    this.users.set(user.getName(), user);
    user.setMediator(this);
  }

  public notify(sender: Component, event: string): void {
    if (event.startsWith('message:')) {
      const [_, message] = event.split(':');
      this.broadcastMessage(sender as User, message);
    } else if (event === 'join') {
      this.broadcastSystemMessage(`${(sender as User).getName()} has joined the chat`);
    } else if (event === 'leave') {
      this.broadcastSystemMessage(`${(sender as User).getName()} has left the chat`);
    }
  }

  private broadcastMessage(sender: User, message: string): void {
    for (const [name, user] of this.users) {
      if (name !== sender.getName()) {
        user.receiveMessage(sender.getName(), message);
      }
    }
  }

  private broadcastSystemMessage(message: string): void {
    for (const user of this.users.values()) {
      user.receiveSystemMessage(message);
    }
  }
}

/**
 * Concrete Components implement various functionality. They don't depend on other components.
 * They also don't depend on any concrete mediator classes.
 */
export class User extends BaseComponent {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public sendMessage(message: string): void {
    if (this.mediator) {
      this.mediator.notify(this, `message:${message}`);
    }
  }

  public join(): void {
    if (this.mediator) {
      this.mediator.notify(this, 'join');
    }
  }

  public leave(): void {
    if (this.mediator) {
      this.mediator.notify(this, 'leave');
    }
  }

  public receiveMessage(sender: string, message: string): void {
    console.log(`${this.name} received message from ${sender}: ${message}`);
  }

  public receiveSystemMessage(message: string): void {
    console.log(`[System] ${message}`);
  }
} 