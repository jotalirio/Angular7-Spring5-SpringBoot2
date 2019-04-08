import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from 'src/models/client';
import { ClientService } from 'src/services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2'; // https://sweetalert2.github.io

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private title: string;
  private client: Client;

  constructor(
    private _clientService: ClientService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute  
  ) {
    this.title = "Create Client";
    this.client = new Client();
   }

  ngOnInit() {
    this.loadClient();
  }

  public loadClient(): void {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this._clientService.getClient(id).subscribe(
          (client) => this.client = client
        );
      }
    });
  }


  public create(): void {
    this._clientService.create(this.client).subscribe(
      (client) => {
        this._router.navigate(['/clients']);
        swal.fire('New client saved', `Client ${client.name} created successfully!`, 'success');
      },
      (error) => {
        console.log("ERROR creating new client.")
      }
    );
  }

  public update(): void {
    this._clientService.update(this.client).subscribe(
      (client) => {
        this._router.navigate(['/clients']);
        swal.fire('Client updated', `Client ${client.name} updated successfully!`, 'success');
      }
    );
  }

}
