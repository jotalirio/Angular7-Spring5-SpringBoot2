import { Component, OnInit } from '@angular/core';
import { Client } from 'src/models/client';
import { ClientService } from 'src/services/client.service';
import swal from 'sweetalert2'; // https://sweetalert2.github.io

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public clients: Client[] = null;
  
  constructor(private _clientService: ClientService) {
   }

  ngOnInit() {
    this._clientService.getClients().subscribe(
      (res) => { 
        this.clients = res // this is the Observator. This Observator suscribes to the Observable<Client[]> returned by the getClients() service
      },
      (error) => {
        console.log("ERROR fetching the clients.")
      }
    );
  }


  public delete(client: Client): void {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    swalWithBootstrapButtons.fire({
      title: `Are you sure to delete the client '${client.name} ${client.surname}'?`,
      text: `You won't be able to revert this!`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._clientService.delete(client.id).subscribe(
          (response) => { 
            this.clients = this.clients.filter( cli => cli !== client); // Returns an array without the deleted client
            swalWithBootstrapButtons.fire(
              'Client deleted!',
              `The client '${client.name} ${client.surname}' has been deleted successfully!`,
              'success'
            )
          }
        );
      }
    })
  }
}
