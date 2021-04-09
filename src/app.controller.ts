import { Controller, Get, Post, Body, BadRequestException, UnauthorizedException, Res, Req} from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';
import {Response, Request} from 'express';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly jwtService: JwtService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
    //return 'Hello? me  your new lib!';
  }

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user =  this.appService.create({
      name,
      email,
      password: hashedPassword
    });

    //delete user.password;
    return user;
  }

  @Post('login')
  async login(
    @Body('email') email:string,
    @Body('passowrd') password:string,
    @Res({passthrough:true}) response: Response 
  ){
    const user = await this.appService.findOne({email});
    if (!user) {
      throw new BadRequestException('invalid credentials');
    }
    if (!await bcrypt.compare(password, user.password)){
      throw new BadRequestException('invalid credentials');
    }
  
    const jwt = await this.jwtService.signAsync({id:user.id});
    response.cookie('jwt', jwt, {httpOnly:true});

    //return user;
    return {message:"success"}
  }

  @Get('user')
  async user(@Req() request: Request){
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);
      if(!data){
        throw new UnauthorizedException();
        const user = await this.appService.findOne({id: data['id']});

        const { password, ...result } = user;
        return result;
      }
    }catch(e){
      throw new UnauthorizedException();
    };

    //return data/*cookie*/;
  }
}
