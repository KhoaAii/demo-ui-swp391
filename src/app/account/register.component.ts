import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService,AlertService } from "../_services";
import {MatDialog} from "@angular/material/dialog";

declare var $: any;
@Component({ templateUrl: 'register.component.html',
    styleUrls: ['../../styles.css']})
export class RegisterComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;
    errors:String[] = [];
    isError = false;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService,
        private dialog: MatDialog,
    ) { }

    // @ts-ignore
    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', [Validators.required,Validators.minLength(6)]],
            reWritePassWord: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            // email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],

        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        if(!this.ValidateInital()){
            return;
        }
        // const mess = this.ValidateInital();
        // if( mess.length >0){
        //     let row = {title:"Lỗi đăng ký",
        //         errors:mess,
        //     }
        //     this.openDialog(row);
        //     return;
        // }else{
            this.loading = true;
            this.accountService.register(this.form.value)
                .pipe(first())
                .subscribe({
                    next: () => {
                        this.showNotification2(2,"Register thành công",'top','right');
                        this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                        this.router.navigate(['/login'], { relativeTo: this.route });
                    },
                    error: error => {
                        this.showNotification2(4,"Register thất bại",'top','right');
                        this.alertService.error(error);
                        this.loading = false;
                    }
                });
        }

    // }
    ValidateInital(){
        // const mess :String [] = [];
        this.errors = [];
        if(this.form.controls['password'].value != this.form.controls['reWritePassWord'].value){
            // mess.push("Password và nhập lại password phải giống nhau");
            this.errors.push("Password và nhập lại password phải giống nhau");
            this.alertService.error("Password và nhập lại password phải giống nhau");
            this.isError = true;
            return false
        }
        // return mess;
        this.isError = false;
        return true;

    }
    // public openDialog(row: any): void {
    //     this.dialog
    //         .open(PoupMessageComponent, {
    //             data: row,
    //             autoFocus: false
    //         })
    //         .afterClosed()
    //         .subscribe((mess) => {
    //             if (mess) {
    //                 "done";
    //             }
    //         });
    // }
    showNotification2(kind:any,mess:any,from:any, align:any){
        const type = ['','info','success','warning','danger'];

        // const color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "notifications",
            message: mess,

        },{
            type: type[kind],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }
}
