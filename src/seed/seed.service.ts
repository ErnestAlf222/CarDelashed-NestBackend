import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService:CarsService,
    private readonly brandsService:BrandsService){
    
    
    
  }
  
  
  // Cargar semilla de información BD  
  populateDB(){
    
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillCarsWithSeedDat(BRANDS_SEED);
    
    return 'seed succesus!!'

  }
}
