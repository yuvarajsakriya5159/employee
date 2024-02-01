import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {
  private userPermission: string = "";

  roleDescription: any = [
    {
      role: 'SuperAdmin',
      permissions: ['edit', 'delete'],
    },
    {
      role: 'Admin',
      permissions: ['edit'],
    },
    {
      role: 'user',
      permissions: [],
    }
  ]
  // currentUserRole: any;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private dataService: MainServiceService
  ){}

  @Input() set appPermission(permission: string) {
    this.userPermission = permission;
 
    
    // console.log(this.dataService.currentUserRole);

    // Check permissions and update the view accordingly
    this.updateView(this.dataService.currentUserRole);
   
  }

  private updateView(currentUserRole: string) {

    let flag: boolean = false;
    

    this.roleDescription.find((data: any) => {
      
      if (data.role === currentUserRole) {
        flag = data.permissions.includes(this.userPermission);
        
      }
    })

    this.viewContainer.clear();

    if (flag) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      
    }
  }
}