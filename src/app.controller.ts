import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('/plants')
  redirect(){} //eslint-disable-line
}
