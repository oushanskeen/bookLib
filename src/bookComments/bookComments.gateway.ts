import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WsResponse,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { BookCommentsService } from './bookComments.service';
import { BookComment } from './schemas/bookComment.schema';
import { CreateBookCommentDto } from './dto/create-bookComment.dto';

@WebSocketGateway()
export class BookCommentsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('BookCommentsGateway');

  constructor(private readonly bookCommentsService: BookCommentsService) {}

  @WebSocketServer() wss: Server;

  afterInit(server: Server) {
    this.logger.log('Initialized!');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, data: string): WsResponse<string> {
    //return 'Hello world!';
    return { event: 'msgToClient', data: data };
  }

  @SubscribeMessage('getAllComments')
  async getAllComments(
    /*@MessageBody()*/ client: Socket,
    id: number,
  ): /*WsResponse*/ Promise<BookComment[]> {
    //return { event: 'events', data: ['commentOne', 'commentTwo'] };
    return this.bookCommentsService.getAll();
  }

  @SubscribeMessage('addComment')
  async addComment(
    /*@MessageBody()*/
    client: Socket,
    commentText: CreateBookCommentDto,
  ): Promise<BookComment> {
    //return 'comment is added';
    return this.bookCommentsService.create(commentText);
  }
}
