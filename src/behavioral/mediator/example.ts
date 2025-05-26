import { ChatRoom, User } from './ChatRoom';

/**
 * The Mediator pattern is a behavioral design pattern that lets you reduce chaotic dependencies between objects.
 * The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.
 * 
 * Key benefits:
 * - Single Responsibility Principle
 * - Open/Closed Principle
 * - Reduces coupling between components
 * - Centralizes complex communications
 * 
 * Common use cases:
 * - Chat applications
 * - Air traffic control
 * - Event handling systems
 * - GUI frameworks
 */
export function mediatorExample(os: string): void {
  console.log('\nMediator Pattern Example: Chat Room System\n');

  // Create chat room
  const chatRoom = new ChatRoom();

  // Create users
  const alice = new User('Alice');
  const bob = new User('Bob');
  const charlie = new User('Charlie');

  // Register users with chat room
  chatRoom.registerUser(alice);
  chatRoom.registerUser(bob);
  chatRoom.registerUser(charlie);

  // Users join the chat
  console.log('Users joining the chat:');
  alice.join();
  bob.join();
  charlie.join();

  // Users send messages
  console.log('\nUsers sending messages:');
  alice.sendMessage('Hello everyone!');
  bob.sendMessage('Hi Alice!');
  charlie.sendMessage('Hey there!');

  // User leaves
  console.log('\nUser leaving:');
  bob.leave();
} 