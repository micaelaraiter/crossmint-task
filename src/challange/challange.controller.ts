import { Controller, Get, UseGuards } from '@nestjs/common';
import { ChallangeService } from './challange.service';

@Controller('challange')
export class ChallangeController {
  constructor(private challangeService: ChallangeService) {}

  @Get('/dopolyanetcross')
  async doPOLYanetcross() {
    try {
      const resultados = await this.challangeService.createCross();
      return { resultados };
    } catch (error) {
      console.error('Error en el controlador:', error);
      throw new Error('Hubo un error en el servidor');
    }
  }
  @Get('/dologo')
  async doLogo() {
    try {
      const resultados = await this.challangeService.createLogo();
      return { resultados };
    } catch (error) {
      console.error('Error en el controlador:', error);
      throw new Error('Hubo un error en el servidor');
    }
  }
}
