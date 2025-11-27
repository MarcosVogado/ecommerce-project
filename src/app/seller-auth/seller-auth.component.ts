import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService) { }

  ngOnInit(): void {
  }

  signUp(data:object):void{
    console.warn(data)
    this.seller.userSignUp(data).subscribe((result)=>{
      console.warn(result)
    })
  }
//Só fiz esse comentário pra deixar o verdinho lá no github, essa semana tô mt ocupado com outros tipos de projetos no trabalho
}
