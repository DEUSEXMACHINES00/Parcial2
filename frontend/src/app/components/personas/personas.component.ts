import { Component } from '@angular/core';
import { Persona } from "../../models/persona";
import { PersonaService } from "../../services/personas.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  providers: [
    PersonaService
  ]
})
export class PersonasComponent {

  public persona!: Persona
  public personas!: Persona[]
  public botonEditar: boolean = false;
  public botonGuardar: boolean = true;


  constructor(
    private _personaService: PersonaService
  ) {
    this.persona = new Persona('', '', '', 0)
    this._personaService.consultar_personas().subscribe(
      response => {
        this.personas = response.personas

      }
    )
  }

  registrar() {

    this._personaService.registrar_persona(this.persona).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }, error => {
        console.log(error.error.error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.error,

        })
      }
    )

  }

  eliminar(cedula: any) {
    Swal.fire({
      title: 'Esta seguro?',
      text: "No podra revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._personaService.eliminar_persona(cedula).subscribe(
          response => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Persona Eliminada',
              showConfirmButton: false,
              timer: 1500
            })
          }, error => {
    
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.error,

            })
          }
        )

      }
    })
  }

  cargarInfo(cedula: any) {
    this._personaService.getPersona(cedula).subscribe(
      response => {
        this.botonGuardar = false
        this.botonEditar = true
        this.persona = response.persona
      }
    )

  }

  actualizar() {
    this._personaService.actualizarPersona(this.persona).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Informacion Actualizada',
          showConfirmButton: false,
          timer: 1500
        })

      }, error => { 
        console.log(error)
      }
    )
  }

}
