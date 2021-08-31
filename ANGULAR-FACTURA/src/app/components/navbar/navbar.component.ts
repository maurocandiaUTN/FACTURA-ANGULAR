import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  buscador: string = "";

  constructor(
    private activatedRoute:ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  buscar(){
    
    this.router.navigate(['/home/buscador',this.buscador ]);

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/home/buscador',this.buscador]);
  });
    
  }

  

}
